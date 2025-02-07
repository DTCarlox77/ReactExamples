import TasksForm from "./TasksForm"
import TasksList from "./TasksList"
import { useEffect, useReducer } from "react"

const tasks = [];

const initialState = tasks;

const todoReducer = (state = [], action = {}) => {
  switch (action.type) {
    case 'Add Todo':
      return [...state, action.payload]

    case 'Remove Todo':
      return state.filter( todo => todo.id !== action.payload );
  
    default:
      return state;
  }
}

const init = () => {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

const Tasks = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(todos) || []);
  }, [todos])

  const onNewTodo = (todo) => {
    const action = {
      type: 'Add Todo',
      payload: todo
    }
    dispatch(action);
  }

  const onDeleteTodo = (id) => {
    const action = {
      type: 'Remove Todo',
      payload: id
    }
    dispatch(action);
  }

  return (
    <>
      <div className="row mt-1 p-4">
        
        <div className="col-7">
          <h2>Lista de tareas</h2>
          <hr />
          <TasksList tasks={ todos } onDelete={ onDeleteTodo } />

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