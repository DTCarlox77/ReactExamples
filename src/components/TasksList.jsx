import PropTypes from "prop-types";
import Task from "./Task";

const TasksList = ({ tasks = [], onDelete }) => {
  return (
    <>
      <ul className="list-group">
        {
          tasks.map((task) => <Task key={ task.id } id={ task.id } description={ task.description } onDelete={ onDelete } />)
        }
      </ul>
    </>
  );
};

TasksList.propTypes = {
  tasks : PropTypes.array.isRequired,
  onDelete : PropTypes.any
}

export default TasksList;
