import { useState } from 'react';
import './App.scss';
// import ColorBox from './components/color-box';
import TodoList from './components/todo-list';

function App() {
  const initTodoList = [
    { id: 1, title: 'I love Easy Frontend! 😍 ' },
    { id: 2, title: 'We love Easy Frontend! 🥰 ' },
    { id: 3, title: 'They love Easy Frontend! 🚀 ' },
    ];
  const [todoList, setTodoList] = useState(initTodoList);
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if(index < 0) return ;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
    <div className="app">
      <h1>React Hooks - TodoList</h1>
        <TodoList  todos={todoList} onTodoClick ={handleTodoClick}/>
    </div>
  );
}

export default App;
