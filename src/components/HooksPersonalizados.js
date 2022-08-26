import React from 'react';
import { useFetch } from '../hooks/useFetch';


export default function HooksPersonalizados(){
  let url = "https://pokeapi.co/api/v2/pokemon/";
  let { data, loading, error } = useFetch(url);
  return(
    <>
      <h2>Hooks Personalizados</h2>
      <h3>{JSON.stringify(loading)}</h3>
      <h3>{JSON.stringify(data)}</h3>
      <h3>{JSON.stringify(error)}</h3>
    </>
  )
}
