/**
 * Conteúdo alinhado ao arquivo-fonte em src/components/txt (perfil, projetos, habilidades e links).
 */

export const NAV_LINKS = [
  { name: 'Início', id: 'hero' },
  { name: 'Sobre', id: 'about' },
  { name: 'Carreira', id: 'career' },
  { name: 'Projetos', id: 'projects' },
  { name: 'Habilidades', id: 'skills' },
  { name: 'Contato', id: 'contact' },
];

export const HERO = {
  greeting: 'Olá, eu sou',
  name: 'Lucas Manassés',
  headline: ['FULL STACK', 'DEVELOPER'],
  
    
  avatarUrl: 'https://i.postimg.cc/W3MFh2TP/profile-pic-(1).png',
  avatarAlt: 'Lucas Manassés',
  resumeUrl:
    'https://drive.google.com/uc?export=download&id=1rgTWAtJWyiKbl419rGg5eahkJ5TvrYRC',
};

/** Imagem fixa à esquerda na seção de habilidades (scroll narrativo). */
export const SKILLS_LEFT_IMAGE = 'https://i.postimg.cc/6QXM6zrH/IMG-1554-JPG.jpg';

export const SKILLS_SECTION = {
  eyebrow: 'Stack & Mastery',
  title: 'Tecnologias que uso no dia a dia.',
  lead:
    'Desde a concepção da interface visual que encanta e guia o usuário, até a lógica profunda e estruturada que orquestra cada funcionalidade por trás dos sistemas.',
  experienceLabel: 'Full Stack',
  experienceLine: 'Front-end • Back-end • Dados • Deploy',
  statBadge: { value: '15+', label: 'Labs & entregas' },
};

export const ABOUT = {
  eyebrow: 'Sobre mim',
  titleLine1: 'Conheça um pouco da',
  titleHighlight: ' minha história',
  intro:
    'Um desenvolvedor full stack dedicado a transformar processos reais em software confiável.',
  paragraphs: [
    'Sou Lucas Manassés Silva de Araújo, tenho 20 anos e curso Análise e Desenvolvimento de Sistemas na UNIAMÉRICA/DESCOMPLICA (5º período). Minha paixão é construir produtos completos: do layout ao banco, passando por integrações e automações.',
    'Tenho experiência prática com JavaScript, TypeScript, Node.js, Python, PHP, SQL e MySQL. Atuo em sistemas, APIs, automações e aplicações internas — sempre com foco em resolver problemas de verdade, com código organizado e escalável.',
  ],
  /** Texto longo exibido apenas na área com rolagem interna (não estica o layout). */
  scrollStory: [
    'Trabalhei na Rede Brasil de Comunicação desenvolvendo sistemas para rádio e TV: portais, fluxos internos, integrações e ferramentas que a equipe usa no dia a dia. Foi onde refinei noção de prazo, prioridade e software em produção.',
    'Para a Bereia Music (instituição sem fins lucrativos), entreguei um sistema de almoxarifado com controle de estoque, cadastros e movimentação de materiais. Também desenvolvi um chatbot para livraria com WhatsApp Web JS, Node.js e MySQL, com registro de conversas e acompanhamento em tempo real.',
    'Na Softex Pernambuco participei do projeto IAra — MVP de IA educacional voltado a comunidades ribeirinhas e quilombolas. Contribuí em equipe para um protótipo com impacto social, unindo backend, integrações e preocupação com baixo custo e alto alcance.',
    'Acredito em tecnologia como meio de inclusão e eficiência. Gosto de ver sistema no ar, métrica melhorando e usuário ganhando tempo. Busco evoluir sempre como desenvolvedor full stack e entregar soluções bem estruturadas, testáveis e preparadas para crescer.',
    'Quando não estou codando, estou estudando novas ferramentas, experimentando deploys e mantendo o hábito de documentar decisões técnicas para o time e para o futuro do projeto.',
  ],
  stats: [
    { value: '20', label: 'Anos' },
    { value: '5º', label: 'Período' },
    { value: '15+', label: 'Labs' },
  ],
  pillars: [
    { icon: 'Cpu', title: 'Inteligência' },
    { icon: 'Activity', title: 'Performance' },
    { icon: 'ShieldCheck', title: 'Confiabilidade' },
    { icon: 'Layers', title: 'Escalabilidade' },
  ],
};

