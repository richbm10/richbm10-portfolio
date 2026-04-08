// ─── Personal (open-source) projects ────────────────────────────────────────

const PINNED_REPOS = [
  {
    name: 'zkpol_poc_proof_of_conversion',
    description:
      'Zero Knowledge Proof of Location circuit in Circom 2.0.0. Proves a GPS coordinate lies inside an authorized polygon from a Merkle tree — without revealing the exact location. Uses ray casting, Poseidon hashing, and Groth16. PSE Core Program capstone project.',
    url: 'https://github.com/richbm10/zkpol_poc_proof_of_conversion',
    language: 'Circom',
    stars: 3,
    forks: 0,
    topics: ['circom', 'cryptographic-primitives', 'cryptography', 'zero-knowledge', 'zk'],
  },
  {
    name: 'cdond-c3-projectstarter',
    description:
      'CI/CD pipeline built on top of a Udacity starter project, automating build, test, security scanning, infrastructure provisioning, and blue/green deployment of a NestJS + React app to AWS using CircleCI, CloudFormation, and Ansible.',
    url: 'https://github.com/richbm10/cdond-c3-projectstarter',
    language: 'TypeScript',
    stars: 1,
    forks: 0,
    topics: ['ansible', 'aws', 'circleci', 'cloudformation', 'devops'],
  },
  {
    name: 'dev-ops-program-project-2',
    description:
      'AWS CloudFormation template files to create a scalable and resilient infrastructure to host an Apache Web Server with high availability.',
    url: 'https://github.com/richbm10/dev-ops-program-project-2',
    language: 'Shell',
    stars: 1,
    forks: 0,
    topics: ['aws', 'cloudformation', 'devops'],
  },
  {
    name: 'Travel-App-Capstone-Project-Udacity',
    description:
      'Travel Web Application for planning different trips that can have locations from any part of the world by requesting different external APIs to retrieve current and forecast weather, images, country, and more data of a given location.',
    url: 'https://github.com/richbm10/Travel-App-Capstone-Project-Udacity',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    topics: ['api', 'microservices', 'webpack', 'nodejs', 'es6-javascript'],
  },
  {
    name: 'Evaluate-a-News-Article-with-NPL-Project-Udacity',
    description:
      'Web application that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Uses the Aylien Sentiment Analysis API to determine subjectivity and sentiment tone.',
    url: 'https://github.com/richbm10/Evaluate-a-News-Article-with-NPL-Project-Udacity',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    topics: ['nlp', 'webpack', 'nodejs', 'express'],
  },
  {
    name: 'Weather-Journal-App-Project-Udacity',
    description:
      'Weather journal web application for the current weather of a specific location using ISO country code and ZIP code. Integrates the Open Weather Map API to display temperature, timezone, weather description, and more.',
    url: 'https://github.com/richbm10/Weather-Journal-App-Project-Udacity',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    topics: ['api', 'nodejs', 'express', 'javascript'],
  },
];

// ─── Professional projects ───────────────────────────────────────────────────

