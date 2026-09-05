export const site = {
  name: 'LASI',
  fullName: 'Liga Acadêmica de Sistemas de Informação',
  description:
    'Liga Acadêmica de Sistemas de Informação da UFAC dedicada ao ensino, à pesquisa e à extensão em tecnologia, aproximando formação acadêmica e demandas da sociedade acreana.',
  tagline: 'Conecte-se. Colabore. Transforme.',
  social: {
    instagram: 'https://www.instagram.com/lasi.ufac/',
    linkedin: 'https://www.linkedin.com/company/lasi-ufac',
    youtube: 'https://www.youtube.com/@Ligaasi',
    whatsapp: 'https://chat.whatsapp.com/BzjNJqaJP7S6B9Ho3EgCQO'
  }
};

export const areas = [
  {
    slug: 'inteligencia-artificial-e-dados',
    shortSlug: 'ia-dados',
    index: '01',
    title: 'Inteligência Artificial e Dados',
    shortTitle: 'IA e Dados',
    description:
      'Aprendizado profundo, visão computacional, processamento de linguagem natural e modelagem analítica preditiva.',
    longDescription:
      'Eixo dedicado ao estudo e à aplicação prática de arquiteturas de aprendizado profundo, visão computacional, processamento de linguagem natural e modelagem analítica preditiva, conectando investigação acadêmica e soluções aplicáveis a contextos reais.',
    topics: ['Aprendizado profundo', 'Visão computacional', 'PLN', 'Modelagem preditiva'],
    accent: 'violet'
  },
  {
    slug: 'engenharia-de-software',
    shortSlug: 'engenharia-software',
    index: '02',
    title: 'Engenharia de Software',
    shortTitle: 'Engenharia de Software',
    description:
      'Metodologias ágeis, desenvolvimento colaborativo, arquitetura de sistemas e garantia de qualidade.',
    longDescription:
      'Eixo dedicado a metodologias ágeis de desenvolvimento, gerenciamento colaborativo de repositórios, arquitetura de sistemas e garantia de qualidade para a criação e evolução de plataformas integradas e de alto desempenho.',
    topics: ['Metodologias ágeis', 'Git e colaboração', 'Arquitetura', 'Qualidade de software'],
    accent: 'blue'
  },
  {
    slug: 'infraestrutura-e-redes',
    shortSlug: 'infraestrutura-redes',
    index: '03',
    title: 'Infraestrutura e Redes',
    shortTitle: 'Infraestrutura e Redes',
    description:
      'Redes de computadores, computação em nuvem, segurança da informação, auditoria e implantação contínua.',
    longDescription:
      'Eixo dedicado ao estudo de redes de computadores, arquitetura de computação em nuvem, práticas de segurança da informação, auditoria de sistemas e suporte estrutural a processos de implantação contínua.',
    topics: ['Redes', 'Cloud', 'Segurança da informação', 'Implantação contínua'],
    accent: 'cyan'
  }
] as const;

export const directors = [
  {
    name: 'Dayan Freitas',
    role: 'Presidente',
    image: '/team/dayan-freitas.webp'
  },
  {
    name: 'Breno Campelo',
    role: 'Vice-presidente',
    image: '/team/breno-campelo.webp'
  },
  {
    name: 'João Vitor',
    role: 'Diretor de Ensino e Pesquisa',
    image: '/team/joao-vitor.webp'
  },
  {
    name: 'Marcos Vinícius',
    role: 'Diretor de Extensão e Comunicação',
    image: '/team/marcos-vinicius.webp'
  },
  {
    name: 'Felipe Melo',
    role: 'Secretário e Tesoureiro',
    image: '/team/felipe-melo.webp'
  }
] as const;

export const achievements = [
  {
    value: 2000,
    suffix: ' USD',
    label: 'em premiações'
  }
] as const;

export const selectionProcess = {
  isOpen: false,
  status: 'Sem inscrições abertas',
  period: 'Os processos seletivos são divulgados periodicamente nos canais oficiais da LASI.',
  description:
    'No momento, não há processo seletivo aberto. Entre no grupo de avisos e acompanhe os canais oficiais para receber a próxima chamada.',
  areas: [
    { title: 'Inteligência Artificial e Dados', icon: '🧠' },
    { title: 'Engenharia de Software', icon: '⚙️' },
    { title: 'Infraestrutura e Redes', icon: '🌐' }
  ],
  profiles: [
    {
      title: 'Membros efetivos',
      description: 'Estudantes de graduação e pós-graduação regularmente matriculados na UFAC.'
    },
    {
      title: 'Membros colaboradores',
      description: 'Egressos, profissionais e integrantes da comunidade externa que contribuam técnica ou cientificamente com a Liga.'
    }
  ]
} as const;
