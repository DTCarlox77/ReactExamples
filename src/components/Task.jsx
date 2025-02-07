import PropTypes from "prop-types";

const Task = ({ id, description, onDelete, onToggle, active }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between"
        style={{ backgroundColor : (active) ? 'lightgreen' : 'white' }}
      >
        <span className="align-self-center"
          onClick={ () => onToggle(id) }
        >{ description }</span>
        <button
          onClick={ () => {
            onDelete(id)
          } }
        >Eliminar</button>
      </li>
    </>
  );
};

Task.propTypes = {
  id: PropTypes.number,
  description : PropTypes.string,
  onDelete: PropTypes.any,
  onToggle : PropTypes.any,
  active: PropTypes.bool
}

export default Task;
