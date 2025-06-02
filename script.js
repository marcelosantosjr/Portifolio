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
    description: "Liderança da equipe de TI, responsável por infraestrutura de e-commerce de alto volume.",
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
    description: "Responsável pela administração, monitoramento e evolução da infraestrutura de TI, atuando na implementação de soluções inovadoras, automação de processos e suporte estratégico para ambientes de missão crítica. Garantia de alta disponibilidade, segurança e desempenho dos sistemas, além de integração de tecnologias em nuvem e on-premises.",
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
    description: "Atuação no suporte técnico de TI, realizando atendimento via Help Desk, manutenção de redes e equipamentos, além de configuração e reparo de hardware e software. Responsável por garantir o funcionamento contínuo dos sistemas e infraestrutura da empresa.",
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
  description: "Suporte técnico inicial para colaboradores e clientes, auxiliando na instalação, manutenção e configuração de redes e computadores. Apoio em demandas de TI, contribuindo para a estabilidade e eficiência dos sistemas internos.",
  achievements: [
    "Suporte técnico para clientes da plataforma via Help Desk.",
    "Apoio em TI para colaboradores da empresa (hardware e software)",
    "Instalação e manutenção da infraestrutura de redes e computadores."
  ]
},
{
  title: "Técnico de Manutenção de Informática",
  company: "Porque Marketing - Freelancer",
  period: "04/2015 - 12/2024",
  description: "Responsável pela montagem, diagnóstico e manutenção de computadores e redes em ambientes corporativos. Atuação em instalação de sistemas operacionais, aplicativos e execução de manutenção preventiva e corretiva em equipamentos.",
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
  description: "Atuação em design gráfico e edição de imagens, com foco em criação de materiais gráficos, manipulação de imagens e suporte em projetos visuais para clientes. Experiência com softwares de edição e processos de produção gráfica.",
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
  description: "Consultoria em vendas de soluções tecnológicas, realizando análise de necessidades dos clientes, apresentação de propostas personalizadas e fechamento de negócios. Forte atuação em negociações, relacionamento com clientes e conhecimento técnico dos produtos ofertados.",
  achievements: [
    "Análise das necessidades tecnológicas dos clientes, propondo soluções personalizadas que atendiam às suas demandas específicas.",
    "Apresentação de soluções tecnológicas, destacando os benefícios e as vantagens para o cliente, impulsionando a conversão de vendas.",
    "Responsável pelo fechamento de vendas, com forte atuação em negociações e construção de relacionamentos com os clientes.",
    "Profundo conhecimento técnico dos produtos e soluções oferecidas, garantindo que as escolhas feitas pelos clientes fossem sempre as mais adequadas para suas operações."
  ]
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
