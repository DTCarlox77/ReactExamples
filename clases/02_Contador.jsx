
import { useState } from 'react';
const value = 0;

function Contador() {
  const [counter, setCounter] = useState( value );

  return (
      <div>
          <h1>{ counter }</h1>
          <button onClick={ () => setCounter((counter) => counter - 1) }>-1</button>
          <button onClick={ () => setCounter((counter) => counter + 1) }>+1</button>
          <button onClick={ () => setCounter(value) }>Reset</button>
      </div>
  )
}

export default Contador