// src/DB/DB.ts
import { sub } from "framer-motion/client";

//----------------------------------------------------------------------------------------------------------------
  //Whatsapp
      const whatsNumero = "5511999999999";
      const whatsMsgPadrao = "Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20o%20servi%C3%A7o.";
      const whatsappLinkPadrao = `https://api.whatsapp.com/send?phone=${whatsNumero}&text=${whatsMsgPadrao}`;
      const msgPlano = "Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20";
      const whatsappLinkPlano = `https://api.whatsapp.com/send?phone=${whatsNumero}&text=${msgPlano}`;

//----------------------------------------------------------------------------------------------------------------
export const DBMenu = {
  

  //----------------------------------------------------------------------------------------------------------------
  //Menu
  logos: {
    pequeno: "/wecare logo.png",
    fundoEsquerda: "FundoLogoPeq.png",
    fundoDireita: "FundoLogoPeq2.png",
  },
  links: [
    { label: "Home", href: "#", id: 1 },
    { label: "Serviços", href: "#servicos", id: 2 },
    { label: "Planos", href: "#planos", id: 3 },
    { label: "Área", href: "#area", id: 4 },
    { label: "FAQ", href: "#faq", id: 5 },
    { label: "Contato", href: "#contato", id: 6 },
    {
      label: "Agendar no<br/>Whatsapp",
      href: whatsappLinkPadrao,
      type: "whatsapp", // identificador especial do ícone
    },
  ],
};
//---------------------------------------------------------------------------------------------------------------
//Home

export const DBHomeVideo = {
  mobile: "/home mobile.mp4",
  desktop: "/home pc.mp4",
};

export const DBHome = {
  logoGrande: "/wecare logo.png",
  degradeHeader: "degrade-header.png",
}

//---------------------------------------------------------------------------------------------------------------
//Apresentação
export const DBApresentacao = [
  {
    chamada: "Catsitters veterinárias em São Paulo, SP",
    subchamada: "Cuidado profissional, carinhoso e seguro para gatinhos no conforto da sua casa — visitas agendadas, relatórios com fotos e suporte de quem entende de saúde felina.",
    tags: ["100% domiciliar", "Relatório com fotos", "Administração de medicação", "relatórios com fotos", "Profissionais veterinárias"],
    opt1: "Agendar agora",
    opt1Link: "https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20o%20servi%C3%A7o.",
    opt2: "Ver Planos",
    img1: "/GatoM1.png",
    img2: "/GatoM2.png",
    img3: "/GatoM3.png",
    img4: "/GatoM4.png",
  },
];

//---------------------------------------------------------------------------------------------------------------
// Serviços
export const DBServicos = [
  {
    titulo: "O que está incluso",
    servico1: {
      titulo: "Visita Essencial ",
      subtitulo: "(30–40 min)",
      icone: "c1.png",
      descricao: [
        "Troca de água e reposição de ração/latinha",
        "Limpeza básica da caixa de areia",
        "Enriquecimento ambiental e brincadeiras",
        "Relatório com fotos e status"
      ]
    },
    servico2: {
      titulo: "Visita Premium ",
      subtitulo: "(50–60 min)",
      icone: "c2.png",
      descricao: [
        "Tudo da Essencial + escovação",
        "Administração de medicação oral/tópica*",
        "Mais tempo de interação e observação clínica",
        "Checklist personalizado",
        "* Medicação injetável sob avaliação."
      ]
    },
    servico3: {
      titulo: "Plantão",
      subtitulo: "Pernoite",
      icone: "c3.png",
      descricao: [
        "Acompanhamento prolongado para gatos seniores ou pós‑operatório",
        "Relatórios detalhados com fotos e vídeos",
        "Monitoramento de sinais vitais (quando necessário)",
        "Contato direto com responsável"
      ]
    }
  }
];

//---------------------------------------------------------------------------------------------------------------
// Area de atendimento
export const DBArea = {
  titulo: "Atendemos em São Paulo, SP",
  subtitulo1: "Bairros atendidos (consulte disponibilidade):",
  subtitulo2: "Outras regiões sob consulta. Taxa de deslocamento pode ser aplicada.",
  locais: [
    { nome: "Pinheiros", ativo: true },
    { nome: "Vila Madalena", ativo: true },
    { nome: "Perdizes", ativo: false },
    { nome: "Moema", ativo: true },
    { nome: "Itaim Bibi", ativo: true },
    { nome: "Brooklin", ativo: true },
    { nome: "Bela Vista", ativo: true },
  ],
  linkMaps:'https://www.google.com/maps/d/u/1/embed?mid=1_BQgYBdsMuzTMhZLRqB5HDMcVbbRy2M&ehbc=2E312Fhttps://www.google.com/maps/d/u/1/embed?mid=1_BQgYBdsMuzTMhZLRqB5HDMcVbbRy2M&ehbc=2E312F&noprof=1',
};

