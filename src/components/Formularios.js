import React, { useState } from 'react';

/* export default function Formularios() {
  const [nombre, setNombre] = useState('');
  const [sabor, setSabor] = useState('vanilla');
  const [lenguaje, setLenguaje] = useState('');
  const [acepto, setAcepto] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombre, sabor, lenguaje, acepto);
  }
   return(
      <>  
          <h1>Formularios</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input 
             type="text" 
             name="nombre" 
             id="nombre" 
             value={nombre} 
             onChange={(e) => setNombre(e.target.value)}/>
             <p>Elije tu sabor JS favorito</p>
             <input
             type="radio"
             id="vanilla" 
             name="sabor" 
             value="vanilla"
             onChange={(e) => setSabor(e.target.value)}
             defaultChecked/>
              <label htmlFor="vainilla">Vainilla</label>

              <input
             type="radio"
             id="chocolate" 
             name="sabor" 
             value="chocolate" 
             onChange={(e) => setSabor(e.target.value)}/>
              <label htmlFor="chocolate">Chocolate</label>

              <input
             type="radio"
             id="strawberry" 
             name="sabor" 
             value="strawberry" 
             onChange={(e) => setSabor(e.target.value)}/>
              <label htmlFor="strawberry">Strawberry</label>

              <p>Elige tu lenguaje favorito</p>
              <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
                <option value="">- - -</option>
                <option value="javascript">Javascript</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="c">C</option>
              </select>
                <p>Check box</p>
                <label htmlFor="terminos">Acepto</label>
                <input 
                type="checkbox" 
                name="terminos" 
                id="terminos" 
                onChange={(e) => setAcepto(e.target.checked)} />
                <br/>
                <input type="submit"/>

              
          </form>
      </>
          
        
   )
} */
export default function Formularios() {
  const [form, setForm] = useState({});

  const handleChande = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  
  const handleCheked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }
   return(
      <>  
          <h1>Formularios</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input 
             type="text" 
             name="nombre" 
             id="nombre" 
             value={form.nombre}
             onChange={handleChande}/>
             <p>Elije tu sabor JS favorito</p>
             <input
             type="radio"
             id="vanilla" 
             name="sabor" 
             value="vanilla"
             onChange={handleChande}
             defaultChecked/>
              <label htmlFor="vainilla">Vainilla</label>

              <input
             type="radio"
             id="chocolate" 
             name="sabor" 
             value="chocolate" 
             onChange={handleChande}/>
              <label htmlFor="chocolate">Chocolate</label>

              <input
             type="radio"
             id="strawberry" 
             name="sabor" 
             value="strawberry" 
             onChange={handleChande}/>
              <label htmlFor="strawberry">Strawberry</label>

              <p>Elige tu lenguaje favorito</p>
              <select name="lenguaje" onChange={handleChande} defaultValue="">
                <option value="">- - -</option>
                <option value="javascript">Javascript</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="c">C</option>
              </select>
                <p>Check box</p>
                <label htmlFor="terminos">Acepto</label>
                <input 
                type="checkbox" 
                name="terminos" 
                id="terminos" 
                onChange={handleCheked} />
                <br/>
                <input type="submit"/>

              
          </form>
      </>
          
        
   )
}