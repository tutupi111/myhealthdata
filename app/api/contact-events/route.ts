import { NextRequest, NextResponse } from "next/server";

const DATA_HUB_BASE_URL =
  process.env.DATA_HUB_BASE_URL ?? "https://tuutpi.online";
const DATA_HUB_APP_ID = process.env.DATA_HUB_APP_ID;
const DATA_HUB_API_KEY = process.env.DATA_HUB_API_KEY;

export async function POST(request: NextRequest) {
  if (!DATA_HUB_APP_ID || !DATA_HUB_API_KEY) {
    return NextResponse.json(
      { error: "Contact tracking not configured" },
      { status: 503 },
    );
  }

  try {
    const body = await request.json();

    const response = await fetch(
      `${DATA_HUB_BASE_URL}/v1/public/contact-events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-App-ID": DATA_HUB_APP_ID,
          "X-API-Key": DATA_HUB_API_KEY,
        },
        body: JSON.stringify(body),
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to submit contact event" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
