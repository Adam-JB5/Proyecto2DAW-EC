"use strict";

//La ejecucion del script esperara a que se dibujen por completo todos los elementos del html
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

    //Tablero
    let tablero = document.getElementById("tablero");


    /* Variables globales */

    //Nombre introducido por el usuario
    let nombreUsuario;

    //Casilla del heroe usada en las funciones dibujarElementos() y pintarCasillas()
    let casillaHeroe;

    //Variable global usada en las funciones agitarDado() y tirarDado()
    let dadoAgitado = false;

    //Variable global con la ruta del sprite, usada en las funciones dibujarElementos(), cambiarPersonaje() y seleccionarCasilla()
    let rutaSprite = "./img/Character2Alt1.gif";

    //Variable global, numero de tiradas
    let numTiradas = 0;


    //Esta funcion valida si el nombre tiene el numero correcto de caracteres
    nombreButton.addEventListener("click", validarNombre);
    function validarNombre() {
        //Recogo el valor del input del nombre y creo una expresion regular que evita numeros y permite letras con tilde y espacios
        nombreUsuario = document.getElementById("nombreUsuario").value;
        let expReg = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

        //Si el nombre es valido elimino el eventListener para evitar que se genere mas de una vez
        if (nombreUsuario.length >= 4 && expReg.test(nombreUsuario)) {
            //Elimino el eventListener y desactivo el boton
            nombreButton.removeEventListener("click", validarNombre);
            nombreButton.setAttribute("disabled", "");
            //Habilito boton de jugar
            jugarButton.attributes.removeNamedItem("disabled");
            //Cambio el titulo
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


    //Esta funcion muestra y oculta ciertos elementos del DOM
    function dibujarMenus() {

        jugarButton.style.display = "none";
        document.getElementById("menuNombre").style.display = "none";
        document.getElementById("personalizar").style.display = "block";
        document.getElementById("interfazJuegoOcultar").style.display = "block";
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
        //Recogo la la eitqueta img del personaje y el valor de la opcion seleccionada en la lista select
        let sprite = document.getElementById("spritePersonaje");
        let color = personalizarLista.value;

        //Segun el color seleccionado cambio la imagen del sprite (src) y la variable rutaSprite, ya que se usa en otras funciones
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


    //La funcion pintarCasillas tiene toda la logica para mostrar al usuario las casillas en las que puede hacer clic para mover al personaje. Esto se consigue cambiando el estilo de las celdas
    function pintarCasillas(num) {

        //Cambio el color de la casilla en la que se encuentra el heroe. En la clase CSS uso un declarador de importancia (!important), esto se hace ya que a la celda del heroe se le asigna un estilo inline, es decir, en el codigo, este tipo de estilo tiene prioridad por encima de la hoja de estilos. Usando !important se obliga a que el estilo lo ponga la hoja de estilos
        casillaHeroe.classList.add("celdaHeroe");

        //Recogo la fila y columna con el ID de la celda (F,C)
        let filaHeroe = parseInt(casillaHeroe.id.split(",")[0]);
        let columnaHeroe = parseInt(casillaHeroe.id.split(",")[1]);

        // Recorro todas las casillas en las 4 direcciones (arriba, abajo, izquierda, derecha). Voy pintando las celdas una a una, si en algun momento me salgo del tablero es decir, la celda tiene o en fila o en columna, un 0 o un 10, el bucle no entrara en el if correspondiente, esto en efecto pintara todas las celdas hasta llegar al borde
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

        //Desactivo el boton que gira el dado para posteriormente activarlo cuando el usuario seleccione una celda. Tambien annado una ayuda contextual con la propiedad title, la cual muestra un toast cuando se hace hover sobre el elemento
        dadoButton.setAttribute("disabled", "");
        dadoButton.setAttribute("title", "Haz clic en una de las casillas resaltadas");

        //Recogo todas las celdas con la clase "celdaSeleccionable", estas van a ser las celdas clicables
        let listaCeldasSeleccionables = document.querySelectorAll(".celdaSeleccionable");

        //Annado un eventListener que llamara a la funcion seleccionarCasilla() a todas las celdas seleccionables
        for (const celda of listaCeldasSeleccionables) {
            celda.addEventListener("click", seleccionarCasilla);
        }


        //Esta funcion se encuentra dentro de la funcion pintarCasillas, se ejecuta cuando el usuario hace clic sobre una celda a la que se puede mover
        function seleccionarCasilla(ev) {

            //Guardo en una variable la celda sobre la que se ha hecho clic
            let casillaSeleccionada = ev.target;

            //Meto en la casilla seleccionada la imagen del personaje, la elimino de la casilla anterior e igualo la posicion de la casilla del heroe a la que se ha seleccionado
            casillaSeleccionada.innerHTML = `<img id="spritePersonaje" src='${rutaSprite}' alt=''>`;
            casillaHeroe.innerHTML = "";
            casillaHeroe = casillaSeleccionada;
            console.log("He pulsado una celda seleccionable");

            //Reactivo el boton que gira el dado
            dadoButton.removeAttribute("disabled");

            //Elimino la clase y el eventListener a las celdas seleccionables para que vuelvan a su estado inicial
            for (const celda of listaCeldasSeleccionables) {
                celda.classList.remove("celdaSeleccionable");
                celda.removeEventListener("click", seleccionarCasilla);
            }

            //Si la ultima casilla o la imagen del cofre es pulsada, se llama a la funcion acabarJuego()
            if (casillaSeleccionada.id == "9,9" || casillaSeleccionada.id == "spriteCofre") {
                acabarJuego();
            }

        }


    }


    function acabarJuego() {
        console.log("JUEGO ACABDOOOO");
        console.log(numTiradas);
        let cuadro = document.createElement("dialog");

        let titulo = document.createElement("h2");
        titulo.innerText = `ENHORABUENA ${nombreUsuario}`;

        let puntos = document.createElement("p");
        puntos.innerHTML = `HAS TERMINADO EL JUEGO EN: <strong>${numTiradas}</strong> TIRADAS`;

        cuadro.appendChild(titulo);
        cuadro.appendChild(puntos);


        document.body.appendChild(cuadro);
        cuadro.showModal();
    }



}