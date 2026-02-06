'use strict';

//  ======= VISIBILIDADE DO HEADER =======
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.classList.add("visible");
    } else {
        header.classList.remove("visible");
    }

    // Para header aparecer após a imagem da hero terminar, trocar o 200 por window.innerHeight
    // Aparece quando o usuário rolar 30% da altura da tela (hero) atual
    // if (window.scrollY > window.innerHeight * 0.3)
});

//  ======= DETECÇÃO DE SEÇÃO ATUAL DO SITE (SCROLL SPY) =======

// document.addEventListener("DOMContentLoaded", () => {
//     const menuLinks = document.querySelectorAll(".links a");
//     const sections = document.querySelectorAll("section[id]");

//     const observerOptions = {
//         root: null,
//         rootMargin: "-20% 0px -70% 0px", // Detecta a seção quando ela ocupa a parte central/superior
//         threshold: 0
//     };

//     const observerCallBack = (entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 const id = entry.target.getAttribute("id");

//                 menuLinks.forEach((link) => {
//                     link.classList.remove("secao-ativa");
//                     if (link.getAttribute("href") === `#${id}`) {
//                         link.classList.add("secao-ativa");
//                     }
//                 });
//             }
//         });
//     };

//     const observer = new IntersectionObserver(observerCallBack, observerOptions);

//     sections.forEach((section) => {
//         observer.observe(section);
//     });
// });

//  ======= BARRA DE NAVEGAÇÃO MOBILE =======
class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this); // Para desativar o menu mobile ao clicar em um link
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                      index / 7 + 0.3 // Personalização de velocidade de animação
                  }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    // Fecha o menu quando clicar em um link
    handleLinkClick() {
        if (this.navList.classList.contains(this.activeClass)) {
            this.navList.classList.remove(this.activeClass);
            this.mobileMenu.classList.remove(this.activeClass);
            this.animateLinks();
        }
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);

        // Adiciona evento de clique em cada link
        this.navLinks.forEach((link) => {
            link.addEventListener("click", this.handleLinkClick);
        });
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".links",
    ".links li"
);
mobileNavBar.init();

//  ======= VISIBILIDADE DO BOTÃO PARA VOLTAR AO TOPO =======
const bntVoltarTopo = document.getElementById("botao-voltar-topo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        bntVoltarTopo.classList.add("mostrar");
    } else {
        bntVoltarTopo.classList.remove("mostrar");
    }

    // Lógica para posicionar o botão acima do footer se ele existir
    const alturaDocumento = document.documentElement.scrollHeight;
    const alturaJanela = window.innerHeight;
    const alturaFooter = document.querySelector("footer").offsetHeight;

    if ((window.scrollY + alturaJanela) >= (alturaDocumento - alturaFooter)) {
        const novoBottom = (window.scrollY + alturaJanela) - (alturaDocumento - alturaFooter) + 16;
        bntVoltarTopo.style.bottom = novoBottom + "px";
    } else {
        bntVoltarTopo.style.bottom = "1rem";
    }
});

//  ======= TRANSIÇÃO DE CARDS DA SEÇÃO DE PORTFÓLIO =======

