import productos from './productos';


const Item = ({props}) => {
  return (
    <div>
        <h5>{props.nombre}</h5>
        <li>Precio: {props.precio}</li>
        <li>Categoría {props.categoria}</li>
        <hr></hr>
    </div>
  );
}

export default Item;