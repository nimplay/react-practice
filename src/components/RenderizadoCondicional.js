import React, {Component} from "react";

function Login(props) {
  return (
    <div>
      <h1>Login</h1>      
    </div>
  );
}

function Logout(props) {
  return (
    <div>
      <h1>Logout</h1>      
    </div>
  );
}

export default class RenderizadoCondicional extends Component {
 constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    };
  };
 
  render() {
    return(
      <div>
        <h2>Hola soy un renderizado condicional</h2>
       {this.state.isLogged ? <Login/> : <Logout/>}       
      </div>
    )
  }
};
