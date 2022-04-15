import { useState } from "react"
import TodoListContext from "./TodoListContext";

const TodoListProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const { Provider } = TodoListContext;
  const { children } = props;
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deletTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  const value = {
    tasks,
    addTask: addTask,
    deletTask: deletTask,
  }
  return (
    <Provider value={ value }>
      { children }
    </Provider>
  )
}

export default TodoListProvider;
