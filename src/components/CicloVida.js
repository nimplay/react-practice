import React, {Component} from "react";

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hora: new Date().toLocaleTimeString()
    };
    this.temp = null;
  }

  componentDidMount() {
    console.log(1,"el componente se monta");  
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(2,"el componente se actualiza");
    console.log(prevProps, prevState);
  }
  componentWillUnmount() {
    clearInterval(this.temp);
  }

  tictac = () => {
    this.temp = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString()
      });
    } , 1000);
  }

  iniciar = () => {
    this.tictac();
  }
  detener = () => {
    clearInterval(this.temp);
  }
render() {
  return (
    <div>
      <h2>Ciclo de vida</h2>
      <h5>{this.state.hora}</h5>
      <button onClick={this.iniciar}>iniciar</button>
      <button onClick={this.detener}>detener</button>
    </div>
  )
}

}