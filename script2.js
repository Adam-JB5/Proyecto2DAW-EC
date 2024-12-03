document.addEventListener("DOMContentLoaded", inicio);

function inicio() {



let dialog = document.getElementById("dialog");
let botonVolver = document.getElementById("volver");
let botonSalir = document.getElementById("salir");
let botonMostrar = document.getElementById("mostrar");
let puntuacion = 49;


localStorage.setItem("Juan", "20");
localStorage.setItem("Paula", "2");
localStorage.setItem("Pepe", "45");
localStorage.setItem("Pedro", "47");

botonMostrar.addEventListener("click", () => {

    dialog.showModal();
    
    
    
});

botonSalir.addEventListener("click", () => {
    dialog.close();
});

botonVolver.addEventListener("click", () => {
    console.log("Se va a comprobar el record");
    let max = 0;
    for (const element of Object.keys(localStorage)) {
        let valor = localStorage.getItem(element);
        if (parseInt(valor) > max) {
            max = parseInt(valor);
        }
    }
    console.log(`Record: ${max}`);
    localStorage.setItem("Adam", `${puntuacion}`);

    if (puntuacion < max) {
        console.log(`El record es: ${max}, usted ha conseguido: ${puntuacion}. No lo ha superado :(`);
    }else if (puntuacion > max) {
        console.log(`El record es: ${max}, usted ha conseguido: ${puntuacion}. Ha superado el record:)`);
    }else {
        console.log(`El record es: ${max}, usted ha conseguido: ${puntuacion}. Ha empatado el record :|`);
    }

    
});



}