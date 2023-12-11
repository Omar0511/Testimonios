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
        <Testimonio />
      </div>
    </div>
  );
}

export default App;