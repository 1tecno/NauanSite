// Botão de alternar tema claro/escuro
const modoBtn = document.getElementById("modo-btn");
modoBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const darkModeAtivo = document.body.classList.contains("dark-mode");
  modoBtn.textContent = darkModeAtivo ? "☀️ Modo Claro" : "🌙 Modo Escuro";
});

// Mensagens para todos os dias do ano (incluindo algumas datas especiais)
const mensagensDiarias = {
  "01-01": "🎆 Feliz Ano Novo! Que seu ano comece com muita energia!",
  "02-01": "Que seu dia seja leve e cheio de boas surpresas!",
  "03-01": "🌟 Aproveite para começar algo novo hoje!",
  "04-01": "Dia perfeito para cuidar de você.",
  "05-01": "Que a semana seja produtiva e feliz!",
  "06-01": "Hoje é Dia de Reis! 👑",
  "07-01": "Mantenha o foco nos seus objetivos.",
  "14-02": "💖 Feliz Dia dos Namorados (Valentine's Day)! Espalhe amor!",
  "17-03": "🍀 Feliz St. Patrick's Day! Que a sorte esteja com você!",
  "01-04": "🤣 Cuidado com as pegadinhas! Feliz Dia da Mentira!",
  "22-04": "🌎 Dia da Terra — cuide do nosso planeta!",
  "01-05": "💼 Feliz Dia do Trabalhador! Parabéns a todos os trabalhadores!",
  "12-06": "💌 Dia dos Namorados no Brasil! Espalhe o amor!",
  "04-07": "🎆 Happy Independence Day (EUA)! Celebre a liberdade!",
  "31-10": "🎃 Halloween — muita diversão assustadora!",
  "25-12": "🎄 Feliz Natal! Que a paz esteja com você e sua família!",
  "31-12": "🎇 Véspera de Ano Novo — prepare seus desejos e sonhos!",
  "29-02": "🌟 Ano bissexto! Aproveite esse dia especial que acontece a cada 4 anos!",
};

// Função para gerar mensagens genéricas para dias sem mensagem especial
function mensagemGenerica() {
  const mensagensGen = [
    "Que seu dia seja incrível e cheio de energia!",
    "Aproveite cada momento hoje.",
    "Um novo dia, novas oportunidades!",
    "Sorria, a vida é feita de momentos!",
    "Seja a melhor versão de você mesmo hoje!",
    "Cada dia é uma página em branco para você escrever.",
    "Espalhe gentileza e boas vibrações!",
    "Hoje é um ótimo dia para aprender algo novo.",
    "Acredite no seu potencial e vá em frente!",
    "A felicidade está nas pequenas coisas do dia a dia.",
  ];
  return mensagensGen[Math.floor(Math.random() * mensagensGen.length)];
}

// Função para pegar a mensagem do dia atual
function pegarMensagemDoDia() {
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, "0");
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const chave = `${dia}-${mes}`;

  if (mensagensDiarias[chave]) {
    return mensagensDiarias[chave];
  } else {
    return mensagemGenerica();
  }
}

// Função para exibir a mensagem no topo da página
function mostrarMensagemDiaria() {
  const mensagem = pegarMensagemDoDia();

  let container = document.getElementById("mensagem-diaria");
  if (!container) {
    container = document.createElement("div");
    container.id = "mensagem-diaria";
    container.style.background = "rgba(0,0,0,0.7)";
    container.style.color = "#fff";
    container.style.padding = "15px 20px";
    container.style.margin = "20px auto";
    container.style.maxWidth = "600px";
    container.style.borderRadius = "12px";
    container.style.fontSize = "1.3em";
    container.style.textAlign = "center";
    container.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    container.style.backdropFilter = "blur(8px)";
    container.style.animation = "aparecer 1s ease-out";
    document.body.prepend(container);
  }
  container.textContent = mensagem;
}

// Executa a exibição da mensagem ao carregar o script
mostrarMensagemDiaria();
