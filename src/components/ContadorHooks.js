import React, { useState } from 'react';

export default function ContadorHooks(props) {
  const [contador, setContador] = useState(0);
  return (
    <>
    <h2> Hooks - useState </h2>
    <nav>
      <button onClick={() => setContador(contador + 1)}>+</button>
      <button onClick={() => setContador(contador - 1)}>-</button>
    </nav>    
    <h3>{contador}</h3>
    <p>{props.title}</p>
    </>
  );
}

ContadorHooks.defaultProps = {
  title: 'Clicks',
}