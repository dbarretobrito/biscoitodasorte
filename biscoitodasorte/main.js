// VARIÁVEIS:
const fortuneCookieLines = [
    "Acredite em você mesmo e tudo será possível.",
    "A sorte favorece os audazes.",
    "A vida é como andar de bike. Para manter o equilíbrio, continue em movimento.",
    // Adicione mais frases aqui
];
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const cookieImg = document.querySelector('.screen1 img');
const openCookieButton = document.querySelector('.screen2 button');
const screen2P = document.querySelector('.screen2 p');

// FUNÇÕES
// Função para sortear frase:
function drawRandomLine() {
    const index = Math.floor(Math.random() * fortuneCookieLines.length);
    return fortuneCookieLines[index];
}

// Função de criar uma frase clicando no biscoito fechado do screen1:
function imgClick() {
    const newLine = drawRandomLine();
    screen2P.textContent = newLine;
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}

// Função de abrir outro biscoito pelo button do screen2:
function openAnotherCookie() {
    const newLine = drawRandomLine();
    screen2P.textContent = newLine;
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}


// Eventos
cookieImg.addEventListener('click', imgClick);
openCookieButton.addEventListener('click', openAnotherCookie);
