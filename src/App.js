import { useState } from "react";
import TodoList from "./TodoList.js";

function App() {
  const [todos, setTodos] = useState([
    { id:1, name:"Todo1", completed:false }
  ]);
  return (
    <div>
    <TodoList todos={todos}/>
    <input type="text"/>
    <button>タスクを追加</button>
    <button>完了したタスクの削除</button>
    <div>残りのタスク：０</div>
    </div>
  );
}

export default App;
