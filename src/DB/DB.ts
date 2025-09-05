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
    { label: "Home", href: "#" },
    { label: "Serviços", href: "#servicos" },
    { label: "Planos", href: "#planos" },
    { label: "Área", href: "#area" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
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
//Serviços
export const DBServicos = [
  {
    chamada: "Catsitters veterinárias em São Paulo, SP",
    subchamada:"Cuidado profissional, carinhoso e seguro para gatinhos no conforto da sua casa — visitas agendadas, relatórios com fotos e suporte de quem entende de saúde felina.",
    tags: ["100% domiciliar", "Relatório com fotos", "Administração de medicação", "relatórios com fotos", "Profissionais veterinárias"],
    opt1: "Agendar agora",
    opt1Link: "https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20para%20o%20servi%C3%A7o.",
    opt2: "Ver Planos",
    img: "/servicos.png",
  },
];
//----------------------------------------------------------------------------------------------------------------