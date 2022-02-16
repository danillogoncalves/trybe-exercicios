// import logo from './logo.svg';
import './App.css';
import Task from './Task';

const taskList = ['Lava louça', 'Compra um bala', 'Lavar o quintal', 'Ir ao centro'];

function App() {
  return (
    // <ul>
      // {/* {taskList.map((task) => Task(task))} */}
      <Task list={taskList} />
    // </ul>
  );
}

export default App;