// Recebendo elementos HTML
const cardsContainer = document.getElementById("cardsContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicators = document.getElementById("indicators");

// Definindo variáveis de controçe
let currentIndex = 0; // Qual card está sendo mostrado
// const widthCard = 378; // cardsContainer.offsetWidth; // Largura do card + gap
const totalCards = 5;

// Criando indicadores
/*for (let i = 0; i < totalCards; i++) {
    const indicator = document.createElement("div"); // Cria div
    indicator.classList.add("indicator"); // Adiciona classe

    if (i === 0) indicator.classList.add("active"); // Primeiro fica ativo

    indicator.addEventListener("click", () => goToCard(i)); // Ao clicar, vai para o card referente

    indicators.appendChild(indicator); // Adiciona div criada ao container
}*/

// Função principal de atualização
function updateCarousel() {
    // Pega dimensões do card
    const card = document.querySelector(".card-portfolio");
    const cardStyle = window.getComputedStyle(card);
    const widthCard = card.offsetWidth; // Largura do card
    const containerStyle = window.getComputedStyle(cardsContainer); // Pega dimensões do container
    const gap = parseInt(containerStyle.gap) + 8 || 32; // Gap entre cards
    const moveDistance = widthCard + gap;

    // Calcula o deslocamento máximo que pode ter
    const wrapperWidth = document.querySelector(".section-portfolio").offsetWidth;
    const totalWidth = (widthCard + gap) * totalCards - gap; // Total de largura dos cards
    const maxScroll = Math.max(0, totalWidth - wrapperWidth);

    // Calcula a posição
    let scrollPosition = currentIndex * moveDistance;

    // Limita o deslocamento
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;

    // Move o container de cards
    cardsContainer.style.transform = `translateX(-${scrollPosition}px)`

    // Atualizar botões
    prevBtn.disabled = currentIndex === 0;

    // Desabilita botão de avançar se estiver no ultimo
    const lastCardIndex = Math.abs(scrollPosition - maxScroll) < 10; // 5px de margem de segurança
    nextBtn.disabled = lastCardIndex || currentIndex >= totalCards - 1;

    // Atualiza indicadores
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
        // toggle: adiciona se true, remove se false
    });
}

// Função para ir a um card específico
function goToCard(index) {
    currentIndex = index; // Atualiza o índice
    updateCarousel(); // Atualiza a visualização
}


// Eventos dos botões
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) { // Se não estiver no primeiro card
        currentIndex--; // Volta um card
        updateCarousel();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - 1) { // Se não estive no último card
        currentIndex++; // Avança um card
        updateCarousel();
    }
});

// Navegação por teclado
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevBtn.click(); // Seta para esquerda = voltar
    if (e.key === "ArrowRight") nextBtn.click(); // Seta para direita = avançar 
})

// Atualiza a visualização ao carregar a página
window.addEventListener("resize", updateCarousel);

// Chama uma vez no início para configurar
updateCarousel();

//  ======= EXPANSÃO DE GALERIA =======

const expandBtn = document.getElementById("expandBtn");
const galeriaGrid = document.querySelector(".galeria-grid");
const galeria = document.getElementById("galeria");

