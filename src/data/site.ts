export const site = {
  name: 'LASI',
  fullName: 'Liga Acadêmica de Sistemas de Informação',
  description:
    'Ensino, pesquisa, extensão e inovação em Sistemas de Informação na Universidade Federal do Acre.',
  tagline: 'Conecte-se. Colabore. Transforme.',
  github: 'https://github.com/ligaacademicasiufac',
  instagram: 'https://www.instagram.com/lasi.ufac/',
  kaggle: 'https://www.kaggle.com/competitions/eco-hack',
  whatsapp: '#whatsapp-qr'
};

export const areas = [
  {
    slug: 'inteligencia-artificial-e-dados',
    shortSlug: 'ia-dados',
    index: '01',
    title: 'Inteligência Artificial e Dados',
    shortTitle: 'IA e Dados',
    description:
      'Modelos inteligentes, análise de dados, aprendizado de máquina e soluções orientadas por informação.',
    longDescription:
      'A trilha reúne estudos e projetos em inteligência artificial, ciência de dados, aprendizado de máquina, visão computacional, processamento de linguagem e engenharia de dados. O foco é transformar dados em soluções úteis, responsáveis e aplicáveis ao contexto amazônico.',
    topics: ['Aprendizado de máquina', 'Ciência de dados', 'Visão computacional', 'IA generativa'],
    accent: 'violet'
  },
  {
    slug: 'engenharia-de-software',
    shortSlug: 'engenharia-software',
    index: '02',
    title: 'Engenharia de Software',
    shortTitle: 'Engenharia de Software',
    description:
      'Arquitetura, desenvolvimento, qualidade, processos e construção de produtos digitais.',
    longDescription:
      'A trilha aborda todo o ciclo de vida de software: levantamento de requisitos, arquitetura, implementação, testes, integração contínua, experiência do usuário, manutenção e evolução de sistemas.',
    topics: ['Backend', 'Frontend', 'Arquitetura', 'Qualidade e testes'],
    accent: 'blue'
  },
  {
    slug: 'infraestrutura-e-redes',
    shortSlug: 'infraestrutura-redes',
    index: '03',
    title: 'Infraestrutura e Redes',
    shortTitle: 'Infraestrutura e Redes',
    description:
      'Redes, sistemas, computação em nuvem, segurança e infraestrutura tecnológica.',
    longDescription:
      'A trilha concentra conhecimentos em redes de computadores, sistemas operacionais, computação em nuvem, observabilidade, segurança da informação, automação e infraestrutura como código.',
    topics: ['Redes', 'Cloud e DevOps', 'Segurança', 'Sistemas operacionais'],
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

export const events = [
  {
    date: '2026',
    title: 'Amazon Eco-Hack',
    type: 'Hackathon',
    description:
      'Competição com foco em soluções tecnológicas para a Amazônia, inteligência artificial e impacto comunitário.',
    status: 'Realizado'
  },
  {
    date: 'Contínuo',
    title: 'Grupo de avisos',
    type: 'Comunidade',
    description:
      'Canal para oportunidades, competições, eventos, mentorias e atividades da LASI.',
    status: 'Aberto'
  },
  {
    date: 'Em breve',
    title: 'Trilhas de formação',
    type: 'Ensino',
    description:
      'Atividades orientadas pelas três áreas estratégicas da Liga.',
    status: 'Planejamento'
  }
] as const;

export const achievements = [
  {
    value: 3,
    suffix: '',
    label: 'áreas estratégicas'
  },
  {
    value: 4,
    suffix: '',
    label: 'jurados no Eco-Hack'
  },
  {
    value: 2000,
    suffix: ' USD',
    label: 'em premiações no Eco-Hack'
  },
  {
    value: 5,
    suffix: '',
    label: 'membros na diretoria 2026'
  }
] as const;

export const ecoHackWinners = [
  {
    position: '1º lugar geral',
    track: 'Best Amazon Eco-Hack',
    team: 'cybermazinho',
    project: 'NÚCLEO: IA',
    prize: 'US$ 1.000'
  },
  {
    position: 'Vencedor da trilha',
    track: 'The Green AI & Edge Track',
    team: 'Samauma',
    project: 'BioScan AI',
    prize: 'US$ 500'
  },
  {
    position: 'Vencedor da trilha',
    track: 'GenAI for Community Impact',
    team: 'Geminautas',
    project: 'GemmaGuardian',
    prize: 'US$ 500'
  }
] as const;
