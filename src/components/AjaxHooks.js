import React, { useState, useEffect } from 'react';

export default function ApiHooks(){
  const [pokemons, setPokemons] = useState([]);

  /* useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((res) => res.json())
      .then(json => {
         json.results.forEach((el) => {
           fetch(el.url)
           .then((response) => response.json())
           .then((json) => {             
             let pokemon = {
              id: json.id,
              name: json.name,
              avatar: json.sprites.front_default,              
             };
             setPokemons((pokemons) => [...pokemons, pokemon]);             
            })       
         });
      })

  }, []); */
  
  useEffect(() => {
    const getPokemons = async (url) => {      
      let answer = await fetch(url);
      let data = await answer.json();
      data.results.forEach(async (el) => {
        let res = await fetch(el.url);
        let json = await res.json();
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,              
        };
        setPokemons((pokemons) => [...pokemons, pokemon]);
      } );
    }
    getPokemons("https://pokeapi.co/api/v2/pokemon/");
  }, []);
return(
    <>    
      <h2>Peticiones asincronas Usando Hooks</h2>
      {pokemons.length === 0 ? <p>Cargando...</p> : (
        pokemons.map(el => (
          <figure key={el.id}>
          <img src={el.avatar} alt={el.name} />
          <p>{el.name}</p>
        </figure>
          )))}
      </>
  )
}