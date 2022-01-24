import { useState } from "react";

export default function Box(props){
  const [ num1, setNum1 ] = useState(0);
  const [ num2, setNum2 ] = useState(0);

  const { suma } = props;

  const resultadoSuma = () => {
    suma(num1, num2);
  }

  return(
    <div>
      <input type="text" value={num1===0 ? "" : num1} onChange={(event) => {setNum1(parseInt(event.target.value))}}/>
      <br />
      <input type="text" value={num2===0 ? "" : num2} onChange={(event) => {setNum2(parseInt(event.target.value))}}/>
      <br />
      <button onClick={resultadoSuma}>Sumar</button>
    </div>
  );
}