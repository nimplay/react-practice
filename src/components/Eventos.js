import React, {Component} from "react";

export class EventosES6 extends Component {
    constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }  
  sumar(e) {
    this.setState({
      contador: this.state.contador + 1,
    });
  }
  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
  } 

  render() {
    return (
      <div>
        <h1>EventosES6</h1>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
       </nav>
        <h3>{this.state.contador}</h3>
      
       <br/><br/><br/>       
      </div>
    )
  }
}

export class EventosES7 extends Component {
  
  state = {
    contador: 0,
  }; 
 sumar = ((e) => {
  this.setState({
    contador: this.state.contador + 1,
  });
})
restar =((e) => {
  this.setState({
    contador: this.state.contador - 1,
  });
}) 

render() {
  return (
    <div>
      <h1>EventosES7</h1>
      <nav>
        <button onClick={this.sumar}>+</button>
        <button onClick={this.restar}>-</button>
     </nav>
      <h3>{this.state.contador}</h3>
    
     <br/><br/><br/>       
    </div>
  )
}
}

function Boton(props) {
  return (
    <button onClick={props.myOnClick}>Boton hecho componente</button>
  )
}

export class MasSobreEventos extends Component {
  handleClick = (e, msg) => {
    console.log(e);
    console.log(e.target);
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.type);
    console.log(msg);
  }
  render() {
    return (
      <div>
        <h1>MasSobreEventos</h1> 
        <button onClick={(e) => this.handleClick(e, 'hola papu')}>saludar</button>      
        {/* evento personalizado */} 
        <Boton
        myOnClick={(e) => this.handleClick(e, 'holas del mar')}
        />
      </div>
    )
  }
  
}
