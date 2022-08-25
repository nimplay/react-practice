import './App.css';
import Comp  from './components/Component';
import Propiedades from './components/Propieddes';
import State from './components/State';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos';
import Padre from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
        <Comp/>
        <Propiedades 
        cadena="hola Papi" 
        num={2224} 
        bool={false} 
        array={[1,2,3,4.5,5]}
        obj={{name:"pepe", age:"23"}}
        function={ name =>{ return "hola";} }
        reactElemant={<i>hola soun un elemanto de react</i>}
        componente={<Comp/>}
        />
        <hr />
        <State/>
        <hr />
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <EventosES6/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <Padre/>
        <hr/>
        <CicloVida/>
        <hr/>
        <AjaxApis/>
      </section>
      </header>      
    </div>
  );
}

export default App;
