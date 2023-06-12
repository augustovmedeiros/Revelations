import data from './data.json' assert { type: 'json' };


const params = new URLSearchParams(location.search);
const quizesHtml = document.getElementsByClassName("quizes")[0];
const noticiaHtml = document.getElementsByClassName("noticia")[0];

function adicionarQuiz(quizesHtml, quiz) {
    quizesHtml.innerHTML += `
    <div class="cardq">
    <div class="headerq">
    <img class="fotoquiz" src="` + quiz["imagem"] + `">
    </div>
    <div class="infoq">
        <p class="titleq">` + quiz["titulo"] + `</p>
        <p>` + quiz["subtitulo"] + `</p>
    </div>
    <div class="footerq">
        <p class="tagq"></p>
        <a href="` + quiz["conteudo"] + `"><button type="button" class="actionq">Descubra!</button></a>
    </div>
</div>`;
}

function setNoticia(noticiaHtml, noticia){
    noticia["imagem"] = noticia["imagem"].replace("/src", "");
    noticiaHtml.innerHTML = `<div class="noticiaDiv">
    <h1 class="conteudo">` + noticia["manchete"] + `</h1>   
    <h5 class="conteudo">` + noticia["subtitulo"] + `</h3>
    <img class="imagemNoticia" src=".` + noticia["imagem"] + `" alt="">
    <p class="conteudo">` + noticia["conteudo"] + `</p>   
</div>`
}

let tipo = params.get("tipo");
let idNoticia = params.get("id");

setNoticia(noticiaHtml, data["noticias"][tipo][idNoticia]);
adicionarQuiz(quizesHtml, data["quizes"]["celebridades"][0]);
adicionarQuiz(quizesHtml, data["quizes"]["musica"][0]);