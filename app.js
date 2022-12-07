function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    /* windows.innerHeight es la medida de la altura de la pantalla
    que se muestra en el navegador.
    offsetHeight es la altura del elemento, esto se le va a restar por el
    innerHeight para que sea visible el elemento, ya que puede traspasar el
    área visible de la pantalla del navegador.
    -------TODO ESTO TAMBIEN APLICA CON WIDTH--------
    */
    elm.style.top = Math.random() * (window.innerHeight - 
        elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - 
        elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];
let video = document.getElementById("solicitud");


/* Cuando el mouse esté sobre el elemnto ejecuta una accion */
btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(
    e.target) });

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que SÍ. Casemonos ya y tengamos hijos.' +
    'TE AMO!!!! ❤️');

    /* display block es que el elemento sea visible
        display hidden es que el elemento esta oculto pero sigue ocupando
        espacio
        display none es que el elemento desaparezca */
    
    divModoSexo.style.display = 'block';
    const cancion = new Audio('./resources\\modo_hot.mp3');
    video.pause();
    cancion.play();
});

divModoSexo.addEventListener('click', function(e) {
    const img = document.createElement("img");
    img.src = "https://i.pinimg.com/originals/c5/e3/c9/c5e3c9b5260daa31f5a4ab03ff048ece.png";
    console.log(img)
    divModoSexo.appendChild(img)
});

botones = document.getElementsByTagName("button")
console.log(botones)

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    event.returnValue = "";
});