import './App.css';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelogHooks from './components/RelogHooks';
import ApiHooks from './components/AjaxHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">          
        <section>
        <hr/>
        <ContadorHooks />
        <hr/>
        <RelogHooks />
        <hr/>    
        <ApiHooks />
        <hr/>  
        <ScrollHooks />
        <hr/>
      </section>
      </header>      
    </div>
  );
}

export default App;
