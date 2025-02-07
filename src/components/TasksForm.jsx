import { useState } from "react";

const TasksForm = ({ addTodo }) => {

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(event.target.task?.value);
    const description = e.target.task?.value;

    if (description.length < 1) return;

    const newTask = {
      id: new Date().getTime(),
      done: false,
      description: description
    }
    e.target.task.value = '';
    addTodo(newTask);
  }
  return (
    <>
      <form className="d-flex justify-content-center gap-2" onSubmit={ onFormSubmit }>
        <input name="task" type="text" className="form-control"
          placeholder="Descripción de la tarea"
        />
        <button>Agregar</button>
      </form>
    </>
  );
};

export default TasksForm;
