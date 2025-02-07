import PropTypes from "prop-types";
import Task from "./Task";

const TasksList = ({ tasks = [], onDelete, onToggle }) => {
  return (
    <>
      <ul className="list-group">
        {
          tasks.map((task) => <Task key={ task.id } id={ task.id } description={ task.description } active={ task.done }
          onDelete={ onDelete }
          onToggle={ onToggle }
          />)
        }
      </ul>
    </>
  );
};

TasksList.propTypes = {
  tasks : PropTypes.array.isRequired,
  onDelete : PropTypes.any,
  onToggle : PropTypes.any
}

export default TasksList;
