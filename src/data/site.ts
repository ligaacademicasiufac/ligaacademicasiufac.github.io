export const site = {
  name: 'LASI',
  fullName: 'Liga Acadêmica de Sistemas de Informação',
  description:
    'Ensino, pesquisa, extensão e inovação em Sistemas de Informação na Universidade Federal do Acre.',
  tagline: 'Conecte-se. Colabore. Transforme.',
  instagram: 'https://www.instagram.com/lasi.ufac/',
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
      'A trilha reúne estudos e projetos em inteligência artificial, ciência de dados, aprendizado de máquina, visão computacional, processamento de linguagem e engenharia de dados. O foco é transformar dados em soluções úteis, responsáveis e aplicáveis a contextos reais.',
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

export const achievements = [
  {
    value: 2000,
    suffix: ' USD',
    label: 'em premiações'
  }
] as const;

export const selectionProcess = {
  status: 'Inscrições abertas',
  period: '27 de julho a 10 de agosto de 2026, às 23h59',
  registrationUrl: 'https://forms.gle/vRFyR1DKDB1abXig9',
  description:
    'A LASI/UFAC está selecionando novos membros para aprender, colaborar e desenvolver experiências em tecnologia.',
  statuteNotice: 'Leia atentamente o Estatuto da LASI antes de enviar sua inscrição.',
  areas: [
    { title: 'Inteligência Artificial e Dados', icon: '🧠' },
    { title: 'Engenharia de Software', icon: '⚙️' },
    { title: 'Infraestrutura e Redes', icon: '🌐' }
  ],
  profiles: [
    {
      title: 'Membros efetivos',
      description: 'Estudantes de graduação e pós-graduação da UFAC.'
    },
    {
      title: 'Membros colaboradores',
      description: 'Profissionais formados, egressos e integrantes da comunidade externa.'
    }
  ]
} as const;
