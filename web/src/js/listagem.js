import data from './data.json' assert { type: 'json' };
import { adicionarNoticia, adicionarQuiz } from './rvlt.js';

const noticiasHtml = document.getElementsByClassName("noticias")[0];
const quizesHtml = document.getElementsByClassName("quizes")[0];
const params = new URLSearchParams(location.search);
let tipo = params.get("tipo");

let i = 0;
while (i < data["noticias"][tipo].length) {
    adicionarNoticia(noticiasHtml,  data["noticias"][tipo][i]);
    i++;
}

adicionarQuiz(quizesHtml, data["quizes"]["celebridades"][0]);
adicionarQuiz(quizesHtml, data["quizes"]["musica"][0]);

