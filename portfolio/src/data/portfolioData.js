export const personalInfo = {
  name: "Lahiru Pathiranage",
  title: "Software Engineer",
  subtitle: "Backend Architecture · Azure Cloud · Microsoft Power Platform & AI Solutions",
  status: "Available for high-impact roles & projects",
  location: "Colombo, Sri Lanka",
  phone: "+94 71 95 20 383",
  email: "lahiruthraka97@gmail.com",
  linkedin: "https://linkedin.com/in/lahiru-pathiranage-2330a0240",
  github: "https://github.com",
  summary: `Results-driven Software Engineer with 3+ years of hands-on experience designing and delivering scalable backend architectures, cloud microservices, and enterprise Microsoft Power Platform solutions. Specialist in .NET 9, Azure Functions (Isolated Worker), Azure OpenAI & Cognitive Search integration, and Microsoft Dataverse custom development. Holds a First-Class Honors degree in Computer Science (GPA 3.75/4.00) with a proven track record of authoring high-performance APIs, automating complex business logic, and deploying enterprise-grade AI solutions.`,
  stats: [
    { value: "3+", label: "Years Experience", suffix: "" },
    { value: "3.75", label: "Honors GPA / 4.00", suffix: "" },
    { value: "100%", label: "On-Time Delivery", suffix: "" },
    { value: "Enterprise", label: "Scale Architecture", suffix: "" }
  ]
};

export const skillCategories = [
  {
    id: "backend",
    name: "Languages & Frameworks",
    icon: "Code2",
    description: "Modern backend and reactive web architectures with high performance and type safety",
    skills: [
      { name: "C#", level: 95, tag: "Primary" },
      { name: ".NET 9 / ASP.NET Core", level: 95, tag: "Expert" },
      { name: "ASP.NET MVC", level: 90, tag: "Core" },
      { name: "React", level: 85, tag: "Frontend" },
      { name: "JavaScript (ES6+)", level: 90, tag: "Web" },
      { name: "SQL", level: 92, tag: "Data" },
      { name: "jQuery / AJAX", level: 85, tag: "Legacy/Modern" }
    ]
  },
  {
    id: "cloud-ai",
    name: "Cloud & AI Technologies",
    icon: "CloudLightning",
    description: "Serverless microservices, generative AI agents, semantic retrieval, and NoSQL engines",
    skills: [
      { name: "Azure Functions (Isolated Worker)", level: 95, tag: "Microservices" },
      { name: "Azure OpenAI", level: 90, tag: "GenAI" },
      { name: "Azure Search Index", level: 88, tag: "Semantic Search" },
      { name: "Cosmos DB", level: 85, tag: "Cloud NoSQL" },
      { name: "RESTful APIs", level: 95, tag: "API Design" }
    ]
  },
  {
    id: "power-platform",
    name: "Microsoft Power Platform",
    icon: "Layers",
    description: "Enterprise CRM customization, custom plugins, low-code/pro-code integration",
    skills: [
      { name: "Microsoft Dataverse", level: 95, tag: "Enterprise" },
      { name: "Model-Driven Apps", level: 90, tag: "Custom UI" },
      { name: "Canvas Apps", level: 90, tag: "Interactive" },
      { name: "Power Automate", level: 92, tag: "Automation" },
      { name: "Dynamics 365 Integration", level: 88, tag: "CRM" }
    ]
  },
  {
    id: "databases",
    name: "Databases & ORM",
    icon: "Database",
    description: "Relational modeling, indexing, query optimization, and enterprise ORMs",
    skills: [
      { name: "MS SQL Server", level: 92, tag: "RDBMS" },
      { name: "PostgreSQL", level: 88, tag: "Open Source" },
      { name: "Entity Framework Core (EF Core)", level: 94, tag: "ORM" },
      { name: "PL/SQL", level: 85, tag: "Procedures" },
      { name: "NoSQL", level: 85, tag: "Document" }
    ]
  },
  {
    id: "tools",
    name: "Developer Tools & DevOps",
    icon: "Terminal",
    description: "Continuous integration, CRM utilities, and developer productivity tooling",
    skills: [
      { name: "XRM Toolbox", level: 95, tag: "Power Platform" },
      { name: "FetchXML", level: 92, tag: "Data Query" },
      { name: "Azure DevOps & CI/CD", level: 88, tag: "Pipelines" },
      { name: "Git & GitHub", level: 90, tag: "VCS" },
      { name: "Postman", level: 92, tag: "Testing" },
      { name: "Visual Studio / VS Code", level: 95, tag: "IDE" }
    ]
  }
];

