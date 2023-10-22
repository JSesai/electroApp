import Saludar from "./components/Saludar"

function App() {
  const nombre= 'miguel angel'
  return (
  
    <>
      <h1>Probando un componente</h1>
      <Saludar nombre={nombre}/>
    </>
  )
}

export default App
