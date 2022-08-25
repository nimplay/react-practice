import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {  
  const [scrollY, setscrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => { setscrollY(window.pageYOffset);}
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  
  }, [scrollY]);

  return (
    <>
      <h1>Hooks - useEffect ciclo de vida</h1>
      <p>ScrollY del navegador {scrollY}px</p>
    </>
  );
}