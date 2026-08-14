import animais from "./animais.js";

function observarCamera(numero, acoes){
    const indice = Number(numero) - 1

    if (indice < 0 || indice >= animais.length) {
        return null
    }

    const animal = animais[indice];

    const acao = acoes[Math.floor(Math.random() * acoes.length)];

    return `Os ${animal} estão ${acao}`;
}

export default observarCamera