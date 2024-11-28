"use strict";

document.addEventListener("DOMContentLoaded", inicio);

function inicio() {



/*Recoleccion de elementos del DOM*/

//Div titulo
let titulo = document.getElementById("titulo");

//Boton campo nombre
let nombreButton = document.getElementById("nombreButton");

//Lista de personalizacion de colores
let personalizarLista = document.getElementById("lista");

//Boton agitar dado, imagen del dado y boton de jugar
let dadoButton = document.getElementById("dadoButton");
let dadoImg = document.getElementById("dadoImg");
let jugarButton = document.getElementById("jugarButton");

//Casilla del heroe
let casillaHeroe;

//Tablero
let tablero = document.getElementById("tablero");



//Variable global usada en las funciones agitarDado() y tirarDado()
let dadoAgitado = false;

//Variable global con la ruta del sprite
let rutaSprite = "./img/Character2Alt1.gif";

//Variable global, numero de tiradas
let numTiradas = 0;


//Esta funcion valida si el nombre tiene el numero correcto de caracteres
nombreButton.addEventListener("click", validarNombre);
function validarNombre() {
    //Recogo el valor del input del nombre y creo una expresion regular que evita numeros y permite letras con tilde y espacios
    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let expReg = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    
    //Si el nombre es valido elimino el eventListener para evitar que se genere mas de una vez
    if (nombreUsuario.length >= 4 && expReg.test(nombreUsuario)) {
        //Elimino eventListener
        nombreButton.removeEventListener("click", validarNombre);
        //Habilito boton de jugar
        jugarButton.attributes.removeNamedItem("disabled");
        //Cambio el nombre del titulo
        titulo.innerHTML = `<h1>A LUCHAR HÉROE: ${nombreUsuario}</h1>`.toLocaleUpperCase();
        //Cambio el estilo de las otras secciones
        cambiarColor();


    //Si el nombre no es valido, especifico porque en una alerta
    } else {

        if (!(nombreUsuario.length >= 4)) {
            alert("El nombre debe tener 4 caracteres o más");
        } else {
            alert("El nombre no puede tener números o caracteres especiales");
        }
        
    }
    
}


//Cambio de color las interfaces de juego y pongo un fondo al tablero con una imagen
function cambiarColor() {
    document.getElementById("interfazNombre").style.backgroundColor = "#6C697C";
    document.getElementById("interfazJuego").style.backgroundColor = "#9082D1";
    tablero.style.backgroundImage = "url(./img/Desert1.png)";
}




//Esta funcion ejecuta varias funciones que dan lugar al comienzo del juego
jugarButton.addEventListener("click", empezarJuego);
function empezarJuego() {
    generarTablero();
    dibujarMenus();
}


//Se revela el dado y su boton y se oculta el boton "Jugar". Si el display de un elemento es "none" no se muestra, si es "block" se muestra de forma predeterminada
function dibujarMenus() {
    jugarButton.style.display = "none";
    let dadoYBoton = document.getElementById("interfazJuegoOcultar");
    dadoYBoton.style.display = "block";


    document.getElementById("menuNombre").style.display = "none";
    let personalizar = document.getElementById("personalizar");
    personalizar.style.display = "block";
}


//Esta funcion genera un tablero de 10x10 de divs
function generarTablero() {
    

    //Con 2 ciclos for anidados genero 10 filas y 10 columnas de divs
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            
            //Creo un elemento div y le añado una clase y un id con el siguiente formato: Nºfila,Nºcolumna
            const celda = document.createElement("div");
            celda.classList.add("celdaDiv");
            celda.setAttribute("id", `${i},${j}`);

            //Genero un numero aleatorio que corresponderá a una imagen distinta
            let random = Math.floor(Math.random() * 6 + 1);
            celda.style.backgroundImage = `url(./img/Desert${random}.png)`;

            //Annado una celda, se annadira una por cada ciclo por lo que se acabaran dibujando un total de 100 divs (casillas)
            tablero.appendChild(celda);
        }
        
    }

    //Ejecuto la funcion dibujarElementos que dibuja al heroe y el cofre en sus casillas correspondientes
    dibujarElementos();
}


//Esta funcion dibuja al heroe y el cofre en sus casillas correspondientes
function dibujarElementos() {
    //Recogo las casillas correspondientes a donde apareceran el heroe y el cofre
    casillaHeroe = document.getElementById("0,0");
    let casillaCofre = document.getElementById("9,9");

    //Uso innerHTML para insertar una etiqueta img que contendra la imagen respectiva del personaje y del cofre
    casillaHeroe.innerHTML = `<img id="spritePersonaje" src='${rutaSprite}' alt=''>`;
    casillaCofre.innerHTML = `<img id="spriteCofre" src='./img/Chest1.png' alt=''>`;
}


