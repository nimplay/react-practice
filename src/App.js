import './App.css';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <p>
          Edit <code>src/App.js</code> 
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
        <hr/>
        <ContadorHooks />
        <hr/>
        
        <hr/>      
        <ScrollHooks />
        <hr/>
      </section>
      </header>      
    </div>
  );
}

export default App;
