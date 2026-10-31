// Tudo que muda sem mexer no layout fica aqui.

// Link do checkout (Hotmart, Kiwify, Eduzz...). Enquanto estiver "#oferta", o botão rola até o preço.
export const CHECKOUT_URL = "https://sun.eduzz.com/E05NYDR79X";

// Link do WhatsApp da equipe. Formato: https://wa.me/55DDDNUMERO
export const WHATSAPP_URL = "https://wa.me/555193134247?text=" + encodeURIComponent("Olá! Vim pela página do curso Como Ser Promovido e gostaria de tirar uma dúvida.");

// CNPJ do rodapé. Vazio, a linha some.
export const CNPJ = "";

// Vídeo de apresentação do hero (link do Vimeo, YouTube, Panda...). Vazio, o hero mostra só a foto, sem botão de play.
export const VIDEO_URL = "https://youtu.be/RiK-_tR3TN0?si=sPI843oER5Tn-CpO";

export const PRECO = "297";
// Bloco de preço: parcela em destaque e valor à vista pequeno embaixo.
export const PARCELA_12X = "29,70";
export const PRECO_AVISTA = "297,00";
// Valor percebido da soma de tudo que vem no pacote (curso + diário e templates + 2 bônus).
export const PRECO_DE = "6.823,40";

// Depoimentos em vídeo ou print de alunos. Enquanto a lista estiver vazia, a seção não aparece.
// Formato: { nome: "Fulano", cargo: "Supervisor de transporte", empresa: "Empresa", prazo: "promovido em 4 meses", img: "/img/depoimentos/fulano.webp" }
export const DEPOIMENTOS = [];

// Empresas do currículo, na lista do documento de ajustes. KaBuM (Magalu) entrou por pedido da Milena:
// conferir com o Carlos se pode aparecer, porque antes a empresa atual ficava de fora pela regra de compliance dele.
export const EMPRESAS = [
  "Sonae",
  "Walmart",
  "Casas Bahia",
  "Cencosud",
  "Linea Alimentos",
  "Dufrio",
  "KaBuM (Magalu)",
];

// Cálculo da âncora "custo da estagnação" (médias do briefing do produto). Conferir antes de publicar.
export const SALARIO_PLENO = 4500;
export const SALARIO_SUPERVISOR = 7500;
