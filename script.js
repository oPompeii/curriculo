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
    setText("p1Carta", "Hi! I'm Matheus, a Systems Analysis and Development student with hands-on experience in Front-End development and UI/UX Design.");
    setText("p2Carta", "Throughout my journey, I've built real projects like Fast Pay, a cryptocurrency wallet platform using React and Supabase, and Security Pay, where I handled everything from Figma prototyping to final implementation. That full-cycle vision — from design to code — is what sets me apart.");
    setText("p3Carta", "I'm proficient in React, JavaScript, HTML, CSS and experienced with Figma for high-fidelity interface design. I'm always looking to grow, whether in component architecture, coding best practices, or user experience.");
    setText("p4Carta", "I'm looking for an internship or junior developer opportunity where I can make a real contribution and grow alongside the team. Ready to give me that chance?");
    setText("footerText", "Front-End Developer");
    setText("tituloProjetos", "Projects");
    setText("btnProjetos", "View Projects");
    setText("proj1desc", "Cryptocurrency wallet platform developed with React and Supabase.");
    setText("proj2desc", "UI improvements and SQL manipulation in an online game.");
    setText("proj3desc", "Figma prototyping and interface implementation with React.");
    setText("proj4desc", "High-fidelity layout creation using Figma.");
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
    setText("p1Carta", "Olá! Sou o Matheus, estudante de Análise e Desenvolvimento de Sistemas com experiência prática em desenvolvimento Front-End e UI/UX Design.");
    setText("p2Carta", "Ao longo da minha trajetória, desenvolvi projetos reais como o Fast Pay, uma plataforma de carteira de criptomoedas com React e Supabase, e o Security Pay, onde cuidei desde a prototipagem no Figma até a implementação final. Essa visão completa — do design ao código — é o que me diferencia.");
    setText("p3Carta", "Domino React, JavaScript, HTML, CSS e tenho experiência com Figma para criação de interfaces de alta fidelidade. Estou sempre buscando evoluir, seja em arquitetura de componentes, boas práticas de código ou experiência do usuário.");
    setText("p4Carta", "Estou em busca de uma oportunidade de estágio ou vaga júnior onde eu possa contribuir de verdade e crescer junto com o time. Topa me dar essa chance?");
    setText("footerText", "Desenvolvedor Front-End");
    setText("tituloProjetos", "Projetos");
    setText("btnProjetos", "Ver Projetos");
    setText("proj1desc", "Plataforma de carteira de criptomoedas desenvolvida com React e Supabase.");
    setText("proj2desc", "Ajustes e melhorias de interface em jogo online e manipulação de SQL.");
    setText("proj3desc", "Prototipação no Figma e implementação da interface com React.");
    setText("proj4desc", "Criação de layouts de alta fidelidade utilizando Figma.");
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
