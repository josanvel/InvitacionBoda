/* LOADER */
const pantallaCarga = document.querySelector('.loader');
const principalNombres = document.querySelector('.principal__nombres');
const principalSubtitulo = document.querySelector('.principal__subtitulo');
const principalFecha = document.querySelector('.principal__fecha');

setTimeout(() => {
    pantallaCarga.classList.add('remove');
    document.body.style.overflowY = 'scroll';
    principalNombres.style.animationName = 'entradaInicio';
    principalSubtitulo.style.animationName = 'entradaInicio';
    principalFecha.style.animationName = 'entradaInicio';
},5000);

/* REPRODUCTOR */
const sound = new Audio('./Musica/MarryYou.mp3');

const play = document.querySelector('.reproductor__play');
const pausa = document.querySelector('.reproductor__pause');

play.addEventListener('click', () => {
    console.log("Entro play");
    sound.play();
    play.style.display = 'none';
    pausa.style.display = 'block';
});

pausa.addEventListener('click', () => {
    sound.pause();
    play.style.display = 'block';
    pausa.style.display = 'none';
});