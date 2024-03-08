import TodoList from "./TodoList.js";

function App() {
  return (
    <div>
    <TodoList/>
    <input type="text"/>
    <button>タスクを追加</button>
    <button>完了したタスクの削除</button>
    <div>残りのタスク：０</div>
    </div>
  );
}

export default App;
