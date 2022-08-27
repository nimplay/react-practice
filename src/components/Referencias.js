import React, { useRef } from "react";

export default function Referencias() {
  let refMenu = useRef();
  let refBtn = useRef();
  const handleToggleMenu = (e) => {
   /*  const $menu = document.querySelector('#menu');
    if(e.target.textContent === 'menu') {
      e.target.textContent = 'cerrar';
      $menu.style.display = 'block';
    }else {
      e.target.textContent = 'menu';
      $menu.style.display = 'none';
    } */

    if(refBtn.current.textContent === 'menu') {
      refBtn.current.textContent = 'cerrar';
      refMenu.current.style.display = 'block';
    }else {
      refBtn.current.textContent = 'menu';
      refMenu.current.style.display = 'none';
    } 
  }
  return (
    <>
      <h1>Referencias</h1>
      <button id="menu-btn" ref={refBtn} onClick={handleToggleMenu}>menu</button>
      <nav id="menu" ref={refMenu} style={{display:"none"}}>
        <a href="#">link</a>
        <br/>
        <a href="#">link</a>
        <br/>
        <a href="#">link</a>
        <br/>
        <a href="#">link</a>
        <br/>
        <a href="#">link</a>
        <br/>
      </nav>

      
    </>)
}