const PROFESSIONAL_PROJECTS = [
  {
    title: 'Addressed Direct Mail (ADM)',
    subtitle: 'Direct Mail Business Channel Launch',
    company: 'Oppizi',
    role: 'Engineering Team Lead',
    impact: "Oppizi's primary enterprise growth channel — single campaigns reaching hundreds of thousands of personalized, addressed mail pieces across the US.",
    highlights: [
      'Promoted to Team Lead after EDDM launch; immediately tasked by CEO to deliver ADM within 3 months under direct enterprise commercial pressure.',
      'Pioneered AWS Athena adoption company-wide, designing an event-driven S3→Lambda→Athena pipeline to process high-volume audience CSV uploads at scale with zero application performance impact.',
      'Architected USPS compliance layer: address hygiene (CASS/NCOA), presort optimization, containerization, and entry point discount qualification.',
      "Led post-launch operations of first client campaigns, ensuring zero campaign failures and establishing the operational foundation for the company's most commercially significant client relationships.",
    ],
    tags: ['Node.js', 'AWS Athena', 'AWS Lambda', 'Python', 'Polars', 'S3', 'USPS Compliance', 'DDD', 'TypeScript'],
  },
  {
    title: 'Every Door Direct Mail (EDDM)',
    subtitle: 'Direct Mail Business Channel Launch',
    company: 'Oppizi',
    role: 'Full Stack Software Engineer → Team Lead',
    impact: "Launched Oppizi's first Direct Mail business channel in the US. Earned promotion to Engineering Team Lead during the final month of delivery.",
    highlights: [
      "Led end-to-end architecture design and technical strategy for the company's first Direct Mail channel in the US, working directly alongside the CEO.",
      'Designed scalable architecture using Clean Architecture and DDD to support automated mail piece operations while meeting strict cost efficiency thresholds.',
      'Architected integrations with multiple third-party providers to automate end-to-end USPS-compliant delivery workflows.',
      'Leveraged Ubiquitous Language to enhance communication between engineering, product, and business stakeholders.',
    ],
    tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Clean Architecture', 'DDD', 'AWS', 'USPS Compliance'],
  },
  {
    title: 'Google Play Android 13 Policy Migration',
    subtitle: 'Mobile Platform Compliance — 9-Country Operation',
    company: 'Oppizi',
    role: 'Engineering Team Lead',
    impact: '~70% of mobile user base maintained with zero Play Store downtime under a 2-month Google deadline.',
    highlights: [
      'Led migration of a React Native Expo Bare app from SDK 40 → 49, spanning 2 years of pending upgrades across multiple build flavors.',
      'Pivoted mid-project from incremental upgrades to a full project rebuild to unblock delivery after a strategy that proved too slow under time pressure.',
      'Resolved multiple retro-compatibility issues as unsupported dependencies were identified and replaced.',
      'Refactored location tracking module to comply with Android 13\'s new background task permission policies.',
    ],
    tags: ['React Native', 'Expo', 'Android', 'TypeScript', 'Firebase', 'AppsFlyer'],
  },
  {
    title: 'E-Learning Compliant Global VAT Tax',
    subtitle: 'FinTech Integration — 16-Country Tax Compliance',
    company: 'First Factory',
    role: 'Full Stack Software Engineer',
    impact: '$485K in VAT costs avoided or collected in the first 2 months across 16 markets.',
    highlights: [
      'Integrated Fonoa Global Tax API to calculate VAT on each market and persist credit/debit invoices for compliance.',
      'Designed a Strategy Pattern as a fallback to handle default VAT calculation per market when the Fonoa endpoint is unavailable.',
      'Built Ruby Sidekiq Jobs for async persistence of invoice documents to AWS S3 at high monthly transaction volumes.',
      'Implemented tax exemption features reflected in customer checkout flows; monitored with DataDog and Sentry.',
    ],
    tags: ['Ruby on Rails', 'Sidekiq', 'AWS S3', 'Fonoa API', 'DataDog', 'Sentry', 'PostgreSQL'],
  },
];

// ─── Shared helpers ──────────────────────────────────────────────────────────

const LANGUAGE_COLORS = {
  Circom: '#2e7d7d',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Shell: '#89e051',
  Python: '#3572A5',
  Ruby: '#701516',
};

function createStarIcon() {
  return `<svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/>
  </svg>`;
}

function createForkIcon() {
  return `<svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" fill="currentColor">
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>
  </svg>`;
}

// ─── Personal card renderer ──────────────────────────────────────────────────

function createPersonalCard(repo) {
  const langColor = LANGUAGE_COLORS[repo.language] || '#8b949e';
  const topics = repo.topics.map((t) => `<span class="card__topic">${t}</span>`).join('');
  const displayName = repo.name.replace(/-/g, ' ').replace(/_/g, ' ');

  return `
    <article class="card">
      <div class="card__body">
        <h3 class="card__title">
          <a href="${repo.url}" target="_blank" rel="noopener noreferrer">${displayName}</a>
        </h3>
        <p class="card__description">${repo.description}</p>
        ${topics ? `<div class="card__topics">${topics}</div>` : ''}
      </div>
      <div class="card__footer">
        <div class="card__meta">
          ${repo.language ? `<span class="card__language"><span class="card__lang-dot" style="background-color: ${langColor}"></span>${repo.language}</span>` : ''}
          <span class="card__stat">${createStarIcon()} ${repo.stars}</span>
          <span class="card__stat">${createForkIcon()} ${repo.forks}</span>
        </div>
        <a class="card__link" href="${repo.url}" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </article>
  `;
}

// ─── Professional card renderer ──────────────────────────────────────────────

function createProfessionalCard(project) {
  const highlights = project.highlights
    .map((h) => `<li>${h}</li>`)
    .join('');
  const tags = project.tags
    .map((t) => `<span class="skill-tag skill-tag--sm">${t}</span>`)
    .join('');

  return `
    <article class="card card--professional">
      <div class="card__body">
        <div class="card__pro-header">
          <div>
            <p class="card__company">${project.company} &middot; <span class="card__role">${project.role}</span></p>
            <h3 class="card__title card__title--plain">${project.title}</h3>
            <p class="card__subtitle">${project.subtitle}</p>
          </div>
        </div>
        <p class="card__impact">${project.impact}</p>
        <ul class="card__highlights">
          ${highlights}
        </ul>
      </div>
      <div class="card__footer card__footer--tags">
        ${tags}
      </div>
    </article>
  `;
}

// ─── Public API ──────────────────────────────────────────────────────────────

export function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = PINNED_REPOS.map(createPersonalCard).join('');
}

export function renderProfessionalProjects() {
  const grid = document.getElementById('professional-projects-grid');
  if (!grid) return;
  grid.innerHTML = PROFESSIONAL_PROJECTS.map(createProfessionalCard).join('');
}
