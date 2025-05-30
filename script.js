// Dados
const skills = [
  { name: "Docker & Kubernetes", level: 95 },
  { name: "AWS/Azure Cloud", level: 90 },
  { name: "CI/CD Pipelines", level: 92 },
  { name: "E-commerce Platforms", level: 88 },
  { name: "Network Security", level: 85 },
  { name: "Infrastructure as Code", level: 90 },
  { name: "Database Management", level: 87 },
  { name: "Linux/Unix Systems", level: 93 }
];

const experiences = [
  {
    title: "DevOps Lead Engineer",
    company: "E-commerce Solutions Inc.",
    period: "2022 - Presente",
    description: "Liderança de equipe DevOps responsável por infraestrutura de e-commerce de alto volume. Implementação de arquiteturas resilientes e escaláveis.",
    achievements: [
      "Reduziu tempo de deployment em 70%",
      "Implementou monitoramento 24/7",
      "Migrou infraestrutura para cloud"
    ]
  },
  {
    title: "Infrastructure Specialist",
    company: "TechCorp Networks",
    period: "2020 - 2022",
    description: "Especialização em redes de computadores e segurança da informação para ambientes corporativos de grande escala.",
    achievements: [
      "Projetou arquitetura de rede para 500+ usuários",
      "Implementou políticas de segurança ISO 27001",
      "Configurou sistemas de backup automatizado"
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
