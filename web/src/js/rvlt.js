let noticias = {};
let quizes = {};
noticias["futebol"] = [{"manchete": "Abel não está totalmente satisfeito com Dudu no Palmeiras", "subtitulo": "Atacante acumula marcas pelo clube alviverde, mas treinador ainda espera que ele melhore num ponto", "conteudo": "dudu", "imagem": "https://images-ext-2.discordapp.net/external/XU1_I0bRahrEx8ZQ38ApHFHJkD9hdpyqWWr6sOiFAuQ/https/i.superesportes.com.br/dBGIM4q3AM81pkSP6FDCZgux1wU%3D/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2023/06/07/3997124/dudu-e-cumprimentado-por-abel-apos-marcar-contra-o-atletico-mg_1_241683.jpg"}, {"manchete": "Hulk choca mundo do futebol e encerra período no Atlético-MG", "subtitulo": "Hulk choca mundo do futebol e encerra período no Atlético-MG", "imagem": "https://i.superesportes.com.br/bD8OHdcp0uB5Q7uUE_4fNvGlfwg=/650x0/smart/imgsapp.mg.superesportes.com.br/app/noticia_126420360808/2023/04/13/3992618/hulk-segue-somando-grandes-marcas-no-atletico_1_84607.jpg"}];
quizes["celebridades"] = [{"titulo": "Qual cabelo do Neymar combina mais com você?", "subtitulo": "Esse é o teste pra quem não tira o Ney da cabeça.", "imagem": "https://res.cloudinary.com/buzzfeed-brasil/image/upload/q_auto:best,f_auto,dpr_2.0,c_fill,w_320,h_230/image-uploads/quiz-question-alternative-image/jpeg/00f49640631f1e6f387c86ee8156921f.jpg"}]
quizes["musica"] = [{"titulo": "Quem você seria no BTS?", "subtitulo": "Todos os garotos do BTS são lindos, fofos e talentosos. Mas quem você seria se fosse um deles?", "imagem": "https://popnow.com.br/wp-content/uploads/2020/09/BTS.jpeg"}]
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
        <a href=""><button type="button" class="actionq">Descubra!</button></a>
    </div>
</div>`;
}

adicionarNoticia(noticiasHtml, noticias["futebol"][0]);
adicionarNoticia(noticiasHtml, noticias["futebol"][1]);
adicionarNoticia(noticiasHtml, noticias["futebol"][0]);
adicionarNoticia(noticiasHtml, noticias["futebol"][1]);
adicionarNoticia(noticiasHtml, noticias["futebol"][0]);
adicionarNoticia(noticiasHtml, noticias["futebol"][1]);
adicionarQuiz(quizesHtml, quizes["celebridades"][0]);
adicionarQuiz(quizesHtml, quizes["musica"][0]);