export const PROJECTS = [
  {
    title: 'Sistema de Gestão',
    category: 'Full Stack Application',
    image: 'https://i.postimg.cc/TY4nKf5s/Captura-de-Tela-(47).png',
    description:
      'Sistema operacional com foco em gestão de dados de empresas parceiras, utilizando arquitetura Full Stack moderna.',
    techs: ['React', 'Vite', 'CSS', 'Bootstrap', 'Node.js', 'Express', 'MongoDB', 'Nodemon'],
    link: 'https://github.com/lucasmana/Top_Limp1',
  },
  {
    title: 'MVP de inteligência artificial (IAra)',
    category: 'Frontend e Backend Development',
    image: 'https://i.postimg.cc/0jP08fZw/iara.jpg',
    description:
      'Inteligência artificial com foco educacional para auxiliar comunidades desfavorecidas e ribeirinhas.',
    techs: ['React', 'Vite', 'CSS', 'Bootstrap', 'n8n', 'PWA', 'Node.js', 'JWT', 'Bcrypt', 'Express', 'Docker', 'Firestore'],
    link: 'https://github.com/ProjetoIAra-Aponti/projeto-iara',
  },
  {
    title: 'Chatbot de abertura de chamado e ocorrências',
    category: 'Chatbot',
    image: 'https://i.postimg.cc/GtLv0ph8/albert3.png',
    description:
      'Chatbot via WhatsApp com frontend para acompanhamento de chamados e resolução de problemas reais.',
    techs: ['PHP', 'XAMPP', 'HTML', 'JavaScript', 'Socket IO'],
    link: 'https://github.com/lucasmana/pasta-de-albert-',
  },
  {
    title: 'Portal corporativo',
    category: 'Web Application',
    image: 'https://i.postimg.cc/bvrMPzd2/Captura-de-Tela-(19).png',
    description:
      'Sistema completo para gestão de conteúdo de rádio e TV para a Rede Brasil de Comunicação.',
    techs: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    link: 'https://github.com/lucasmana/Portal-Corporativo',
  },
  {
    title: 'Cardápio digital',
    category: 'E-commerce',
    image: 'https://i.postimg.cc/DZXwW34G/Verde-Sabor.png',
    description:
      'Cardápio interativo por categorias (entradas, pratos principais, sobremesas e bebidas).',
    techs: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/lucasmana/Cardapio',
  },
];

/** Habilidades em cartões (sem porcentagem). coverImage opcional — fallback: SKILLS_LEFT_IMAGE. */
export const CAREER = {
  eyebrow: 'Carreira',
  title: 'Minha Trajetória Profissional',
  subtitle: 'Evolução contínua no desenvolvimento de software',
  experiences: [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      company: 'UNIAMÉRICA/DESCOMPLICA',
      period: '2024 - 2026 (5º Período)',
      location: 'Brasil',
      description: 'Formação em desenvolvimento de software com foco em análise de sistemas, programação e gestão de projetos tecnológicos.',
      skills: [
        'Programação Web e Programação Back-end',
        'Algoritmos e Lógica de Programação',
        'Programação estruturada e POO',
        'Estrutura de Dados',
        'Banco de Dados',
        'Engenharia de Software',
        'Gestão, Projetos e Negócios',
        'Segurança da Informação'
      ]
    },
    {
      title: 'Desenvolvedor',
      company: 'Rede Brasil de Comunicação',
      period: 'Setembro 2024 a setembro 2025',
      location: 'Brasil',
      description: 'Atuei na área de Tecnologia da Informação da Rede Brasil de Comunicação, onde tive a oportunidade de participar do desenvolvimento de soluções digitais voltadas às necessidades da empresa. Durante esse período, contribui com a criação e melhoria de sistemas internos, além de apoiar projetos relacionados à presença digital e ao atendimento ao público. Essa experiência me permitiu desenvolver uma visão prática sobre o uso da tecnologia no dia a dia de uma organização, além de fortalecer habilidades como resolução de problemas, organização e trabalho em equipe.',

      technologies: ['JavaScript', 'PHP', 'Python', 'HTML', 'CSS', 'React', 'MySQL', 'MongoDB', 'XAMPP']
    },
    {
      title: 'Projeto Integrador – MVP de IA',
      company: 'Aponti',
      period: 'Agosto 2025 a Julho 2026',
      location: 'Recife, PE (Presencial)',
      description: 'Desenvolvi com uma equipe um MVP de inteligência artificial para comunidades ribeirinhas não favorecidas, com foco em soluções de baixo custo e alto impacto social. O projeto envolveu desde a ideação até a implementação de um protótipo funcional, utilizando técnicas de machine learning para auxiliar na gestão de recursos locais e melhoria da qualidade de vida.',
      technologies: ['JavaScript', 'API Rest', 'TypeScript', 'Firebase', 'React', 'Vite']
    }
  ]
};

export const SKILL_GROUPS = [
  {
    title: 'Front-end',
    coverImage: 'https://i.postimg.cc/kGqvncwK/imagem-de-Lucas-Rbc.jpg',
    items: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'React', 'Vue.js', 'Tailwind CSS','Responsividade'],
  },
  {
    title: 'Back-end',
    coverImage: 'https://i.postimg.cc/kGqvncwK/imagem-de-Lucas-Rbc.jpg',
    items: ['JavaScript', 'TypeScript', 'Python', 'Node.js', 'Express', 'MongoDB', 'XAMPP', 'MySQL'],
  },
  
  {
    title: 'Ferramentas',
    coverImage: 'https://i.postimg.cc/kGqvncwK/imagem-de-Lucas-Rbc.jpg',  
    items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Terminal','Postman','Trello'],
  },
];

export const CONTACT = {
  email: 'lucasmanamfs2020@gmail.com',
  phone: '+55 (81) 98495-0823',
  socials: [
    { id: 'linkedin', url: 'https://www.linkedin.com/in/lucasmanasses' },
    { id: 'github', url: 'https://github.com/lucasmana' },
    { id: 'instagram', url: 'https://www.instagram.com/_lucas_manasses/' },
  ],
};

export const FOOTER_TAGLINE =
  'Full stack com foco em sistemas reais. Desenvolvido em Recife, Brasil.';
