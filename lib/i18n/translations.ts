export type Locale = "en" | "zh";

export const locales: Locale[] = ["en", "zh"];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
};

export const translations = {
  en: {
    nav: {
      home: "Home",
      mission: "Mission",
      projects: "Projects",
      research: "Research",
      join: "Join",
      contact: "Contact",
      login: "Login",
    },
    hero: {
      title: "Health Data Belongs to People",
      subtitle:
        "So everyone can understand their health, care for themselves, and contribute to better medicine.",
      ctaMission: "Explore Mission",
      ctaProjects: "View Projects",
    },
    problem: {
      title: "The Health Data Problem",
      items: [
        { title: "Fragmented", description: "Health data is scattered across countless institutions and systems." },
        { title: "Locked Away", description: "Data remains trapped inside hospitals and healthcare providers." },
        { title: "Hard to Access", description: "Patients struggle to obtain their own medical records." },
        { title: "Impossible to Understand", description: "Clinical jargon makes data nearly incomprehensible." },
      ],
    },
    vision: {
      title: "A Future Where Patients Own Their Data",
      content:
        "We envision patient-controlled digital health infrastructure where every individual has full access to, understanding of, and sovereignty over their medical information.",
    },
    globalImpact: {
      title: "Global Impact",
      stats: [
        { value: "10K+", label: "Medical Records Structured" },
        { value: "5", label: "Countries Collaborating" },
        { value: "20+", label: "Research Contributors" },
        { value: "Open", label: "Health Data Movement" },
      ],
    },
    whatWeDo: {
      title: "What We Do",
      cards: [
        {
          title: "AI Medical Record Understanding",
          description:
            "AI tools that translate complex medical reports into understandable insights for individuals.",
        },
        {
          title: "Patient Data Ownership",
          description:
            "Advocating open infrastructure where individuals truly control their health data.",
        },
        {
          title: "Open Health Research",
          description:
            "Supporting open science collaboration in digital health and medical AI.",
        },
      ],
    },
    platformAccess: {
      title: "Access the Platform",
      patient: {
        title: "Patient Portal",
        description: "Access your personal health data and AI tools.",
      },
      researcher: {
        title: "Researcher Portal",
        description: "Access research datasets and collaboration tools.",
      },
      admin: {
        title: "Admin Portal",
        description: "System governance and data management.",
      },
      accessPortal: "Access Portal",
    },
    projects: {
      title: "Featured Projects",
      items: [
        { name: "Medical Data Parser", description: "Parse and structure medical records for patient understanding.", tag: "AI" },
        { name: "Patient Data Infrastructure", description: "Open infrastructure for patient-owned health data.", tag: "Data Infrastructure" },
        { name: "AI Health Assistant", description: "AI-powered tools to interpret and explain medical information.", tag: "Open Health" },
      ],
    },
    openSource: {
      title: "Open Source",
      content:
        "The foundation supports open source health technology. We believe that transparency and collaboration are essential for building trustworthy systems that serve patients.",
      cta: "View on GitHub",
    },
    joinMovement: {
      title: "Join the Movement",
      content:
        "We invite developers, clinicians, researchers, and organizations to collaborate with us. Together we can build a patient-centered health data ecosystem.",
      cta: "Get Involved",
    },
    mission: {
      title: "Our Mission",
      content: [
        "MyDataHealth Foundation is dedicated to returning health data ownership to individuals. We believe that patients should have full access to, understanding of, and control over their medical information.",
        "Through open infrastructure, AI tools, and advocacy, we work to dismantle data silos and empower individuals to benefit from their own health data.",
      ],
    },
    projectsPage: {
      title: "Our Projects",
      intro: "We build tools and infrastructure that put patients at the center of their health data.",
    },
    researchPage: {
      title: "Research",
      intro: "We support and conduct research in digital health, patient data ownership, and AI for medical understanding.",
    },
    joinPage: {
      title: "Join Us",
      intro: "Join our community of researchers, developers, clinicians, and advocates working toward patient-centered health data.",
    },
    contactPage: {
      title: "Contact",
      intro: "Get in touch with the MyDataHealth Foundation team.",
    },
    footer: {
      description: "Patient-centered health data infrastructure and AI tools. Health data belongs to patients.",
      copyright: "© 2025 MyDataHealth Foundation. All rights reserved.",
      github: "GitHub",
      email: "Contact",
    },
    portal: {
      comingSoon: "Coming Soon",
      description: "This portal will connect to the health data management system. Stay tuned.",
      backToHome: "← Back to Home",
    },
  },
  zh: {
    nav: {
      home: "首页",
      mission: "使命",
      projects: "项目",
      research: "研究",
      join: "加入我们",
      contact: "联系我们",
      login: "登录",
    },
    hero: {
      title: "健康数据属于每个人",
      subtitle:
        "让每个人都能理解自己的健康、照顾好自己，并为更好的医学做出贡献。",
      ctaMission: "了解使命",
      ctaProjects: "查看项目",
    },
    problem: {
      title: "健康数据问题",
      items: [
        { title: "数据分散", description: "健康数据分散在无数机构和系统中。" },
        { title: "被锁住", description: "数据被困在医院和医疗提供者手中。" },
        { title: "难以获取", description: "患者难以获取自己的医疗记录。" },
        { title: "难以理解", description: "医学术语使数据几乎无法理解。" },
      ],
    },
    vision: {
      title: "患者拥有数据的未来",
      content:
        "我们设想患者控制的数字健康基础设施，让每个人都能充分访问、理解并完全掌控自己的医疗信息。",
    },
    globalImpact: {
      title: "全球影响",
      stats: [
        { value: "10K+", label: "医疗记录已结构化" },
        { value: "5", label: "合作国家" },
        { value: "20+", label: "研究贡献者" },
        { value: "开放", label: "健康数据运动" },
      ],
    },
    whatWeDo: {
      title: "我们的工作",
      cards: [
        {
          title: "AI 医疗记录理解",
          description:
            "将复杂医疗报告转化为个人可理解洞察的 AI 工具。",
        },
        {
          title: "患者数据所有权",
          description:
            "倡导个人真正控制其健康数据的开放基础设施。",
        },
        {
          title: "开放健康研究",
          description:
            "支持数字健康和医疗 AI 领域的开放科学协作。",
        },
      ],
    },
    platformAccess: {
      title: "平台入口",
      patient: {
        title: "患者门户",
        description: "访问您的个人健康数据和 AI 工具。",
      },
      researcher: {
        title: "研究者门户",
        description: "访问研究数据集和协作工具。",
      },
      admin: {
        title: "管理门户",
        description: "系统治理和数据管理。",
      },
      accessPortal: "进入门户",
    },
    projects: {
      title: "精选项目",
      items: [
        { name: "医疗数据解析器", description: "解析和结构化医疗记录，便于患者理解。", tag: "AI" },
        { name: "患者数据基础设施", description: "患者拥有健康数据的开放基础设施。", tag: "Data Infrastructure" },
        { name: "AI 健康助手", description: "AI 驱动的工具，用于解读和解释医疗信息。", tag: "Open Health" },
      ],
    },
    openSource: {
      title: "开源",
      content:
        "基金会支持开源健康技术。我们相信透明和协作对于构建服务于患者的可信系统至关重要。",
      cta: "在 GitHub 查看",
    },
    joinMovement: {
      title: "加入我们",
      content:
        "我们邀请开发者、临床医生、研究人员和组织与我们合作。共同构建以患者为中心的健康数据生态系统。",
      cta: "参与其中",
    },
    mission: {
      title: "我们的使命",
      content: [
        "MyDataHealth Foundation 致力于将健康数据所有权归还给个人。我们相信患者应该能够充分访问、理解并控制自己的医疗信息。",
        "通过开放基础设施、AI 工具和倡导，我们努力打破数据孤岛，赋能个人从自己的健康数据中受益。",
      ],
    },
    projectsPage: {
      title: "我们的项目",
      intro: "我们构建将患者置于健康数据中心的工具和基础设施。",
    },
    researchPage: {
      title: "研究",
      intro: "我们支持并开展数字健康、患者数据所有权和 AI 医疗理解方面的研究。",
    },
    joinPage: {
      title: "加入我们",
      intro: "加入我们的研究人员、开发者、临床医生和倡导者社区，共同实现以患者为中心的健康数据。",
    },
    contactPage: {
      title: "联系我们",
      intro: "与 MyDataHealth Foundation 团队取得联系。",
    },
    footer: {
      description: "以患者为中心的健康数据基础设施和 AI 工具。健康数据属于患者。",
      copyright: "© 2025 MyDataHealth Foundation。保留所有权利。",
      github: "GitHub",
      email: "联系我们",
    },
    portal: {
      comingSoon: "即将推出",
      description: "此门户将连接到健康数据管理系统。敬请期待。",
      backToHome: "← 返回首页",
    },
  },
} as const;

export type TranslationKeys = keyof (typeof translations)["en"];
