import TodoListProvider from "./context/TodoListProvider";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <TodoListProvider>
      <TodoList />
    </TodoListProvider>
  );
}

export default App;
