export function adicionarNoticia(noticiasHtml, noticia) {
    noticiasHtml.innerHTML += `<div class="card">
    <div class="image">
        <img class="fotonoticia" src="` + noticia["imagem"] + `">
    </div>
    <div class="content">
        <a href="` + noticia["conteudo"] + `">
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

export function adicionarQuiz(quizesHtml, quiz) {
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


