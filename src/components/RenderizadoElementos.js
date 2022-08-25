import React, {Component} from "react";
import data from "../helpers/data.json";

function ListItem(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank" >{props.el.name}</a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Spring", "Summer", "Autumn", "Winter"]
    };
  }
  
  render() {
     return(
      <div>
        <h2>Hola soy un renderizado de elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((el) => <li key={el}>{el}</li>)}         
        </ol>
        <h3>Frameworks</h3>
        <ul>
          {
           data.framework.map((el) => <ListItem key={el.id} el={el}/>)
          }
        </ul>
      </div>
    )
  }
}