export const experiences = [
  {
    role: "Software Engineer",
    company: "One Billion Technology",
    period: "Feb 2025 – Present",
    location: "Colombo, Sri Lanka",
    type: "Full-Time",
    badge: "Current Role",
    highlights: [
      "Backend Architecture & Azure Cloud: Architected, engineered, and deployed scalable backend microservices using Azure Functions (Isolated Worker Model) and C#, significantly enhancing cloud API performance and reliability.",
      "Enterprise AI Integration: Engineered intelligent cloud solutions incorporating Azure OpenAI and Azure Search Index, enabling AI-driven semantic retrieval and automated response generation for client applications.",
      "Dataverse & Plugin Development: Customized Dataverse environments by designing custom C# plugins, data models, and complex table relationships, facilitating seamless synchronization across core enterprise workflows.",
      "Client Collaboration & Delivery: Collaborated directly with enterprise clients to scope technical requirements, ensuring 100% on-time project delivery aligned with clean architecture standards."
    ],
    technologies: ["C#", ".NET 9", "Azure Functions", "Azure OpenAI", "Azure Search", "Dataverse", "C# Plugins", "Agile"]
  },
  {
    role: "Associate Software Engineer",
    company: "One Billion Technology",
    period: "Mar 2024 – Feb 2025",
    location: "Colombo, Sri Lanka",
    type: "Full-Time",
    badge: "Promoted",
    highlights: [
      "Power Platform Development: Spearheaded development of Microsoft Power Platform applications, building responsive Canvas Apps, custom Model-Driven Apps, and automated Power Automate workflows.",
      "ASP.NET Core Systems: Delivered production-grade ASP.NET MVC and ASP.NET Core applications adhering to repository design patterns, clean coding guidelines, and client security standards.",
      "Data Optimization: Optimized query performance and CRM data management utilizing FetchXML and XRM Toolbox, reducing data retrieval latency across core operational modules."
    ],
    technologies: ["ASP.NET Core", "Power Platform", "Canvas Apps", "Power Automate", "FetchXML", "XRM Toolbox", "SQL Server"]
  },
  {
    role: "Intern Software Engineer",
    company: "One Billion Technology",
    period: "Mar 2023 – Mar 2024",
    location: "Colombo, Sri Lanka",
    type: "Internship",
    badge: "Career Start",
    highlights: [
      "Software Engineering Support: Gained intensive hands-on experience in full-stack web development, contributing code to commercial ASP.NET MVC web systems and Power Platform Canvas Apps.",
      "Agile Development: Assisted in designing Dataverse entity structures, writing initial C# SDK plugins, and participating in sprint planning and daily standups within an Agile environment."
    ],
    technologies: ["ASP.NET MVC", "C# SDK", "Dataverse", "JavaScript", "SQL", "Git"]
  }
];

export const projects = [
  {
    id: "seer-workbook",
    title: "Seer 365 Project Workbook",
    category: "Enterprise Cloud Engine",
    subtitle: "Enterprise Estimation & Planning Engine",
    description: "Architected a high-performance estimation engine on .NET 9 (Azure Functions Isolated Worker Model) integrated seamlessly with Microsoft Dataverse and Dynamics 365. Automated Rough Order of Magnitude (ROM) cost, effort, and task hierarchy calculations for complex enterprise implementations using dynamic topological dependency graphs and configuration-driven strategy design patterns.",
    tech: [".NET 9", "Azure Functions Isolated", "Microsoft Dataverse", "Dynamics 365", "Topological Graphs", "Design Patterns"],
    featured: true,
    icon: "Cpu",
    impact: "Automated complex multi-variable enterprise ROM costing with sub-second recalculation."
  },
  {
    id: "seer-ai-rfp",
    title: "Seer 365 Rapid Workshop AI & RFP Suite",
    category: "Generative AI & Search",
    subtitle: "Real-time AI Document Indexing & Query Automation",
    description: "Engineered Azure Function APIs interfacing directly with AI agents and Cosmos DB for real-time RFP processing, data management, and query automation. Integrated Azure OpenAI SDK and Azure Cognitive Search Index to process and index complex enterprise RFP documents; authored custom Dataverse plugins via XRM Toolbox.",
    tech: ["Azure OpenAI SDK", "Azure Cognitive Search", "Cosmos DB", "Azure Functions", "Dataverse Plugins", "XRM Toolbox"],
    featured: true,
    icon: "Bot",
    impact: "Accelerated enterprise RFP proposal turnaround by combining semantic vector search and LLMs."
  },
  {
    id: "seer-chatbot",
    title: "Seer 365 DesignV2 AI Chatbot",
    category: "AI & Customer Engagement",
    subtitle: "Enterprise Customer Engagement Conversational Agent",
    description: "Designed and integrated an enterprise chatbot powered by Azure OpenAI to automate customer support interactions, improving user engagement and query resolution efficiency.",
    tech: ["Azure OpenAI", "C# Backend", "Prompt Engineering", "WebSockets / REST", "Secure Auth"],
    featured: false,
    icon: "MessageSquareCode",
    impact: "Delivered 24/7 intelligent response generation with low latency and contextual understanding."
  },
  {
    id: "bakery-platform",
    title: "Full-Stack Bakery & Wholesale Management Platform",
    category: "Full-Stack Architecture",
    subtitle: "Clean Layered Architecture Web & Order System",
    description: "Developed a full-stack platform using .NET 9 Web API, React, and PostgreSQL, adhering strictly to Clean Layered Architecture principles. Implemented JWT authentication, custom Entity Framework Core (EF Core) services, and automated background workers for 30-day database maintenance and data cleanup.",
    tech: [".NET 9 Web API", "React", "PostgreSQL", "EF Core", "JWT Auth", "Background Workers"],
    featured: false,
    icon: "Store",
    impact: "Streamlined wholesale inventory management and automated database maintenance routines."
  }
];

export const education = {
  degree: "Bachelor of Computer Science (Hons)",
  institution: "University of Kelaniya, Sri Lanka",
  graduationYear: "2023",
  honors: "First-Class Honors",
  gpa: "3.75 / 4.00",
  highlights: [
    "Graduated with top-tier First-Class Honors ranking",
    "Specialized in Software Engineering, Distributed Systems, Data Structures & Algorithms",
    "Active contributor to university technical symposiums and coding competitions"
  ]
};
