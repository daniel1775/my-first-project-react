import { useState } from 'react';
import './App.css';
import Box from "./views/Box";

function App() {
  const [ resultado, setResultado ] = useState(0);
  const suma = (a, b) => setResultado(a+b);

  return (
    <div>
      <Box suma={suma}></Box>
      {resultado!==0 ? <p>El resultado es {resultado}</p> : undefined}
    </div>
  );
}

export default App;