//---------------------------------------------------------------------------------------------------------------
// Planos

export const DBPlanos = {
  titulo: "Planos WeCare",
  subtitulo: "Valores base. O total pode variar conforme distância, número de gatos e necessidades específicas.",
  planos: [
    {
      id: 1,
      nome: "Essencial",
      valor: "R$ 79",
      cond: "/visita",
      descricao: "Para gatinhos independentes ou visitas diárias simples.",
      botao: "Quero esse",
      botaoLink: `https://api.whatsapp.com/send?phone=${whatsNumero}&text=${msgPlano}Essencial.`,
      icone: "c1.png",
    },
        {
      id: 2,
      nome: "Premium",
      valor: "R$ 119",
      cond: "/visita",
      descricao: "Mais tempo e suporte clínico básico por veterinárias.",
      botao: "Quero esse",
      botaoLink: `https://api.whatsapp.com/send?phone=${whatsNumero}&text=${msgPlano}Premium.`,
      icone: "c2.png",
    },
        {
      id: 3,
      nome: "Pernoite",
      valor: "R$ 290",
      cond: "/noite",
      descricao: "Para necessidades especiais, idosos ou pós‑operatório.",
      botao: "Quero esse",
      botaoLink: `https://api.whatsapp.com/send?phone=${whatsNumero}&text=${msgPlano}Pernoite.`,
      icone: "c3.png",
    },
  ],
}

//----------------------------------------------------------------------------------------------------------------
// Perguntas Frequentes (FAQ)
export const DBFAQ = [
  {
    pergunta: "O que diferencia catsitters veterinárias?",
    resposta: "Além do carinho, temos formação para observar sinais clínicos, administrar medicação e orientar sobre bem‑estar felino.",
  },
  {
    pergunta: "Vocês dormem na casa?",
    resposta: "Oferecemos pernoite sob disponibilidade e avaliação do caso.",
  },
  {
    pergunta: "Como funcionam os relatórios?",
    resposta: "Após cada visita enviamos fotos, resumo do apetite, brincadeiras, caixa de areia e observações gerais.",
  },
  {
    pergunta: "É necessário chave ou senha?",
    resposta: "Combinamos a forma de acesso mais confortável e segura para você (chave, portaria, cofre de chaves, etc.).",
  },
];

//---------------------------------------------------------------------------------------------------------------
//  Depoimentos
export const DBDepoimentos = [
  {
    nome: "Lúcia M.",
    texto: "Equipe atenciosa, minhas gatinhas ficaram super tranquilas. Recebi fotos e um relatório a cada visita!",
    foto: "/tutora1.jpeg",
  },
  {
    nome: "Marina S.",
    texto: "Foi um alívio saber que podia contar com alguém tão cuidadosa. Meu gato é muito tímido, mas ela soube respeitar o tempo dele. Quando voltei, estava super tranquilo",
    foto: "/tutora2.jpeg",
  },
  {
    nome: "Pedro H.",
    texto: "Adorei o carinho com que trataram meu velhinho. Seguiram à risca todas as orientações médicas e ainda me mantiveram informada com vídeos e mensagens. Recomendo de olhos fechados",
    foto: "/tutora3.jpg",
  },
];


//---------------------------------------------------------------------------------------------------------------
// Fale com a gente / Contato
export const DBContato = {
  titulo: "Fale com a gente",
  subtitulo: "Agende pelo WhatsApp ou envie um e‑mail. Resposta rápida!",
whatsapp: {
  label: "WhatsApp",
  numeroVisivel: whatsNumero.replace("55", "+55").replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3"),
  numeroFormatado: whatsNumero, // reutiliza a variável global
  link: `https://api.whatsapp.com/send?phone=${whatsNumero}`,
  botao: "Chamar no WhatsApp",
},
  email: {
    label: "E‑mail",
    endereco: "contato@miaucare.com.br",
  },
  endereco: "Rua Exemplo, 123 – São Paulo, SP",
  instagram: {
    label: "Instagram",
    usuario: "@miaucare",
    link: "https://www.instagram.com/miaucare",
  },
  formulario: {
    campos: {
      nome: {
        label: "Seu nome",
        placeholder: "Ex.: Ana Paula",
      },
      email: {
        label: "E‑mail",
        placeholder: "voce@email.com",
      },
      bairro: {
        label: "Bairro",
        placeholder: "Ex.: Pinheiros",
      },
      mensagem: {
        label: "Mensagem",
        placeholder: "Conte sobre seus gatinhos e as datas desejadas",
      },
    },
    botaoEnviar: "Enviar",
    aviso: "Ao enviar, você concorda com nossa política de privacidade.",
  },
};
