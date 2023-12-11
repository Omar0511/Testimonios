# Proyecto Testimonios

## Tecnologías
- React.js
- React Developer Tools (extensión de Google Chrome), sirve para ver elementos en INSPECCIONAR de REACT.

###### NOTAS
¿Que es React?
Biblioteca o Librería de JavaScript de código abierto diseñada para crear interfaces de usuario.

Biblioteca: conjunto de implementaciones o subprogramas que podemos usar en nuestro código.

Ventajas:
Fácil de aprender y usar.
Componentes reutilizables.
Crear aplicaciones dinámicas.
Buen desempeño.

Componente
Parte de la interfaz de usuario que es independiente y reusable.
Se dividen en: Funcionales y De Clase.

Componente Funcional:
Función de JS que retorna un elemento de REACT (JSX).
Características:
Debe retornar un elemento de React (JSX).
Debe comenzar con una letra mayúscula.
Puede recibir valores si es necesario.

Props:
props = "Propiedades"
Argumentos que puede recibir un componente de React.
Solo pueden ser enviados de "padre a hijo".

Componente de Clase:
Clase de JS que retorna un elemento JSX.
Características:
Debe extender React.Component.
Debe tener un método render() para retornar un elemento JSX.
Puede recibir valores si es necesario.

ESTADO - STATE
Representación en JS del conjunto de propiedades de un componente y sus valores actuales.

¿Po qué componentes de Clase?
Anteriormente, se usaban para poder trabajar con estados nuestros componentes.
En versiones anteriores (16.8), no se podía con componentes funcionales.

HOOKS:
Permiten agregar un cierto estado al componente.
Ahora si podemos asignar y actualizar el estado de un componente funcional con React.
Es una función especial que te permite trabajar con estados en componentes funcionales y otros aspectos de React.

Event Listener
Función JS que es ejecutada cuando ocurre un evento específico.

JSX
Entensión de React para la sintaxis de JS.
Nos permite describir en JS comó se verán los componentes usando una estructura similar a HTML.
Ventajas:
Estructura más fácil de visualizar.
Errores y advertencias más útiles.
Es opcional.
Elementos:
Unidades más oequeñitas en React.
Definen lo que se ve en la pantalla.

Elementos VS Componentes
Los componentes en React están hechos de elementos.

REACT DOM:
Paquete que facilita la interacción y actualización del DOM en aplicaciones en React.

DOM:
Document Object Model.
Representación en el navegador de todos los elementos que conforman una página o aplicación web.

Con JSX, puedes crear y usar cualquier elmento HTML.
EN JSX, los elementos HTML se representan con etiquetas en letras minpusculas.

Los COMPONENTES definidos por el usuario comienzan con una letra mayúscula.

ATRIBUTOS:
Puedes agregar atributos a tus elementos en JSX para especificar ciertas características.
Algunos se escriben de forma distina si se comparan con HTML.

CLASS:
Es una palabra reservada en JS que podemos usar para crear una clase.
Por eso necesitamos escribir este atributo de forma distinta en JSX.

El atributo STYLE, acepta un objeto JS con propiedades CSS escritas en camelCase.

Al igual que en HTML, los eleemtnos pueden ser anidados en JSX para formar estructuras más complejas.

Self-Closing Tag
Elemento que solo posee una etiqueta de apertura ya que no contiene texto u otros elementos.

Puedes escribir cualquier expresión válida de JS entre las llaves y su valor será reemplazado.

Creación del proyecto:
Podemos crear el proyecto desde POWERSHELL, nos ubicamos en la carpeta donde queremos crear nuestro proyecto.
En consola ingresamos el comando: npx create-react-app nombreProyecto.
npm start: iniciar la app (el server).

<!-- 
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
