import React, { useState, useEffect } from 'react';

function Clock({hour}){
  return ( <h1>{hour}</h1> );
}

export default function RelogHooks() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;
    if (visible) {
      temporizador = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      } , 1000);
    }else {
      clearInterval(temporizador);
    }
    return () => {
      clearInterval(temporizador);
    };

  }, [visible]);
  return (
    <>
      <h1>Hooks - Relog</h1>
      {visible=== true ? (<Clock hour={hour}/>) : null}
      <button onClick={()=> setVisible(true)}>iniciar</button>
      <button onClick={()=> setVisible(false)}>detener</button>
    </>
  );
}