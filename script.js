// Dados
const skills = [
  { name: "Docker & Kubernetes", level: 95 },
  { name: "AWS e Azure", level: 90 },
  { name: "CI/CD Pipelines", level: 92 },
  { name: "E-commerce Platforms", level: 88 },
  { name: "Network Security", level: 85 },
  { name: "Infrastructure as Code", level: 90 },
  { name: "Database Management", level: 87 },
  { name: "Linux/Unix Systems", level: 65 }
];

const experiences = [
  {
    title: "Coordenador de Operação de Tecnologia da Informação",
    company: "Shop Delivery",
    period: "03/2023 - Presente",
    description: "Liderança de equipe DevOps responsável por infraestrutura de e-commerce de alto volume. Implementação de arquiteturas resilientes e escaláveis.",
    achievements: [
      "Liderança e coordenação das equipes de TI, garantindo eficiência operacional e alinhamento estratégico.",
      "Avaliação e implementação de soluções tecnológicas para otimização de processos internos.",
      "Gestão de infraestrutura, redes e segurança da informação, garantindo alta disponibilidade e confiabilidade dos sistemas.",
      "Atuação direta na sustentação e evolução de plataformas de e-commerce e serviços em nuvem."
    ]
  },
   {
    title: "Analista de TI",
    company: "Shop Delivery",
    period: "01/2018 - 03/2023",
    description: "Liderança de equipe DevOps responsável por infraestrutura de e-commerce de alto volume. Implementação de arquiteturas resilientes e escaláveis.",
    achievements: [
      "Responsável técnico pela infraestrutura de TI, garantindo suporte tecnológico e de rede.",
      "Supervisão e governança de sistemas hospedados em AWS e Cloudways.",
      "Atendimento e suporte técnico para clientes da plataforma de e-commerce.",
      "Implementação e manutenção da infraestrutura de redes e segurança computacional.",
      "Identificação e implementação de soluções tecnológicas para melhoria contínua."
    ]
  },
   {
    title: "Assistente de Suporte TI",
    company: "Shop Delivery",
    period: "12/2016 - 01/2018",
    description: "Liderança de equipe DevOps responsável por infraestrutura de e-commerce de alto volume. Implementação de arquiteturas resilientes e escaláveis.",
    achievements: [
      "Atendimento e suporte técnico via Help Desk para clientes da plataforma de e-commerce.",
      "Instalação, manutenção e suporte a redes de computadores e equipamentos.",
      "Configuração e reparo de hardware e software para usuários da empresa."
    ]
  },
   {
    title: "Estágiário de suporte de informática",
    company: "Shop Delivery",
    period: "07/2015 - 12/2016",
    description: "Liderança de equipe DevOps responsável por infraestrutura de e-commerce de alto volume. Implementação de arquiteturas resilientes e escaláveis.",
    achievements: [
      "Suporte técnico para clientes da plataforma via Help Desk.",
      "Apoio em TI para colaboradores da empresa (hardware e software)",
      " Instalação e manutenção da infraestrutura de redes e computadores."
    ]
  },
  {
    title: "Técnico de Manutenção de Informática",
    company: "Porque Marketing - Freelancer",
    period: "04/2015 - 12/2024",
    description: "Especialização em redes de computadores e segurança da informação para ambientes corporativos de grande escala.",
    achievements: [
      "Realizou montagem, diagnóstico, manutenção e instalação de computadores.",
      "Instalou e configurou sistemas operacionais e aplicativos para desktops e servidores.",
      "Implementou e realizou manutenção de redes de computadores.",
      "Executou manutenção preventiva e corretiva de computadores e periféricos."
    ]
  },
   {
    title: "Designer gráfico",
    company: "Info+Foto",
    period: "03/2012 - 01/2015",
    description: "Especialização em redes de computadores e segurança da informação para ambientes corporativos de grande escala.",
    achievements: [
      "Atuação no segmento de fotografia, operando equipamentos para revelação e edição de imagens.",
      "Edição e manipulação de imagens utilizando Adobe Photoshop.",
      "Suporte na criação de materiais gráficos e tratamento de imagens para clientes.",
      "Atuação no segmento de fotografia, operando equipamentos para revelação e edição de imagens. - Edição e manipulação de imagens utilizando Adobe Photoshop. - Suporte na criação de materiais gráficos e tratamento de imagens para clientes."
    ]
  },
   {
    title: "Consultor de Vendas de Soluções Tecnológicas",
    company: "Euroeletro",
    period: "08/2009 - 07/2010",
    description: "Especialização em redes de computadores e segurança da informação para ambientes corporativos de grande escala.",
    achievements: [
      "Análise das necessidades tecnológicas dos clientes, propondo soluções personalizadas que atendiam às suas demandas específicas.",
      "Apresentação de soluções tecnológicas, destacando os benefícios e as vantagens para o cliente, impulsionando a conversão de vendas.",
      "Responsável pelo fechamento de vendas, com forte atuação em negociações e construção de relacionamentos com os clientes.",
      "Profundo conhecimento técnico dos produtos e soluções oferecidas, garantindo que as escolhas feitas pelos clientes fossem sempre as mais adequadas para suas operações."
    ]
  }
];

