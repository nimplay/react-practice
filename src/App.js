import './App.css';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelogHooks from './components/RelogHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';

function App() {
  return (
    <div className="App">
      <header className="App-header">          
        <section>
        <hr/>
        <Referencias />
        <hr/>
        <ContadorHooks />
        <hr/>
        <RelogHooks />
        <hr/>
        <HooksPersonalizados />
        <hr/>  
        <ScrollHooks />
        <hr/>
      </section>
      </header>      
    </div>
  );
}

export default App;
