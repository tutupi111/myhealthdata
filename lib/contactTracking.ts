export type ContactChannel =
  | "phone"
  | "wechat"
  | "email"
  | "form"
  | "qrcode"
  | "online_chat"
  | string;

const VISITOR_ID_KEY = "mhdf_visitor_id";

export function getVisitorId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

export async function trackContactEvent(params: {
  channel: ContactChannel;
  contactTarget?: string;
  campaign?: string;
  metadata?: Record<string, unknown>;
}): Promise<{ ok: boolean; id?: string }> {
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
  };

  try {
    const res = await fetch("/api/contact-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    });
    if (!res.ok) return { ok: false };
    const data = (await res.json()) as { id?: string };
    return { ok: true, id: data.id };
  } catch {
    return { ok: false };
  }
}
