import PropTypes from "prop-types";

const Task = ({ id, description, onDelete }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{ description }</span>
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
  onDelete: PropTypes.any
}

export default Task;
