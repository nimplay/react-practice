import React, {Component} from "react";

function EstadoAHijo(props){
  return(
    <div>
      <h1>{props.contadorHijo}</h1>
    </div>
  )
}

export default class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    }
    /* setInterval(() => {
      this.setState({
        contador: this.state.contador + 1,
      })
    }, 1000); */
  }
  render() {
    return(
      <div>
        <h2>Hola soy un state</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador} />
      </div>
    )
  }
}