import React, {Component} from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  }

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1
    })
  }
  render() {
    return (
      <div>
        <h1>Cominicacion entre componentes</h1>
        <Hijo incrementar={this.incrementarContador} msg="hijo1"/>
        <Hijo msg="hijo2"/>
      </div>
    )
  }
}

function Hijo(props) {
  return (
    <div>
      <h4>{props.msg}</h4>  
      <button onClick={props.incrementar}>+</button>  
    </div>
  )
}