const projects = [
  {
    title: "E-commerce Cloud Migration",
    description: "Migração completa de plataforma e-commerce para AWS com arquitetura microserviços",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    impact: "Reduziu custos em 40% e melhorou performance em 60%"
  },
  {
    title: "Security Infrastructure Overhaul",
    description: "Implementação de framework de segurança multicamadas para proteção de dados",
    technologies: ["Firewall", "VPN", "IDS/IPS", "SIEM"],
    impact: "Zero incidentes de segurança em 18 meses"
  }
];

// Render skills
document.querySelectorAll('[data-skill]').forEach(div => {
  const name = div.dataset.skill;
  const level = div.dataset.level;
  div.innerHTML = `
    <div class="card-skill text-center">
      <h5>${name}</h5>
      <div class="progress mb-2">
        <div class="progress-bar bg-primary" role="progressbar" style="width: ${level}%;" aria-valuenow="${level}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <small class="text-muted">${level}%</small>
    </div>
  `;
});

// Render experiences
const expContainer = document.getElementById("experienceAccordion");
experiences.forEach((exp, i) => {
  expContainer.innerHTML += `
    <div class="accordion-item">
      <h2 class="accordion-header" id="heading${i}">
        <button class="accordion-button ${i !== 0 ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}">
          ${exp.title} - <small class="text-muted ms-2">${exp.company}</small>
        </button>
      </h2>
      <div id="collapse${i}" class="accordion-collapse collapse ${i === 0 ? 'show' : ''}" data-bs-parent="#experienceAccordion">
        <div class="accordion-body">
          <p>${exp.description}</p>
          <ul>
            ${exp.achievements.map(a => `<li>✅ ${a}</li>`).join("")}
          </ul>
          <small class="text-muted">🗓 ${exp.period}</small>
        </div>
      </div>
    </div>
  `;
});

// Render projects
const projContainer = document.getElementById("projectCards");
projects.forEach(project => {
  projContainer.innerHTML += `
    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title text-primary">${project.title}</h5>
          <p>${project.description}</p>
          <p><strong>Tecnologias:</strong> ${project.technologies.join(", ")}</p>
          <div class="alert alert-success small">💡 Impacto: ${project.impact}</div>
        </div>
      </div>
    </div>
  `;
});

// Render certifications
document.querySelectorAll('[data-cert]').forEach(div => {
  const cert = div.dataset.cert;
  div.innerHTML = `<div class="p-3 border rounded d-flex align-items-center"><i class="fas fa-shield-alt text-primary me-3"></i> ${cert}</div>`;
});
