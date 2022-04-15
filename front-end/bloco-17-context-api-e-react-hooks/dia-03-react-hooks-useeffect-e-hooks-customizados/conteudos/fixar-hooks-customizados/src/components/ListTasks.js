import { useContext } from "react";
import TodoListContext from "../context/TodoListContext";

const ListTasks = () => {
  const { tasks, deletTask } = useContext(TodoListContext);

  return (
    <ul>
      { tasks.map(({ id, task }) =>
      <li key={ id }>
        { task }
        <button
          onClick={ () => deletTask(id) }
        >
          Excluir
        </button>
      </li>
      ) }
    </ul>
  )
};

export default ListTasks;
