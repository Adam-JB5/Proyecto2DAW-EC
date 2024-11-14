

function generarTablero() {
    let tablero = document.getElementById("tablero");

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const celda = document.createElement("div");
            celda.classList.add("celdaDiv");

            tablero.appendChild(celda);
        }
        
    }
}


let imagenDado = document.getElementById("dadoImg");
let botonDado = document.getElementById("dadoButton");

botonDado.addEventListener("mouseup", levantarRaton);
botonDado.addEventListener("mousedown", mantenerRaton);

function levantarRaton() {
    imagenDado.setAttribute("src", "./img/DadoP6.png");
}

function mantenerRaton() {
    imagenDado.setAttribute("src", "./img/GirarDadoAleatorio.gif");
}