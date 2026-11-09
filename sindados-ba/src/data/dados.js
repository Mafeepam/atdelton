/* =========================================================
   Fonte de dados da aplicação.
   Em um cenário real estes arrays viriam de uma API (fetch/axios).
   Aqui são repassados por props aos componentes filhos.
   ========================================================= */

export const noticias = [
  {
    id: 1,
    titulo: 'Campanha Salarial 2026/2027',
    descricao:
      'Assembleia geral define a pauta de reivindicações da categoria de TI. Participe e fortaleça a negociação coletiva.',
    imagem: '/img/slide-campanha.svg',
    link: '#campanha',
    textoBotao: 'Ver pauta da campanha',
  },
  {
    id: 2,
    titulo: 'Novos Conveniados de TI',
    descricao:
      'Dez novas escolas de tecnologia e certificadoras entram na rede de convênios com desconto para sócios e dependentes.',
    imagem: '/img/slide-conveniados.svg',
    link: '#conveniados',
    textoBotao: 'Conhecer os convênios',
  },
  {
    id: 3,
    titulo: 'Clube de Benefícios',
    descricao:
      'Saúde, odontologia, cultura e cursos com condições especiais para filiados ao SINDADOS-BA em toda a Bahia.',
    imagem: '/img/slide-beneficios.svg',
    link: '#beneficios',
    textoBotao: 'Acessar o clube',
  },
  {
    id: 4,
    titulo: 'Assembleia Extraordinária — Home Office',
    descricao:
      'Discussão sobre o custeio de infraestrutura no trabalho remoto e o adicional de teletrabalho na convenção coletiva.',
    imagem: '/img/slide-assembleia.svg',
    link: '#assembleia',
    textoBotao: 'Confirmar presença',
  },
]

export const pisosSalariais = [
  {
    id: 1,
    cargo: 'Desenvolvedor(a) Júnior',
    nivel: 'Júnior',
    piso: 3450.0,
    reajuste: 6.2,
    cargaHoraria: '40h semanais',
    cbo: '2124-05',
    descricao:
      'Desenvolvimento e manutenção de rotinas sob supervisão, correção de defeitos e escrita de testes unitários.',
    requisitos: 'Curso superior em andamento na área de TI e domínio de ao menos uma linguagem de programação.',
    beneficios: 'Vale-refeição, plano de saúde e auxílio home office de R$ 180,00.',
  },
  {
    id: 2,
    cargo: 'Desenvolvedor(a) Pleno',
    nivel: 'Pleno',
    piso: 5980.0,
    reajuste: 6.5,
    cargaHoraria: '40h semanais',
    cbo: '2124-05',
    descricao:
      'Condução de entregas de média complexidade, revisão de código de colegas e participação no desenho de soluções.',
    requisitos: 'Superior completo em TI e 3 anos comprovados de experiência em desenvolvimento.',
    beneficios: 'Vale-refeição, plano de saúde, auxílio home office e bolsa de certificação anual.',
  },
  {
    id: 3,
    cargo: 'Analista de Suporte',
    nivel: 'Pleno',
    piso: 3890.0,
    reajuste: 6.0,
    cargaHoraria: '36h semanais (escala 6x1)',
    cbo: '3171-10',
    descricao:
      'Atendimento de chamados N1 e N2, administração de estações de trabalho e documentação da base de conhecimento.',
    requisitos: 'Curso técnico ou superior em TI e experiência com ferramentas de service desk.',
    beneficios: 'Vale-refeição, plano de saúde e adicional de 20% para turnos noturnos.',
  },
  {
    id: 4,
    cargo: 'DBA — Administrador(a) de Banco de Dados',
    nivel: 'Sênior',
    piso: 8150.0,
    reajuste: 7.1,
    cargaHoraria: '40h semanais + sobreaviso',
    cbo: '2123-05',
    descricao:
      'Modelagem, tuning, rotinas de backup e restore, políticas de segurança e alta disponibilidade dos bancos corporativos.',
    requisitos: 'Superior completo, 5 anos de experiência e certificação em pelo menos um SGBD.',
    beneficios: 'Adicional de sobreaviso de 1/3 da hora normal, plano de saúde familiar e PLR.',
  },
  {
    id: 5,
    cargo: 'Engenheiro(a) DevOps',
    nivel: 'Sênior',
    piso: 9240.0,
    reajuste: 7.4,
    cargaHoraria: '40h semanais + sobreaviso',
    cbo: '2124-10',
    descricao:
      'Automação de esteiras de CI/CD, infraestrutura como código, observabilidade e resposta a incidentes em produção.',
    requisitos: 'Superior completo, 5 anos de experiência com nuvem pública e containers.',
    beneficios: 'Adicional de sobreaviso, plano de saúde familiar, PLR e verba anual para certificações.',
  },
  {
    id: 6,
    cargo: 'Analista de Dados',
    nivel: 'Pleno',
    piso: 6320.0,
    reajuste: 6.8,
    cargaHoraria: '40h semanais',
    cbo: '2112-05',
    descricao:
      'Construção de painéis gerenciais, modelagem dimensional e sustentação de pipelines de dados analíticos.',
    requisitos: 'Superior completo, domínio de SQL e de ao menos uma ferramenta de BI.',
    beneficios: 'Vale-refeição, plano de saúde, auxílio home office e horário flexível.',
  },
  {
    id: 7,
    cargo: 'Analista de Segurança da Informação',
    nivel: 'Sênior',
    piso: 8970.0,
    reajuste: 7.2,
    cargaHoraria: '40h semanais + sobreaviso',
    cbo: '2124-15',
    descricao:
      'Gestão de vulnerabilidades, resposta a incidentes, adequação à LGPD e condução de testes de segurança.',
    requisitos: 'Superior completo, 5 anos de experiência e certificação reconhecida na área.',
    beneficios: 'Adicional de sobreaviso, plano de saúde familiar e PLR diferenciada.',
  },
  {
    id: 8,
    cargo: 'Designer de Interfaces (UI/UX)',
    nivel: 'Pleno',
    piso: 5410.0,
    reajuste: 6.3,
    cargaHoraria: '40h semanais',
    cbo: '2624-05',
    descricao:
      'Pesquisa com usuários, prototipação, testes de usabilidade e manutenção do design system dos produtos.',
    requisitos: 'Superior completo em Design ou áreas afins e portfólio de projetos digitais.',
    beneficios: 'Vale-refeição, plano de saúde, auxílio home office e verba para cursos.',
  },
]

/* Perfil usado para simular a autenticação do sócio na Navbar. */
export const perfilSocio = {
  nome: 'Ana Paula Nunes',
  matricula: '2026-04471',
  categoria: 'Sócia efetiva',
}
