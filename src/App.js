import './App.css';
import Testimonio from './component/Testimonio';

/*
  Si fuera por exportación nombrada en el archivo de Testimonio, aquí quedaría como
  import { Testimonio } from './component/Testimonio';
*/

function App() {
  return (
    <div className="App">
      <Testimonio />
    </div>
  );
}

export default App;