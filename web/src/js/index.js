import data from './data.json' assert { type: 'json' };
import { adicionarNoticia, adicionarQuiz} from './rvlt.js';

const noticiasHtml = document.getElementsByClassName("noticias")[0];
const quizesHtml = document.getElementsByClassName("quizes")[0];

let i = 0;
let tipos = Object.keys(data["noticias"]);
while (i < tipos.length) {
    let randomEscolha = Math.floor(Math.random() * data["noticias"][tipos[i]].length);
    adicionarNoticia(noticiasHtml,  data["noticias"][tipos[i]][randomEscolha]);
    i++;
}

adicionarQuiz(quizesHtml, data["quizes"]["celebridades"][0]);
adicionarQuiz(quizesHtml, data["quizes"]["musica"][0]);



