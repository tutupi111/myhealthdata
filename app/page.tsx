import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  if (acceptLanguage.startsWith("zh")) {
    redirect("/zh");
  }

  redirect("/en");
}
