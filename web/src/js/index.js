import data from './data.json' assert { type: 'json' };

const noticiasHtml = document.getElementsByClassName("noticias")[0];
const quizesHtml = document.getElementsByClassName("quizes")[0];

function adicionarNoticia(noticiasHtml, noticia) {
    noticiasHtml.innerHTML += `<div class="card">
    <div class="image">
        <img class="fotonoticia" src="` + noticia["imagem"] + `">
    </div>
    <div class="content">
        <a href="#">
            <span class="title">
            ` + noticia["manchete"] + `
            </span>
        </a>
    
        <p class="desc">
        ` + noticia["subtitulo"] + `
        </p>
    </div>
    </div>`;
}

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

adicionarNoticia(noticiasHtml, data["noticias"]["futebol"][Math.floor(Math.random() * data["noticias"]["futebol"].length)]);
adicionarNoticia(noticiasHtml, data["noticias"]["games"][Math.floor(Math.random() * data["noticias"]["games"].length)]);
adicionarNoticia(noticiasHtml, data["noticias"]["mundo"][Math.floor(Math.random() * data["noticias"]["mundo"].length)]);
adicionarNoticia(noticiasHtml, data["noticias"]["tech"][Math.floor(Math.random() * data["noticias"]["tech"].length)]);
adicionarNoticia(noticiasHtml, data["noticias"]["tv"][Math.floor(Math.random() * data["noticias"]["tv"].length)]);
adicionarNoticia(noticiasHtml, data["noticias"]["cinema"][Math.floor(Math.random() * data["noticias"]["cinema"].length)]);
adicionarQuiz(quizesHtml, data["quizes"]["celebridades"][0]);
adicionarQuiz(quizesHtml, data["quizes"]["musica"][0]);



