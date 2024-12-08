# Proyecto de Juego Interactivo con JavaScript

Este proyecto implementa un juego interactivo basado en JavaScript que incluye características como personalización de personajes, movimiento estratégico en un tablero 10x10, y un sistema de puntuación que se guarda en `localStorage`. 

## Funcionalidades principales

1. **Validación del nombre del jugador:**
   - El usuario debe ingresar un nombre válido (mínimo 4 caracteres, sin números ni caracteres especiales).
   - Una vez validado, el nombre se mostrará en el título del juego.

2. **Personalización de personaje:**
   - Los jugadores pueden elegir entre varios colores de sprites para su personaje:
     - Morado, Rojo, Amarillo, Verde y Azul.
   - La selección de color actualiza dinámicamente el sprite del personaje en el tablero.

3. **Generación del tablero:**
   - El tablero es una cuadrícula de 10x10 casillas generada dinámicamente.
   - Cada casilla tiene una textura de fondo aleatoria para simular diferentes terrenos.

4. **Movimiento del personaje:**
   - Los jugadores usan un dado para determinar el número de movimientos disponibles.
   - Las casillas seleccionables se resaltan y el personaje se mueve al hacer clic en ellas.

5. **Finalización del juego:**
   - El juego finaliza cuando el personaje llega al cofre ubicado en la última casilla del tablero (9,9).
   - Se muestra un cuadro de diálogo con la puntuación del jugador y opciones para reiniciar o cerrar.

6. **Sistema de puntuación:**
   - Se registra el número de tiradas necesarias para completar el juego.
   - Las puntuaciones se comparan con récords almacenados en `localStorage`.
   - Los mensajes finales varían según el rendimiento del jugador:
     - Nuevo récord, empate, o no superación del récord.

## Configuración y Archivos del Proyecto

1. **Archivos principales:**
   - `index.html`: Contiene la estructura básica del juego.
   - `style.css`: Define los estilos del tablero y la interfaz del juego.
   - `script.js`: Implementa toda la lógica del juego.

2. **Recursos:**
   - Carpeta `img/`:
     - Sprites del personaje en diferentes colores.
     - Imágenes de las casillas del tablero.
     - Imagen del dado (con animación para simular giro).

## Uso

1. Clona este repositorio:
   ```bash
   git clone <URL-del-repositorio>
   cd <nombre-del-repositorio>
Abre index.html en tu navegador.

Sigue estos pasos para jugar:

Ingresa un nombre y haz clic en "Aceptar".
Personaliza el personaje seleccionando un color.
Lanza el dado y mueve el personaje según el número obtenido.
Llega al cofre para finalizar el juego.
Scripts
El proyecto utiliza un único archivo JavaScript (script.js) con las siguientes secciones principales:

Recolección de elementos del DOM: Captura y manipula elementos clave como botones, inputs y secciones del tablero.
Funciones de validación: Comprueba que el nombre ingresado sea válido.
Generación dinámica del tablero: Crea y asigna estilos dinámicos a las casillas.
Eventos de interacción: Implementa la lógica de interacción con botones, casillas seleccionables y el dado.
Personalización del personaje: Cambia el sprite del héroe según la elección del jugador.
Sistema de puntuación y almacenamiento: Maneja récords y puntuaciones usando localStorage.
Capturas de Pantalla


Requisitos Técnicos
Navegador moderno con soporte para:
ES6 (ECMAScript 2015) o superior.
Manejo de eventos y manipulación de DOM.
localStorage para guardar puntuaciones.
Mejoras Futuras
Añadir niveles con mayor complejidad.
Implementar diferentes modos de juego.
Incluir una tabla de puntuaciones global con opciones para compartir resultados.
Autor
Desarrollado por [Tu Nombre].

¡Diviértete jugando y superando récords!
