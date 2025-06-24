# Desafío Técnico para IBM 💻

¡Hola! ¿Qué tal?

Este es el código que preparé para el desafío técnico de IBM. La idea fue ir construyendo la solución por etapas, demostrando no solo la lógica para resolver un par de problemas, sino también cómo montar una pequeña aplicación web con herramientas modernas.

El proceso fue súper interesante, empezamos con funciones puras y terminamos con una app interactiva en React.

## ¿Qué vas a encontrar aquí?

Básicamente, el proyecto resuelve dos problemas lógicos y los presenta en una interfaz simple:

1.  **Rotador de Palabras:** Una función que toma un string como `"hola mundo"` y lo devuelve como `"mundo hola"`. Simple, pero ideal para mostrar buenas prácticas.

2.  **Buscador de Carácter Único:** Una función un poco más compleja que encuentra el primer carácter que no se repite en una cadena. Por ejemplo, si le pasas `"aa1223"`, te devuelve `'1'`. Si le das `"aaabbbccc"`, te devuelve `null`.

3.  **Implementación con React:** Todo está montado en una sola página usando Vite + React. La idea era mostrar cómo manejar el estado, los eventos y la estructura de componentes para crear una UI interactiva.

## Stack Tecnológico 🛠️

Para este proyecto usé un stack bastante moderno y rápido, enfocado en la experiencia de desarrollo:

* **Vite:** Como entorno de desarrollo y build tool. ¡Es rapidísimo!
* **React:** Para construir la interfaz de usuario de forma declarativa. Usé hooks como `useState` para manejar el estado.
* **JavaScript (ES6+):** Toda la lógica está escrita en JS moderno.
* **CSS3:** Para darle un poco de estilo y que no se viera tan pelón.

## Para levantarlo en tu máquina 🚀

Si quieres probarlo localmente, solo tienes que seguir estos pasos en tu terminal:

1.  **Clona el repo:**
    ```bash
    git clone [https://github.com/ElAlgoritmoDeLaNoche/Code-Challenge-IBM.git](https://github.com/ElAlgoritmoDeLaNoche/Code-Challenge-IBM.git)
    ```

2.  **Métete a la carpeta:**
    ```bash
    cd Code-Challenge-IBM
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    # o si usas yarn -> yarn install
    ```

4.  **¡A correr!**
    ```bash
    npm run dev
    ```
Con eso, Vite te dará una URL local (normalmente `http://localhost:5173`) para que veas la app en tu navegador.


## Sobre el código

Verás que intenté ser ordenado. La lógica de negocio (las funciones que resuelven los problemas) está separada en `src/utils/logic.js`. De esta forma, los componentes de React (`App.jsx`) se encargan solo de la vista y de manejar el estado, pero no de "pensar". Esto hace que todo sea más fácil de mantener y testear.

---

**¡Gracias por revisar el código!**

El desafío estuvo bueno y fue una gran oportunidad para mostrar cómo trabajo. Si tienes cualquier duda o quieres platicar más sobre el código, aquí ando.

¡Saludos!