//Esta funcion cambia el sprite del personaje segun la eleccion del usuario, usando el evento "change"
personalizarLista.addEventListener("change", cambiarPersonaje);
function cambiarPersonaje() {
    let sprite = document.getElementById("spritePersonaje");
    let color = personalizarLista.value;

    switch (color) {
        case "morado":
            sprite.setAttribute("src", "./img/Character2Alt1.gif");
            rutaSprite = "./img/Character2Alt1.gif";
            break;

        case "rojo":
            sprite.setAttribute("src", "./img/Character2Alt2.gif");
            rutaSprite = "./img/Character2Alt2.gif";
            break;

        case "amarillo":
            sprite.setAttribute("src", "./img/Character2Alt3.gif");
            rutaSprite = "./img/Character2Alt3.gif";
            break;

        case "verde":
            sprite.setAttribute("src", "./img/Character2Alt4.gif");
            rutaSprite = "./img/Character2Alt4.gif";
            break;

        case "azul":
            sprite.setAttribute("src", "./img/Character2Alt5.gif");
            rutaSprite = "./img/Character2Alt5.gif";
            break;
    
        default:
            break;
    }
}





//Le añado los eventos al boton del dado, y al body. Esto se hace para cuando el usuario pulse el boton, pueda soltarlo en cualquier parte de la pagina y no solamente encima del boton
document.body.addEventListener("mouseup", tirarDado);
dadoButton.addEventListener("mousedown", agitarDado);

//La funcion agitarDado se ejecuta cuando el boton del dado es pulsado y cambia el valor de dadoAgitado a true para que se ejecute el codigo de la funcion tirarDado()
function agitarDado() {
    //Cambio la imagen del dado a un gif que da la ilusion de agitar un dado
    dadoImg.setAttribute("src", "./img/GirarDadoAleatorio.gif");
    dadoAgitado = true;
    personalizarLista.setAttribute("disabled", "");
}

//La funcion tirarDado, cambia la imagen del dado a una generada de forma aleatoria. Solo se hace si dadoAgitado es true, es decir, se ha ejecutado anteoriormente la funcion agitarDado().
function tirarDado() {

    if (dadoAgitado) {
        //Genero un numero aleatorio entre 1 y 6
        let random = Math.floor(Math.random() * 6 + 1);
        console.log(random);
        //Cambia la imagen segun el numero generado
        dadoImg.setAttribute("src", `./img/DadoP${random}.png`);
        //Reinicio dadoAgitado a false
        dadoAgitado = false;

        //Ejecuto la funcion pintarCasillas()
        pintarCasillas(random);

        //Sumo 1 al numero de tiradas
        numTiradas++;
    }
    
    
}


//La funcion pintarCasillas
function pintarCasillas(num) {

    //Cambio el color de la casilla en la que se encuentra el heroe
    casillaHeroe.style.backgroundColor = "grey";
    casillaHeroe.style.backgroundImage = "unset";


    let filaHeroe = parseInt(casillaHeroe.id.split(",")[0]);
    let columnaHeroe = parseInt(casillaHeroe.id.split(",")[1]);

     // Recorro todas las casillas en las 4 direcciones (arriba, abajo, izquierda, derecha)
     for (let i = 1; i <= num; i++) {
        // Hacia abajo
        if (filaHeroe + i < 10) {
            document.getElementById(`${filaHeroe + i},${columnaHeroe}`).classList.add("celdaSeleccionable");
        }

        // Hacia arriba
        if (filaHeroe - i >= 0) {
            document.getElementById(`${filaHeroe - i},${columnaHeroe}`).classList.add("celdaSeleccionable");
        }

        // Hacia la derecha
        if (columnaHeroe + i < 10) {
            document.getElementById(`${filaHeroe},${columnaHeroe + i}`).classList.add("celdaSeleccionable");
        }

        // Hacia la izquierda
        if (columnaHeroe - i >= 0) {
            document.getElementById(`${filaHeroe},${columnaHeroe - i}`).classList.add("celdaSeleccionable");
        }
    }

    dadoButton.setAttribute("disabled", "");
    dadoButton.setAttribute("title", "Haz clic en una de las casillas rojas");

    let listaCeldasSeleccionables = document.querySelectorAll(".celdaSeleccionable");

    for (const celda of listaCeldasSeleccionables) {
        celda.addEventListener("click", seleccionarCasilla);
        celda.style.backgroundImage = "unset";
    }



function seleccionarCasilla(ev) {

    let casillaSeleccionada = ev.target;

    
    casillaSeleccionada.innerHTML = `<img id="spritePersonaje" src='${rutaSprite}' alt=''>`;
    casillaHeroe.innerHTML = "";
    casillaHeroe = casillaSeleccionada;
    console.log("He pulsado una roja");

    dadoButton.removeAttribute("disabled");

    for (const celda of listaCeldasSeleccionables) {
        celda.classList.remove("celdaSeleccionable");
        celda.removeEventListener("click", seleccionarCasilla);
    }

    if (casillaSeleccionada.id == "9,9" || casillaSeleccionada.id == "spriteCofre") {
        acabarJuego();
    }

}


}


function acabarJuego() {
    console.log("JUEGO ACABDOOOO");
    console.log(numTiradas);
}



}