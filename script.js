let titulo = document.getElementById("titulo");


let nombreButton = document.getElementById("nombreButton");

let dadoButton = document.getElementById("dadoButton");
let dadoImg = document.getElementById("dadoImg");
let jugarButton = document.getElementById("jugarButton");


nombreButton.addEventListener("click", validarNombre);

//Esta funcion valida si el nombre tiene el numero correcto de caracteres
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


jugarButton.addEventListener("click", empezarJuego);

function empezarJuego() {
    generarTablero();
    dibujarDadoYBoton();
}

function dibujarDadoYBoton() {
    jugarButton.style.display = "none";
    let dadoYBoton = document.getElementById("interfazJuegoOcultar");
    dadoYBoton.style.display = "block";
}

function generarTablero() {

    let tablero = document.getElementById("tablero");

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const celda = document.createElement("div");
            celda.classList.add("celdaDiv");
            celda.setAttribute("id", `${i},${j}`);

            tablero.appendChild(celda);
        }
        
    }

    dibujarElementos();
}

function dibujarElementos() {
    let casillaHeroe = document.getElementById("0,0");
    let casillaCofre = document.getElementById("9,9");
    let alturaCasilla = window.getComputedStyle(casillaCofre).height.split("p")[0];
    console.log(alturaCasilla);

    casillaHeroe.innerHTML = `<img src='./img/Character2.gif' alt='' style='max-height: ${alturaCasilla * 0.8}px;'>`;
    casillaCofre.innerHTML = `<img src='./img/Chest1.png' alt='' style='max-height: ${alturaCasilla * 0.8}px;'>`;
    console.log(casillaCofre.style.height);
}

function cambiarColor() {
    document.getElementById("interfazNombre").style.backgroundColor = "rgb(63,36,63)";
    document.getElementById("tablero").style.backgroundColor = "aqua";
    document.getElementById("interfazJuego").style.backgroundColor = "red";
}






//Le añado los eventos al boton del dado
dadoButton.addEventListener("mouseup", tirarDado);
dadoButton.addEventListener("mousedown", agitarDado);

function tirarDado() {
    let random = Math.floor(Math.random() * 6 + 1);
    console.log(random);
    dadoImg.setAttribute("src", `./img/DadoP${random}.png`);
}

function agitarDado() {
    dadoImg.setAttribute("src", "./img/GirarDadoAleatorio.gif");
}