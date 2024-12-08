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
2. Abre index.html en tu navegador.

3. Sigue estos pasos para jugar:

   - Ingresa un nombre y haz clic en "Aceptar".
   - Si el nombre es válido haz clic sobre el botón "Jugar".
   - Personaliza el personaje seleccionando un color si lo deseas.
   - Lanza el dado y mueve el personaje según el número obtenido.
   - Llega al cofre para finalizar el juego.
   
## Scripts

El proyecto utiliza un único archivo JavaScript (script.js) con las siguientes secciones principales:

   1. Recolección de elementos del DOM: Captura y manipula elementos clave como botones, inputs y secciones del tablero.
   2. Funciones de validación: Comprueba que el nombre ingresado sea válido.
   3. Generación dinámica del tablero: Crea y asigna estilos dinámicos a las casillas.
   4. Eventos de interacción: Implementa la lógica de interacción con botones, casillas seleccionables y el dado.
   5. Personalización del personaje: Cambia el sprite del héroe según la elección del jugador.
   6. Sistema de puntuación y almacenamiento: Maneja récords y puntuaciones usando localStorage.

## Capturas de Pantalla

### Tablero inicial
![image](https://github.com/user-attachments/assets/a86dbd6c-368b-4508-9086-50008d2a644c)

### Juego empezado
![image](https://github.com/user-attachments/assets/7f294782-31a9-4ad8-b040-3627dd009f79)

### Cambio de color
![image](https://github.com/user-attachments/assets/1a58694a-d036-411d-a693-1fee139293b6)

### Movimiento empezado
![image](https://github.com/user-attachments/assets/8a3f629c-50e2-4797-926d-ff4234f3e192)
![image](https://github.com/user-attachments/assets/3c5103a2-7629-41e2-9232-dfe8e110a7f2)


### Juego completado
![image](https://github.com/user-attachments/assets/f6657995-7581-45fe-8d1b-61d978bd8f0e)


## Requisitos Técnicos
   ### Navegador moderno con soporte para:
   - ES6 (ECMAScript 2015) o superior.
   - Manejo de eventos y manipulación de DOM.
   - localStorage para guardar puntuaciones.

## Autor
Desarrollado por Adam Janah.

¡Diviértete jugando y superando récords!
