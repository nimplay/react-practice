import React, {Component} from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <p>{props.name}</p>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  }

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then(response => response.json())
      .then(json => {
         json.results.forEach(pokemon => {
           fetch(pokemon.url).then(response => response.json()).then(json => {             
             let pokemon = {
              id: json.id,
              name: json.name,
              avatar: json.sprites.front_default,              
             };

             let pokemons = [...this.state.pokemons, pokemon];
             this.setState({pokemons});
            })            
         });
      })
  }

  render() {
    return (
      <>
      <h2>Peticiones asincronas en componentes de clase</h2>
      {this.state.pokemons.length === 0 ? <p>Cargando...</p> : (
        this.state.pokemons.map(pokemon => (
          <Pokemon key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar}/>
          )))}
      </>
    )
  }
}
