function mostrarContato() {
  const contato = document.getElementById("contato");
  contato.style.display = contato.style.display === "none" ? "block" : "none";
}

function irLinkedin() {
  window.open("https://www.linkedin.com/in/matheus-pompei", "_blank");
}

function irGithub() {
  window.open("https://github.com/oPompeii", "_blank");
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// A variável de controle DEVE ficar fora da função
let idioma = "pt";

function toggleLanguage() {
  // Função auxiliar para evitar erros caso um ID não exista na página
  const setText = (id, text, isHTML = false) => {
    const el = document.getElementById(id);
    if (el) {
      isHTML ? (el.innerHTML = text) : (el.innerText = text);
    }
  };

  // Referência especial para o botão de troca de idioma
  const langBtn = document.querySelector(".lang-btn");

  if (idioma === "pt") {
    // === MUDANDO PARA INGLÊS ===
    setText(
      "tituloHero",
      'Hello, I am <span class="highlight">Matheus Pompei</span>',
      true,
    );
    setText(
      "descHero",
      "Systems Analysis and Development student and Front-End developer focused on creating modern and responsive interfaces.",
    );
    setText("btnContato", "Contact Me");
    setText("btnCarta", "Presentation");
    setText("tituloSobre", "About Me");
    setText("stat1", "Projects Developed");
    setText("stat2", "Years of Study");
    setText("stat3", "Focus on Evolution");
    setText("tituloSkills", "Skills");
    setText("tituloCarta", "Cover Letter");
    setText(
      "p1Carta",
      "Pleased to meet you, I'm Matheus. My journey in technology began with a curiosity to understand how interfaces connect people to solutions.",
    );
    setText(
      "p2Carta",
      "As an ADS student, I focus my studies on modern Front-End development. My technical toolkit includes React and JavaScript.",
    );
    setText(
      "p3Carta",
      "I believe a good developer never stops learning. I dedicate my time to improving my skills in component architecture and UX/UI design.",
    );
    setText("footerText", "Front-End Developer");
    setText("tituloFormacao", "Education");
    setText("form1", "Technical High School in Multimedia");
    setText(
      "form1txt",
      "Technical training focusing on digital design, multimedia production, and web development.",
    );
    setText("form2", "Systems Analysis and Development");
    setText(
      "form2txt",
      "Degree focused on software development, databases, and best programming practices.",
    );
    setText("tituloProjPopup", "Projects and Experiences");
    setText(
      "listaProjetos",
      `
            <p>🚀 <strong>Fast Pay:</strong> Cryptocurrency wallet platform developed with React and Supabase.</p>
            <p>🎮 <strong>Game Online:</strong> UI adjustments in an online game and SQL manipulation.</p>
            <p>🔐 <strong>Security Pay:</strong> Figma prototyping and React implementation.</p>
            <p>🎨 <strong>UX and UI Design:</strong> High-fidelity layouts created with Figma.</p>
        `,
      true,
    );
    setText("tituloEstudos", "My Study Journey");
    setText(
      "corpoEstudos",
      `
            <p>🎓 <strong>Systems Analysis and Development:</strong> Focused on software development, logic, and databases.</p>
            <p>🎨 <strong>UX/UI Design (Senac):</strong> Interface design and user experience training in Figma.</p>
            <p>🎓 <strong>Multimedia:</strong> Education focused on digital content creation, interface design and multimedia production, developing skills in visual communication, user experience and the use of design tools.</p>
        `,
      true,
    );

    if (langBtn) langBtn.innerText = "PT";
    idioma = "en";
  } else {
    // === VOLTANDO PARA PORTUGUÊS ===
    setText(
      "tituloHero",
      'Olá, eu sou <span class="highlight">Matheus Pompei</span>',
      true,
    );
    setText(
      "descHero",
      "Estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor Front-End em formação, com foco na criação de interfaces modernas e responsivas.",
    );
    setText("btnContato", "Entrar em Contato");
    setText("btnCarta", "Apresentação");
    setText("tituloSobre", "Sobre Mim");
    setText("stat1", "Projetos Desenvolvidos");
    setText("stat2", "Anos de Estudo");
    setText("stat3", "Foco em Evolução");
    setText("tituloSkills", "Habilidades");
    setText("tituloCarta", "Carta de Apresentação");
    setText(
      "p1Carta",
      "Muito prazer, eu sou o Matheus. Minha jornada na tecnologia começou com a curiosidade de entender como as interfaces conectam pessoas a soluções.",
    );
    setText(
      "p2Carta",
      "Hoje, como estudante de ADS, foco meus estudos no desenvolvimento Front-End moderno. No meu arsenal técnico, conto com React e JavaScript.",
    );
    setText(
      "p3Carta",
      "Acredito que o bom desenvolvedor nunca para de aprender. Dedico meu tempo a aprimorar minhas habilidades em arquitetura de componentes e design UX/UI.",
    );
    setText("footerText", "Desenvolvedor Front-End");
    setText("tituloFormacao", "Formação");
    setText("form1", "Ensino Médio Técnico em Multimídia");
    setText(
      "form1txt",
      "Formação técnica com foco em design digital, produção multimídia e desenvolvimento web.",
    );
    setText("form2", "Análise e Desenvolvimento de Sistemas");
    setText(
      "form2txt",
      "Graduação voltada para desenvolvimento de software, banco de dados e boas práticas.",
    );
    setText("tituloProjPopup", "Projetos e Experiências");
    setText(
      "listaProjetos",
      `
            <p>🚀 <strong>Fast Pay:</strong> Desenvolvimento de plataforma de carteira de criptomoedas utilizando React e Supabase.</p>
            <p>🎮 <strong>Game Online:</strong> Ajustes e melhorias de interface em jogo online e manipulação de SQL.</p>
            <p>🔐 <strong>Security Pay:</strong> Prototipação no Figma e implementação da interface com React.</p>
            <p>🎨 <strong>UX e UI Design:</strong> Criação de layouts de alta fidelidade utilizando Figma.</p>
        `,
      true,
    );
    setText("tituloEstudos", "Minha Trajetória de Estudos");
    setText(
      "corpoEstudos",
      `
            <p>🎓 <strong>Análise e Desenvolvimento de Sistemas:</strong> Formação em lógica, banco de dados e engenharia de sistemas.</p>
            <p>🎨 <strong>UX/UI Design (Senac):</strong> Criação de interfaces digitais e experiência do usuário no Figma.</p>
            <p>🎓 <strong>Multimídia:</strong> Formação focada em criação de conteúdos digitais, design de interfaces e produção multimídia, desenvolvendo habilidades em comunicação visual, experiência do usuário e uso de ferramentas de design.</p>
        `,
      true,
    );

    if (langBtn) langBtn.innerText = "EN";
    idioma = "pt";
  }
}

// Funções de Controle dos Popups
function abrirCarta() {
  document.getElementById("popupCarta").style.display = "flex";
}
function fecharCarta() {
  document.getElementById("popupCarta").style.display = "none";
}

function abrirProjetos() {
  document.getElementById("popupProjetos").style.display = "flex";
}
function fecharProjetos() {
  document.getElementById("popupProjetos").style.display = "none";
}

function abrirEstudos() {
  document.getElementById("popupEstudos").style.display = "flex";
}
function fecharEstudos() {
  document.getElementById("popupEstudos").style.display = "none";
}

function abrirContato() {
  document.getElementById("popupContato").style.display = "flex";
}
function fecharContato() {
  document.getElementById("popupContato").style.display = "none";
}

window.onclick = function (event) {
  if (event.target.className === "popup") {
    event.target.style.display = "none";
  }
};
