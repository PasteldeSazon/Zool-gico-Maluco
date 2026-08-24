import promptSync from "prompt-sync";
const prompt = promptSync();
import chalk from "chalk";
import { acoes } from "./acoes.js";
import observarCamera from "./motor.js";
import animais from "./animais.js";

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

const turnoNoturno = [
  "22:00",
  "23:00",
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
];
let hora = 0;

function mostrarCameras() {
  animais.forEach((animal, indice) => {
    console.log(chalk.bold.cyanBright
(`Camera ${indice + 1}: ${animal}`));
  });
}
console.log(
  "Voce pode escolher a camera digitando o numero dela, e para se demitir, basta digitar 0",
);

let camera;

mostrarCameras();

do {
  console.log(chalk.bold.yellow(`\n[HORA ATUAL]: ${turnoNoturno[hora]}`));

  camera = prompt("Digite o número da câmera (ou 'C' para mostrar a lista): ");

  if (camera.toLowerCase() === "c") {
    mostrarCameras();
    continue;
  }

  if (camera === "0") {
    console.log(chalk.bold.red("Você se demitiu, tchau!"));
    break;
  }

  const resultado = observarCamera(camera, acoes);

  if ((resultado && Number(camera) >= 1) || Number(camera) <= 20) {
    console.log(resultado);
    hora++;
  } else {
    console.log(chalk.bold.red("Câmera inválida!"));
    break;
  }

  if (hora >= turnoNoturno.length) {
    console.log("O sol nasceu!");
    break;
  }
} while (true);
