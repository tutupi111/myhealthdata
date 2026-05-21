import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function getDataHubConfig() {
  return {
    baseUrl:
      process.env.DATA_HUB_BASE_URL ??
      process.env.VITE_DATA_HUB_BASE_URL ??
      "https://tuutpi.online",
    appId:
      process.env.DATA_HUB_APP_ID ?? process.env.VITE_DATA_HUB_APP_ID ?? "",
    apiKey:
      process.env.DATA_HUB_API_KEY ?? process.env.VITE_DATA_HUB_API_KEY ?? "",
  };
}

export async function POST(request: NextRequest) {
  const { baseUrl, appId, apiKey } = getDataHubConfig();

  if (!appId || !apiKey) {
    return NextResponse.json(
      {
        error: "Contact tracking not configured",
        code: "missing_credentials",
      },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();

    const response = await fetch(`${baseUrl}/v1/public/contact-events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-App-ID": appId,
        "X-API-Key": apiKey,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      let detail: unknown;
      try {
        detail = await response.json();
      } catch {
        detail = await response.text();
      }

      console.error("Data Hub contact-events failed:", response.status, detail);

      return NextResponse.json(
        {
          error: "Failed to submit contact event",
          code: "upstream_error",
          upstreamStatus: response.status,
        },
        { status: response.status >= 500 ? 502 : response.status },
      );
    }

    let data: unknown = { status: "ok" };
    try {
      data = await response.json();
    } catch {
      // Some upstream responses may return 201 with an empty body.
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Contact events proxy error:", error);
    return NextResponse.json(
      { error: "Internal error", code: "internal_error" },
      { status: 500 },
    );
  }
}
