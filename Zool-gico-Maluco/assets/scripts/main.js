import promptSync from "prompt-sync";
const prompt = promptSync();
import chalk from "chalk";
import { acoes } from "./acoes.js";

console.log("Bem-vindo ao Zoológico Maluco!");
console.log(
  "Aqui, Voce é um vigilante que vai ficar em uma sala de controle, onde tem uma tela com as câmeras de segurança do zoológico, e o seu objetivo é ficar de olho nos\nanimais para que tenha uma noção do que eles estão fazendo",
);
console.log(
  "Mas cuidado, o nome do zoologico ter o nome de maluco não é atoa, os animais tem comportamentos estranhos, e as vezes eles podem fazer... coisas,\nou tomar ações inesperadas, e ai que entra a sua função, ficar de olho neles para evitar que isso aconteça",
);
console.log("Como funciona?");
console.log(
  "Voce vai poder escolher em qual camera voce vai querer olhar, onde cada camera segue essa ordem",
);
function mostrarCameras() {
  console.log(
    chalk.bold.green(
      "Camera 1: Leões\n" +
        "Camera 2: Elefantes\n" +
        "Camera 3: Macacos\n" +
        "Camera 4: Pinguins\n" +
        "Camera 5: Girafas\n" +
        "Camera 6: Ursos\n" +
        "Camera 7: Rinocerontes\n" +
        "Camera 8: Zebras\n" +
        "Camera 9: Hipopótamos\n" +
        "Camera 10: Cangurus\n" +
        "Camera 11: Cachorros\n" +
        "Camera 12: Gatos\n" +
        "Camera 13: Chimpanzé\n" +
        "Camera 14: Peixes\n" +
        "Camera 15: Tartarugas\n" +
        "Camera 16: Serpentes\n" +
        "Camera 17: Pingíns\n" +
        "Camera 18: Tucanos\n" +
        "Camera 19: Tigres\n" +
        "Camera 20: Lontras\n",
    ),
  );
}
console.log(
  "Voce pode escolher a camera digitando o numero dela, e para se demitir, basta digitar 0",
);

let camera;
let opcoesValidas = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

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
  }
  if (camera === "11") {
    console.log(
      "Os cachorros estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "12") {
    console.log(
      "Os gatos estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "13") {
    console.log(
      "Os chimpanzés estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "14") {
    console.log(
      "Os peixes estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "15") {
    console.log(
      "As tartarugas estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "16") {
    console.log(
      "As serpentes estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "17") {
    console.log(
      "Os pingíns estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "18") {
    console.log(
      "Os tucanos estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "19") {
    console.log(
      "Os tigres estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "20") {
    console.log(
      "As lontras estão " + acoes[Math.floor(Math.random() * acoes.length)],
    );
  }
  if (camera === "0") {
    console.log(chalk.bold.red("Voce se demitiu, tchau!"));
    break;
  } else {
    console.log(chalk.bold.red("A opção que voce selecionou não é válida"));
  }
} while (!opcoesValidas.includes(camera));
