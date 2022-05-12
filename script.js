let musicas = [
    {titulo:'As You Fade Away', artista:'NEFFEX', src:'musicas/As You Fade Away - NEFFEX.mp3', 
    img:'imagens/mus3.jpg'},
    {titulo:'Thats Whatt It Takes (Clean)', artista:'NEFFEX', src:'musicas/Thats What It Takes (Clean) - NEFFEX.mp3', 
    img:'imagens/mus2.jpg'},
    {titulo:'Till I Let Go', artista:'NEFFEX', src:'musicas/Till I Let Go - NEFFEX.mp3', 
    img:'imagens/mus1.jpg'}
];


let musica = document.querySelector('audio');
let indexMusica = 0;


let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);


//Eventos do Script
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});
document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});
musica.addEventListener('timeupdate', atualizarBarra);

//Funções

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosPraMinutos(Math.floor(musica.duration));
    });
}




function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosPraMinutos(Math.floor(musica.currentTime));
}

function segundosPraMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+ ':' +campoSegundos;
}

