import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isZh = lang === "zh";
  return {
    title: isZh
      ? "MyDataHealth Foundation | 健康数据属于每个人"
      : "MyDataHealth Foundation | Health Data Belongs to People",
    description: isZh
      ? "MyDataHealth Foundation 构建以患者为中心的健康数据基础设施和 AI 工具。"
      : "MyDataHealth Foundation builds patient-centered health data infrastructure and AI tools.",
    alternates: {
      languages: {
        en: "/en",
        "zh-Hans": "/zh",
      },
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang as Locale} />
      <main className="flex-grow">{children}</main>
      <Footer lang={lang as Locale} />
    </div>
  );
}
