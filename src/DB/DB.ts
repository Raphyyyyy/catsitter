// src/DB/DB.ts

export const DBMenu = {
//----------------------------------------------------------------------------------------------------------------
//Menu
    logos: {
    pequeno: "/wecare logo.png",
    fundoEsquerda: "FundoLogoPeq.png",
    fundoDireita: "FundoLogoPeq2.png",
  },
  links: [
    { label: "Home", href: "#", id:1 },
    { label: "Serviços", href: "#servicos", id:2 },
    { label: "Planos", href: "#planos", id:3 },
    { label: "Área", href: "#area", id:4 },
    { label: "FAQ", href: "#faq", id:5 },
    { label: "Contato", href: "#contato", id:6 },
    {
      label: "Agendar no<br/>Whatsapp",
      href: "https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20o%20servi%C3%A7o.",
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
    subchamada:"Cuidado profissional, carinhoso e seguro para gatinhos no conforto da sua casa — visitas agendadas, relatórios com fotos e suporte de quem entende de saúde felina.",
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
      titulo: "Visita Essencial (30–40 min)",
      descricao: [
        "Troca de água e reposição de ração/latinha",
        "Limpeza básica da caixa de areia",
        "Enriquecimento ambiental e brincadeiras",
        "Relatório com fotos e status"
      ]
    },
    servico2: {
      titulo: "Visita Premium (50–60 min)",
      descricao: [
        "Tudo da Essencial + escovação",
        "Administração de medicação oral/tópica*",
        "Mais tempo de interação e observação clínica",
        "Checklist personalizado",
        "* Medicação injetável sob avaliação."
      ]
    },
    servico3: {
      titulo: "Pernoite / Plantão",
      descricao: [
        "Acompanhamento prolongado para gatos seniores ou pós‑operatório",
        "Relatórios detalhados com fotos e vídeos",
        "Monitoramento de sinais vitais (quando necessário)",
        "Contato direto com responsável"
      ]
    }
  }
];
