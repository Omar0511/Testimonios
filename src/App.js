import './App.css';
import Testimonio from './component/Testimonio';

/*
  Si fuera por exportación nombrada en el archivo de Testimonio, aquí quedaría como
  import { Testimonio } from './component/Testimonio';
*/

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre el curso</h1>

        <Testimonio
          nombre = 'Shawn Wang'
          pasi = 'Singapur'
          imagen = 'shawn'
          cargo = 'Ingeniero de Software'
          empresa = 'Amazon'
          testimonio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />

        <Testimonio
          nombre = 'Sarah Chima'
          pasi = 'Nigeria'
          imagen = 'sarah'
          cargo = 'Ingeniero de Software'
          empresa = 'ChatDesk'
          testimonio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />

        <Testimonio
          nombre = 'Emma Bostian'
          pasi = 'Suecia'
          imagen = 'emma'
          cargo = 'Ingeniero de Software'
          empresa = 'Spotify'
          testimonio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
      </div>
    </div>
  );
}

export default App;