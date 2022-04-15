import { useContext, useState } from "react";
import TodoListContext from "../context/TodoListContext";

function AddTask() {
  const { addTask } = useContext(TodoListContext);
  const [input, setInput] = useState('');

  const handleChange = ({ target }) => {
    setInput(target.value);
  }

  const handleClick = () => {
    const task = {
      id: +Math.random().toString().substring(2, 17),
      task: input,
    }
    addTask(task);
    setInput('');
  }

  return (
    <div>
      <input
        value={ input }
        onChange={ handleChange }
      />
      <button
        onClick={ handleClick }
      >
        Adicionar
      </button>
    </div>
  )
}

export default AddTask;
