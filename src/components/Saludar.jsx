
export default function Saludar(props) {
    const {nombre} = props;
    console.log(nombre);
  return (
    <div>
        <h2>Desde un componente</h2>
    </div>
  )
}
