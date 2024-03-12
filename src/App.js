import { useState , useRef } from "react";
import TodoList from "./TodoList.js";

function App() {
  const [todos, setTodos] = useState([
    { id:1, name:"Todo1", completed:false }
  ]);

const todoNameRef = useRef();

const handleAddTodo=() => {
  // タスクを追加する
  const name = todoNameRef.current.value;
  setTodos((prevTodos) => {
    return [...prevTodos, {id: "ここに何を入れる", name : name , completed: false }]
  });
  todoNameRef.current.value = null;
};

const toggleTodo = (id) =>{
    const newTodos =  [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
};

  return (
    <div>
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input type="text" ref={todoNameRef}/>
    <button onClick={handleAddTodo}>タスクを追加</button>
    <button>完了したタスクの削除</button>
    <div>残りのタスク：{todos.filter((todo)=>!todo.completed).length}</div>
    </div>
  );
}

export default App;