expandBtn.addEventListener("click", () => {
    // Toggle da classe expandido
    galeriaGrid.classList.toggle("expandido");
    // expandBtn.classList.toggle("ativo");

    const isExpanded = galeriaGrid.classList.contains("expandido");

    if (isExpanded) {
        // Quando EXPANDIDO - mostra ícone de MENOS (-)
        expandBtn.innerHTML =
            `<svg viewBox="0 0 24 24">
            <path d="M19 13H5V11H19V13Z" />
        </svg>`
        expandBtn.setAttribute("aria-label", "Fechar galeria de fotos");
    } else {
        // Quando RECOLHIDO - mostra ícone de MAIS (+)
        expandBtn.innerHTML =
            `<svg viewBox="0 0 24 24">
            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        `
        expandBtn.setAttribute = ("aria-label", "Expandir galeria de fotos");

        // Scroll suave de volta para o início da galeria
        galeria.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

//  ======= VERIFICAÇÃO E ENVIO DE DADOS DO FORMULÁRIO =======

// Validação Dinâmica: Se quiser validar o campo no momento em que o usuário termina de digitar (evento onblur), e não apenas no envio do formulário, o JavaScript é a ferramenta correta.

// Recebendo elementos HTML
const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoTelefone = document.getElementById("telefone");
const campoMensagem = document.getElementById("mensagem");
const infoForm = document.getElementById("exibir-info");
const botaoForm = document.querySelector(".botao-form");

let iti; // Declaramos fora para que o 'submit' consiga enxergar

// Inicialização da máscara e biblioteca
document.addEventListener("DOMContentLoaded", () => {
    
    //Inicializa o intl-tel-inpup
    iti = window.intlTelInput(campoTelefone, {
        initialCountry: "br", // Começa com Brasil (+55)
        separateDialCode: true, // Deixa o +55 fora da caixa de texto
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
    });

    campoTelefone.addEventListener("input", (e) => {
        // Aplica a máscara apenas se for Brasil para não quebrar números estrangeiros
        if (iti.getSelectedCountryData().iso2 === 'br') {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '');
        }
    });

    // Este loop "escuta" quando o usuário digita para remover o erro na hora
    [campoNome, campoEmail, campoTelefone, campoMensagem].forEach(campo => {
        campo.addEventListener("input", () => {
            if (campo.classList.contains("erro")) {
                campo.classList.remove("erro");
            }
        });
    });
});


// Envio do formulário
formulario.addEventListener("submit", function (e) {
    // Evitar de recarregar a pagina
    e.preventDefault();

    // Limpa estados de erro anteriores antes de validar novamente
    [campoNome, campoEmail, campoTelefone, campoMensagem].forEach(el => el.classList.remove("erro"));

    // Recebendo valores de inputs
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const mensagem = campoMensagem.value.trim();

    // Instanciando variavel para verificação de erro(s)
    let erro = false;

    // Verificação do campo de nome
    if (!nome || Number(nome) || nome.length < 3) {
        campoNome.classList.add("erro");
        erro = true;
    }

    // Verificação do campo de e-mail com regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        campoEmail.classList.add("erro");
        erro = true;
    }

    // Verificação do campo de telefone usando a API da biblioteca
    if (!iti.isValidNumber()) {
        campoTelefone.classList.add("erro");
        erro = true;
    }

    // Verificação do campo de mensagem
    if (!mensagem) {
        campoMensagem.classList.add("erro");
        erro = true;
    }

    // Processamento do formulário
    if (erro) {
        infoForm.textContent = "Por favor, corrija os campos marcados em vermelho."
        infoForm.style.color = "red";
        return; // Para a execução aqui
    } 
    
    // Sucesso no processamento
    botaoForm.style.pointerEvents = "none"; // Evita cliques duplos
    botaoForm.innerHTML = "Enviando...";

    // Parâmetros para o template do EmailJS
    // Importante: as chaves (nome, email, etc) devem ser as mesmas criadas no template lá no site deles
    const templateParams = {
        nome: nome,
        email: email,
        telefone: iti.getNumber(), // Pega o número completo com DDI (+55...)
        mensagem: mensagem
    };

    // emailjs.send("SEU_SERVICE_ID", "SEU_TEMPLATE_ID", templateParams)
    emailjs.send("service_rtwezol", "template_i0vx95q", templateParams).then(() => {
        // Caso o e-mail seja enviado com sucesso:
    
        botaoForm.classList.remove("botao-form");
        botaoForm.classList.add("botao-sucesso");
        botaoForm.innerHTML = '<i class="fa-solid fa-check"></i>';        

        infoForm.innerHTML = `Obrigado pelo contato, <strong>${nome}</strong>!<br>
        Responderemos em breve no e-mail <strong>${email}</strong>.`
        infoForm.style.color = "green";

        // Aqui enviaria os dados para o FormSubmit ou API
        // formulario.submit();
        formulario.reset();
        iti.setCountry = "br"; // Reseta o campo de telefone para o Brasil
    })
    .catch((error) => {
        // Caso ocorra um erro ao enviar o e-mail:

        console.error("Erro ao enviar o e-mail:", error);
        infoForm.textContent = "Erro ao enviar mensagem. Tente novamente mais tarde.";
        infoForm.style.color = "red";
        botaoForm.style.pointerEvents = "auto"
        botaoForm.innerHTML = "Enviar";
    })
    .finally(() => {
        // Executado independentemente de sucesso ou erro

        // Resetar o botão e mensagens após 5 segundos
        setTimeout(() => {
            // Removendo texto de informação
            infoForm.textContent = "";

            // Removendo classe de sucesso de botão de formulário
            botaoForm.classList.remove("botao-sucesso");

            // Adicionando classe e texto padrão de botão de formulário
            botaoForm.classList.add("botao-form");
            botaoForm.innerHTML = "Enviar";

            // Habilitando cliques duplos
            botaoForm.style.pointerEvents = "auto"
        }, 5000);
    });
});