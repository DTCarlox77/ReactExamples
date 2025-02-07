import TasksForm from "./TasksForm"
import TasksList from "./TasksList"
import { useTodo } from "../hooks/useTodo"


const Tasks = () => {

  const { todos, onDeleteTodo, onNewTodo, onToggleTodo } = useTodo();

  return (
    <>
      <div className="row mt-1 p-4">
        
        <div className="col-7">
          <h2>Lista de tareas</h2>
          <hr />
          <TasksList tasks={ todos } onDelete={ onDeleteTodo } onToggle={ onToggleTodo } />

        </div>
        <div className="col-5">
          <h2>Agrega tareas</h2>
          <hr />
          <TasksForm addTodo = { onNewTodo } />
        </div>
      </div>
    </>
  )
}

export default Tasks