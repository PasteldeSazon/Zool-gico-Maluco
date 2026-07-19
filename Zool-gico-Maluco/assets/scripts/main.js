const prompt = require("prompt-sync")();

console.log("Bem-vindo ao Zoológico Maluco!");
console.log(
  "Aqui, Voce é um vigilante que vai ficar em uma sala de controle, \n" + "onde tem uma tela com as câmeras de segurança do zoológico, e o seu objetivo é ficar de olho nos animais para que tenha uma noção do que eles estão fazendo", 

);
console.log(
  "Mas cuidado, o nome do zoologico ter o nome de maluco não é atoa, os animais tem comportamentos estranhos, e as vezes eles podem fazer... coisas,\n" + " ou tomar ações inesperadas, e ai que entra a sua função, ficar de olho neles para evitar que isso aconteça"
);
console.log("Como funciona?");
console.log(
  "Voce vai poder escolher em qual camera voce vai querer olhar, onde cada camera segue essa ordem",
);
function mostrarCameras() {
  console.log(
  "Camera 1: Leões\n" +
  "Camera 2: Elefantes\n" +
  "Camera 3: Macacos\n" +
  "Camera 4: Pinguins\n" +
  "Camera 5: Girafas\n" +
  "Camera 6: Ursos\n" +
  "Camera 7: Rinocerontes\n" +
  "Camera 8: Zebras\n" +
  "Camera 9: Hipopótamos\n" +
  "Camera 10: Cangurus"
);
}
console.log(
  "Voce pode escolher a camera digitando o numero dela, e para se demitir, basta digitar 0",
);

const acoes = [
  "comendo pizza",
  "correndo de patins",
  "dançando balé",
  "dormindo em pé",
];

let camera;
let opcoesValidas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

do {
  mostrarCameras();
  camera = prompt("Digite o numero da camera que voce quer olhar: ");
  if (camera === "1") {
    console.log(
      "Os leões estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "2") {
    console.log(
      "Os elefantes estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "3") {
    console.log(
      "Os macacos estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "4") {
    console.log(
      "Os pinguins estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "5") {
    console.log(
      "As girafas estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "6") {
    console.log(
      "Os ursos estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "7") {
    console.log(
      "Os rinocerontes estão " +
        acoes[Math.floor(Math.randon() * acoes.length)],
    );
  }
  if (camera === "8") {
    console.log(
      "As zebras estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "9") {
    console.log(
      "Os hipopótamos estão " + acoes[Math.floor(Math.randon() * acoes.length)],
    );
  }
  if (camera === "10") {
    console.log(
      "Os cangurus estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  } else {
    console.log("A opçã que voce selecionou não são validas")
  }
} while (!opcoesValidas.includes(camera));

if (camera === "0") {
  console.log("Voce se demitiu, tchau!");
}