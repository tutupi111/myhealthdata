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
      platform: "Platform",
      useCases: "Use Cases",
      docs: "Docs",
      about: "About",
      openSource: "Open Source",
      joinMovement: "Join the Movement",
      mission: "Mission",
      projects: "Projects",
      research: "Research",
      join: "Join",
      contact: "Contact",
      login: "Login",
      enterDashboard: "Enter Dashboard",
    },
    hero: {
      badges: ["Secure", "Private", "Decentralized"],
      titlePrefix: "Health Data Belongs to",
      titleHighlight: "People.",
      subtitle:
        "Our privacy-first platform puts health data ownership back to individuals.",
      ctaLearnMore: "Learn More",
      ctaExploreDocs: "Explore Docs",
    },
    problem: {
      title: "The Health Data Problem",
      subtitle: "Patients lack control over their most personal information.",
      items: [
        { title: "Lack of Ownership", description: "Individuals rarely own or control copies of their own health records." },
        { title: "Privacy Risks", description: "Sensitive data is shared across systems without clear consent or transparency." },
        { title: "Limited Access", description: "Patients struggle to obtain, understand, and use their medical information." },
        { title: "Data Silos", description: "Health data remains fragmented across hospitals, apps, and institutions." },
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
        { value: "100K+", label: "Users" },
        { value: "5", label: "Countries" },
        { value: "30+", label: "Health Partners" },
        { value: "Open", label: "Source" },
      ],
    },
    whatWeDo: {
      title: "What We Do",
      subtitle: "Building infrastructure that empowers individuals and researchers alike.",
      cards: [
        {
          title: "Build & Empower",
          description:
            "Tools and infrastructure that help individuals understand, manage, and benefit from their health data.",
        },
        {
          title: "Enable Privacy-Preserving Use",
          description:
            "Secure, consent-driven data sharing that protects privacy while enabling meaningful collaboration.",
        },
        {
          title: "Drive Patient-Centric AI",
          description:
            "AI systems designed to translate complex medical information into clear, actionable insights.",
        },
      ],
    },
    platformAccess: {
      title: "Access the Platform",
      subtitle: "Choose the portal that fits your role.",
      patient: {
        title: "For Individuals",
        description: "Access your personal health data, records, and AI-powered insights.",
        cta: "Get Started",
      },
      researcher: {
        title: "For Researchers",
        description: "Collaborate on privacy-preserving datasets and open health research.",
        cta: "Join Research",
      },
      admin: {
        title: "For Organizations",
        description: "Governance, administration, and system management for partner institutions.",
        cta: "Contact Us",
      },
      accessPortal: "Access Portal",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Open tools advancing patient-centered health data.",
      viewProject: "View Project",
      items: [
        { name: "Medical Data Parser", description: "Parse and structure medical records for patient understanding.", tag: "AI" },
        { name: "Patient Data Infrastructure", description: "Open infrastructure for patient-owned health data.", tag: "Infrastructure" },
        { name: "AI Health Assistant", description: "AI-powered tools to interpret and explain medical information.", tag: "Open Health" },
      ],
    },
    openSource: {
      title: "Open Source",
      content:
        "We believe in transparency and collaboration. Our open source projects invite developers worldwide to build trustworthy health technology together.",
      cta: "View on GitHub",
    },
    joinMovement: {
      title: "Join the Movement",
      content:
        "Be part of the global effort to return health data ownership to individuals.",
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
      intro: "Get in touch with the MyDataHealth Foundation team. We'd love to hear from you.",
      emailLabel: "Email",
      emailHint: "We typically respond within 2–3 business days.",
      formTitle: "Send us a message",
      formName: "Name",
      formEmail: "Your email",
      formSubject: "Subject",
      formMessage: "Message",
      formPrivacy:
        "Your information will only be used to respond to your inquiry.",
      formSubmit: "Send message",
      formSubmitting: "Sending...",
      formSuccess:
        "Thank you! We've received your message and will get back to you soon.",
      formError:
        "Something went wrong. Please try again or email us directly.",
      formErrorConfig:
        "The contact form is not configured on the server yet. Please email us directly, or ask the site admin to set DATA_HUB_APP_ID and DATA_HUB_API_KEY on Vercel and redeploy.",
    },
    footer: {
      description: "Patient-centered health data infrastructure. Health data belongs to people.",
      copyright: "© 2026 MyDataHealth Foundation. All rights reserved.",
      github: "GitHub",
      email: "Contact",
      platform: "Platform",
      resources: "Resources",
      about: "About",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      platformLinks: {
        individuals: "For Individuals",
        researchers: "For Researchers",
        organizations: "For Organizations",
      },
      resourceLinks: {
        docs: "Documentation",
        openSource: "Open Source",
        contact: "Contact Us",
      },
      aboutLinks: {
        mission: "Our Mission",
        projects: "Projects",
        join: "Join Us",
      },
    },
    portal: {
      loginAtApp: "Log in at the platform to access your portal. Use the button below to sign in.",
      goToLogin: "Log In",
      backToHome: "← Back to Home",
    },
  },
  zh: {
    nav: {
      home: "首页",
      platform: "平台",
      useCases: "应用场景",
      docs: "文档",
      about: "关于",
      openSource: "开源",
      joinMovement: "加入我们",
      mission: "使命",
      projects: "项目",
      research: "研究",
      join: "加入",
      contact: "联系我们",
      login: "登录",
      enterDashboard: "进入管理中心",
    },
    hero: {
      badges: ["安全", "隐私", "去中心化"],
      titlePrefix: "健康数据属于",
      titleHighlight: "每个人。",
      subtitle: "我们的隐私优先平台，将健康数据所有权归还个人。",
      ctaLearnMore: "了解更多",
      ctaExploreDocs: "探索文档",
    },
    problem: {
      title: "健康数据问题",
      subtitle: "患者对自己最私密的信息缺乏掌控。",
      items: [
        { title: "缺乏所有权", description: "个人很少真正拥有或控制一份完整的健康数据副本。" },
        { title: "隐私风险", description: "敏感数据在缺乏明确同意的情况下被跨系统共享。" },
        { title: "获取受限", description: "患者难以获取、理解并使用自己的医疗信息。" },
        { title: "数据孤岛", description: "健康数据分散在医院、应用和各类机构之间。" },
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
        { value: "100K+", label: "用户" },
        { value: "5", label: "合作国家" },
        { value: "30+", label: "健康合作伙伴" },
        { value: "开源", label: "开放运动" },
      ],
    },
    whatWeDo: {
      title: "我们的工作",
      subtitle: "构建赋能个人与研究人员的基础设施。",
      cards: [
        {
          title: "构建与赋能",
          description: "帮助个人理解、管理并从健康数据中受益的工具与基础设施。",
        },
        {
          title: "隐私保护的数据使用",
          description: "安全、基于同意的数据共享，在保护隐私的同时实现有意义的协作。",
        },
        {
          title: "驱动以患者为中心的 AI",
          description: "将复杂医疗信息转化为清晰、可行动洞察的 AI 系统。",
        },
      ],
    },
    platformAccess: {
      title: "平台入口",
      subtitle: "选择适合您角色的入口。",
      patient: {
        title: "个人用户",
        description: "访问您的个人健康数据、医疗记录和 AI 洞察。",
        cta: "立即开始",
      },
      researcher: {
        title: "研究人员",
        description: "在隐私保护的数据集上协作，推动开放健康研究。",
        cta: "加入研究",
      },
      admin: {
        title: "组织机构",
        description: "合作机构的治理、管理与系统运维。",
        cta: "联系我们",
      },
      accessPortal: "进入门户",
    },
    projects: {
      title: "精选项目",
      subtitle: "推动以患者为中心健康数据的开放工具。",
      viewProject: "查看项目",
      items: [
        { name: "医疗数据解析器", description: "解析和结构化医疗记录，便于患者理解。", tag: "AI" },
        { name: "患者数据基础设施", description: "患者拥有健康数据的开放基础设施。", tag: "基础设施" },
        { name: "AI 健康助手", description: "AI 驱动的工具，用于解读和解释医疗信息。", tag: "开放健康" },
      ],
    },
    openSource: {
      title: "开源",
      content:
        "我们相信透明与协作。我们的开源项目邀请全球开发者共同构建可信赖的健康技术。",
      cta: "在 GitHub 查看",
    },
    joinMovement: {
      title: "加入运动",
      content: "成为全球健康数据所有权回归个人努力的一部分。",
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
      intro: "欢迎与 MyDataHealth Foundation 团队取得联系，我们期待听到您的声音。",
      emailLabel: "联系邮箱",
      emailHint: "我们通常会在 2–3 个工作日内回复。",
      formTitle: "发送留言",
      formName: "姓名",
      formEmail: "您的邮箱",
      formSubject: "主题",
      formMessage: "留言内容",
      formPrivacy: "您提供的信息仅用于回复您的咨询。",
      formSubmit: "发送留言",
      formSubmitting: "发送中...",
      formSuccess: "感谢您的留言！我们已收到您的信息，会尽快与您联系。",
      formError: "提交失败，请稍后重试或直接发送邮件联系我们。",
      formErrorConfig:
        "服务器尚未配置联系表单。请直接发送邮件联系我们，或在 Vercel 中设置 DATA_HUB_APP_ID、DATA_HUB_API_KEY 后重新部署。",
    },
    footer: {
      description: "以患者为中心的健康数据基础设施。健康数据属于每个人。",
      copyright: "© 2026 MyDataHealth Foundation。保留所有权利。",
      github: "GitHub",
      email: "联系我们",
      platform: "平台",
      resources: "资源",
      about: "关于",
      privacyPolicy: "隐私政策",
      termsOfUse: "使用条款",
      platformLinks: {
        individuals: "个人用户",
        researchers: "研究人员",
        organizations: "组织机构",
      },
      resourceLinks: {
        docs: "文档",
        openSource: "开源",
        contact: "联系我们",
      },
      aboutLinks: {
        mission: "我们的使命",
        projects: "项目",
        join: "加入我们",
      },
    },
    portal: {
      loginAtApp: "请登录平台以使用本门户。点击下方按钮前往登录。",
      goToLogin: "去登录",
      backToHome: "← 返回首页",
    },
  },
} as const;

export type TranslationKeys = keyof (typeof translations)["en"];
