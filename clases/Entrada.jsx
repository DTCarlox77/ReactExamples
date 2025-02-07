import PropTypes from "prop-types"
import { useState } from "react";

function Entrada({ addNewSong }) {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <form action="" method="get" onSubmit={(event) => {
      event.preventDefault();
    }}>
      <label htmlFor="entrada">Agregar canción</label>
      <input onInput={ onInputChange } type="text" id='entrada' placeholder='Nombre de la canción'/>
      <button onClick={ () => { addNewSong(inputValue) } }>Agregar</button>
    </form>
  )
}

Entrada.propTypes = {
  addNewSong : PropTypes.func
}

export default Entrada