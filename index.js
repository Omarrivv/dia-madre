document.addEventListener("DOMContentLoaded", function(){
    var audio = document.getElementById("backgroundMusic");
    var promise = audio.play();
    if (promise !== undefined){
        promise.then(_ => {
            // Autoplay started
        }).catch(error => {
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
            showPlayButton(); // Asume que existe esta función o debes crearla
        });
    }
});
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Cambia imagen cada 4 segundos
}
function toggleMusic() {
    var audio = document.getElementById('backgroundMusic');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
function showPlayButton() {
    var playButton = document.getElementById('playButton');
    playButton.style.display = 'block'; // Muestra el botón si el autoplay no funciona
}

document.addEventListener("DOMContentLoaded", function(){
    var words = ["Feliz Dia Mamá 🎇🎉", "🎈🎈🎈🎈🎈🎉🎇","Que Pases Bien Tu Dia 🎉", "🎉🎉🎉🎇🎇🎇", "Feliz Dia Para Todas Las Madres 🎉🎇🎆"];
    var index = 0;
    var dynamicText = document.getElementById("dynamicText");

    setInterval(function() {
        dynamicText.textContent = words[index];
        index = (index + 1) % words.length; // Incrementa el índice para pasar a la siguiente palabra
    }, 2500); // Cambia las palabras cada 2 segundos
});

