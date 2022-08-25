const Propiedades = (props) => {
  return (
 <>
  <h2>{props.porDefecto}</h2>
  <ul>
    <li>{props.cadena}</li>
    <li>{props.num}</li>
    <li>{props.bool ? "verdadero" : "falso"}</li>
    <li>{props.array.join(', ')}</li>
    <li>{props.obj.name + " - " + props.obj.age}</li>
    <li>{ props.function + props.obj.name }</li>
    <li>{props.reactElemant}</li>
    <li>{props.componente}</li>
  </ul>
 </> 
  );
}

Propiedades.defaultProps = {
  porDefecto: 'las props son opcionales'
}
export default Propiedades;