# MyHealthData 项目文档

本目录记录 **myhealthdata** 项目的开发情况、功能说明与变更历史。

**文档最后更新**：2026-05-21 23:10:06（UTC+8）

## 文档索引

| 文档 | 说明 |
|------|------|
| [更新日志](./更新日志.md) | **按日期记录的版本变更**（下次改动请先更新此文件） |
| [项目概述](./项目概述.md) | 项目定位、技术栈、站点架构 |
| [已完成功能](./已完成功能.md) | 按模块整理的当前已实现功能清单 |
| [页面与路由](./页面与路由.md) | 全部页面路径、区块结构与导航关系 |
| [部署与配置](./部署与配置.md) | 环境变量、域名、构建与部署说明 |
| [CURSOR_CONTACT_EVENTS_INTEGRATION_GUIDE.md](./CURSOR_CONTACT_EVENTS_INTEGRATION_GUIDE.md) | App Data Hub 联系事件对接指南 |

## 版本信息

- **当前版本**：0.2.0
- **项目类型**：MyDataHealth Foundation 双语营销官网
- **品牌展示名**：HealthData
- **生产域名**：https://www.myhealthdata.foundation
- **联系邮箱**：hugchen1117@gmail.com
- **关联应用**：https://app.myhealthdata.foundation（独立项目，不在本仓库）

## 近期重要变更（v0.2.0）

| 时间 | 内容 |
|------|------|
| 2026-05-21 23:07 | 首页 HealthData 深色主题视觉升级 |
| 2026-05-21 22:57 | 联系表单错误处理与 Data Hub 环境变量兼容 |
| 2026-05-21 22:32 | 联系页表单 + Data Hub 事件对接 + 项目文档 |

详见 [更新日志](./更新日志.md)。

## 重要说明

本仓库以 **静态营销官网** 为主，联系表单通过服务端 API 代理写入 App Data Hub，不包含数据库与用户认证实现。实际业务平台（登录、仪表盘、数据管理）部署在 `app.myhealthdata.foundation` 子域。
