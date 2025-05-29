const modoBtn = document.getElementById("modo-btn");

const temas = ["light", "dark", "neon"]; // ordem dos temas
let temaAtual = 0; // índice do tema ativo

const mensagensDiarias = {
  "01-01": "🎆 Feliz Ano Novo! Que seu ano comece com muita energia!",
  // ... demais mensagens
};

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

function removerMensagemDiaria() {
  const mensagem = document.getElementById("mensagem-diaria");
  if (mensagem) {
    mensagem.remove();
  }
}

function atualizarTextoBotao() {
  const tema = temas[temaAtual];
  if (tema === "light") {
    modoBtn.textContent = "🌙 Modo Escuro";
  } else if (tema === "dark") {
    modoBtn.textContent = "🎆 Modo Neon Vermelho";
  } else if (tema === "neon") {
    modoBtn.textContent = "☀️ Modo Claro";
  }
}

function aplicarTema(tema) {
  document.body.classList.remove("dark-mode", "neon-mode");
  if (tema === "dark") {
    document.body.classList.add("dark-mode");
  } else if (tema === "neon") {
    document.body.classList.add("neon-mode");
  }
}

function toggleTema() {
  temaAtual = (temaAtual + 1) % temas.length;
  const tema = temas[temaAtual];
  aplicarTema(tema);

  // Mensagem diária só no modo escuro, se quiser incluir no neon, adicione aqui
  if (tema === "dark") {
    mostrarMensagemDiaria();
  } else {
    removerMensagemDiaria();
  }

  localStorage.setItem("modo", tema);
  atualizarTextoBotao();
}

modoBtn.addEventListener("click", toggleTema);

window.addEventListener("load", () => {
  const modoSalvo = localStorage.getItem("modo") || "light";
  temaAtual = temas.indexOf(modoSalvo);
  if (temaAtual === -1) temaAtual = 0;

  aplicarTema(temas[temaAtual]);
  if (temas[temaAtual] === "dark") {
    mostrarMensagemDiaria();
  } else {
    removerMensagemDiaria();
  }
  atualizarTextoBotao();
});
