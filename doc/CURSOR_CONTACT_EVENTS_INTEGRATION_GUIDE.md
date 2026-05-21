# App Data Hub：网站“点击联系”信息收集对接指南

适用场景：官网/落地页中，用户点击电话、微信、邮箱、在线咨询、二维码、表单入口等“联系我/联系我们”按钮时，将一次低风险的联系意向事件写入数据服务器。

> 服务器已支持该能力：`POST /v1/public/contact-events`。
>
> 当前线上服务：`https://tuutpi.online`
>
> 本指南不要写入真实密钥到代码仓库。请在 Cursor 项目中使用环境变量。

---

## 1. 认证与安全边界

请求需要携带 App Data Hub 的应用凭据：

```http
X-App-ID: <DATA_HUB_APP_ID>
X-API-Key: <DATA_HUB_API_KEY>
Content-Type: application/json
```

建议在前端项目中使用环境变量：

```bash
VITE_DATA_HUB_BASE_URL=https://tuutpi.online
VITE_DATA_HUB_APP_ID=app_xxx
VITE_DATA_HUB_API_KEY=dh_xxx
```

注意：

1. 不要把后台管理员 Token 放进前端。
2. 当前接口用于“点击联系/行为事件”收集，不建议直接提交身份证、病历、完整手机号等高敏感数据。
3. 如果需要收集用户主动填写的电话/微信/姓名，建议只在明确告知隐私用途后提交，并放在 `metadata` 中；后续也可以单独扩展正式线索表单接口。
4. CORS 需要服务器已允许当前网站域名。默认已包含 `https://tuutpi.online`、`https://www.tuutpi.online` 和常见本地开发端口。

---

## 2. 写入点击联系事件

### Endpoint

```http
POST https://tuutpi.online/v1/public/contact-events
```

### Body 字段

| 字段 | 类型 | 必填 | 说明 |
|---|---|---:|---|
| `channel` | string | 是 | 联系方式/按钮类型：`phone`、`wechat`、`email`、`form`、`qrcode`、`online_chat` 等 |
| `contact_target` | string | 否 | 被点击的具体目标，例如 `main-sales-phone`、`wechat-qr-footer` |
| `page_url` | string | 否 | 当前页面 URL |
| `referrer` | string | 否 | 来源页，通常用 `document.referrer` |
| `campaign` | string | 否 | 活动/广告/页面位置标识，例如 `homepage-hero` |
| `visitor_id` | string | 否 | 访客匿名 ID；可由前端生成并存在 localStorage |
| `metadata` | object | 否 | 额外上下文，例如按钮文案、页面模块、UTM 参数、设备信息等 |

### 成功响应

```json
{
  "id": "ctc_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "status": "ok",
  "created_at": 1779360000
}
```

---

## 3. 前端 TypeScript 示例

```ts
const DATA_HUB_BASE_URL = import.meta.env.VITE_DATA_HUB_BASE_URL || 'https://tuutpi.online'
const DATA_HUB_APP_ID = import.meta.env.VITE_DATA_HUB_APP_ID
const DATA_HUB_API_KEY = import.meta.env.VITE_DATA_HUB_API_KEY

type ContactChannel = 'phone' | 'wechat' | 'email' | 'form' | 'qrcode' | 'online_chat' | string

function getVisitorId() {
  const key = 'tuutpi_visitor_id'
  let id = localStorage.getItem(key)
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem(key, id)
  }
  return id
}

export async function trackContactClick(params: {
  channel: ContactChannel
  contactTarget?: string
  campaign?: string
  metadata?: Record<string, unknown>
}) {
  if (!DATA_HUB_APP_ID || !DATA_HUB_API_KEY) {
    console.warn('Missing Data Hub credentials')
    return
  }

  const body = {
    channel: params.channel,
    contact_target: params.contactTarget,
    page_url: window.location.href,
    referrer: document.referrer || undefined,
    campaign: params.campaign,
    visitor_id: getVisitorId(),
    metadata: {
      ...params.metadata,
      title: document.title,
      path: window.location.pathname,
      search: window.location.search,
    },
  }

  // 点击埋点不要阻塞跳转/拨号；失败只在控制台记录。
  try {
    await fetch(`${DATA_HUB_BASE_URL}/v1/public/contact-events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-App-ID': DATA_HUB_APP_ID,
        'X-API-Key': DATA_HUB_API_KEY,
      },
      body: JSON.stringify(body),
      keepalive: true,
    })
  } catch (err) {
    console.warn('trackContactClick failed', err)
  }
}
```

### 按钮调用示例

```tsx
<button
  onClick={() => {
    trackContactClick({
      channel: 'phone',
      contactTarget: 'homepage-main-phone',
      campaign: 'homepage-hero',
      metadata: { buttonText: '电话咨询', section: 'hero' },
    })
    window.location.href = 'tel:4000000000'
  }}
>
  电话咨询
</button>

<button
  onClick={() => {
    trackContactClick({
      channel: 'wechat',
      contactTarget: 'homepage-wechat-qr',
      campaign: 'homepage-footer',
      metadata: { buttonText: '添加微信', section: 'footer' },
    })
    // 打开微信二维码弹窗
  }}
>
  添加微信
</button>
```

---

## 4. 查询点击联系事件（后台/管理端）

查询接口需要管理员登录后的 Bearer Token，不能放到公开前端。

```http
GET https://tuutpi.online/v1/admin/contact-events?page=1&page_size=50&channel=phone
X-App-ID: <DATA_HUB_APP_ID>
X-API-Key: <DATA_HUB_API_KEY>
Authorization: Bearer <ADMIN_ACCESS_TOKEN>
```

响应：

```json
{
  "items": [
    {
      "id": "ctc_xxx",
      "channel": "phone",
      "contact_target": "homepage-main-phone",
      "page_url": "https://tuutpi.online/contact",
      "referrer": "https://tuutpi.online/",
      "campaign": "homepage-hero",
      "visitor_id": "visitor-001",
      "metadata": { "buttonText": "电话咨询" },
      "user_agent": "Mozilla/5.0 ...",
      "created_at": 1779360000
    }
  ],
  "page": 1,
  "page_size": 50,
  "total": 1,
  "total_pages": 1
}
```

支持筛选：

- `channel=phone`
- `from=<unix秒时间戳>`
- `to=<unix秒时间戳>`
- `page=1&page_size=50`

---

## 5. Cursor 实施建议

1. 在前端项目新增 `src/lib/contactTracking.ts`，放入上面的 `trackContactClick`。
2. 在所有联系入口按钮绑定该函数：电话、微信、邮箱、二维码、在线咨询、表单入口。
3. 不要等待埋点成功再执行用户动作；使用 `keepalive: true`，失败静默。
4. 如果是 Next.js 且希望隐藏 `X-API-Key`，可改为由服务端 API Route 代理到 Data Hub。
5. 上线后用浏览器 DevTools Network 检查 `POST /v1/public/contact-events` 返回 201。

---

## 6. 最小 curl 测试

```bash
curl -i -X POST 'https://tuutpi.online/v1/public/contact-events' \
  -H 'Content-Type: application/json' \
  -H "X-App-ID: $DATA_HUB_APP_ID" \
  -H "X-API-Key: $DATA_HUB_API_KEY" \
  -d '{
    "channel": "phone",
    "contact_target": "curl-test-phone",
    "page_url": "https://tuutpi.online/contact",
    "campaign": "manual-test",
    "visitor_id": "curl-test-visitor",
    "metadata": {"source": "curl"}
  }'
```

预期：HTTP `201 Created`，返回 `ctc_` 开头的事件 ID。
