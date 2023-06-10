let noticias = {};
let quizes = {};
noticias["futebol"] = [{"manchete": "dudu", "subtitulo": "dudu", "conteudo": "dudu", "imagem": "jpg"}];
quizes["musica"] = [{"titulo": "Quem você seria no BTS?", "subtitulo": "Todos os garotos do BTS são lindos, fofos e talentosos. Mas quem você seria se fosse um deles?"}]
const noticiasHtml = document.getElementsByClassName("noticias")[0];
const quizesHtml = document.getElementsByClassName("quizes")[0];

function adicionarNoticia(noticiasHtml, noticia) {
    noticiasHtml.innerHTML += `<div class="card">
    <div class="image">
    </div>
    <div class="content">
        <a>
            <span class="title">
            ` + noticia["manchete"] + `
            </span>
        </a>
    
        <p class="desc">
        ` + noticia["subtitulo"] + `
        </p>
    
        <a href="#" class="action">
            Leia Mais!
            <span aria-hidden="true">
                →
            </span>
        </a>
    </div>
    </div>`;
}

function adicionarQuiz(quizesHtml, quiz) {
    quizesHtml.innerHTML += `
    <div class="cardq">
    <div class="headerq"></div>
    <div class="infoq">
        <p class="titleq">` + quiz["titulo"] + `</p>
        <p>` + quiz["subtitulo"] + `</p>
    </div>
    <div class="footerq">
        <p class="tagq"></p>
        <button type="button" class="actionq">Descubra!</button>
    </div>
</div>`;
}

adicionarNoticia(noticiasHtml, noticias["futebol"][0]);
adicionarNoticia(noticiasHtml, noticias["futebol"][0]);
adicionarNoticia(noticiasHtml, noticias["futebol"][0]);
adicionarNoticia(noticiasHtml, noticias["futebol"][0]);
adicionarNoticia(noticiasHtml, noticias["futebol"][0]);
adicionarNoticia(noticiasHtml, noticias["futebol"][0]);
adicionarQuiz(quizesHtml, quizes["musica"][0]);
adicionarQuiz(quizesHtml, quizes["musica"][0]);



