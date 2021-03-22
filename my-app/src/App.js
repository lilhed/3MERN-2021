import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  const [todos, setTodos] = React.useState([
    { text: "first thing todo" },
    { text: "second thing todo" },
    { text: "third thiing to do" }
  ]);

  return (
    <div className="app">
      <div className="container">
        <div className="row justify-content-center">
          <h1>To-DO List</h1>
        </div>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
      <h1> Add new  To-Do </h1>
      <form>
      <div>
        <label>
          Title:
          <input type="text" name="title" /> <br/>
        </label>

        <label>
          what to-do?:
        <input type="text" name="todo_body" />  <br/>
        </label>

        <label>
        importance:
        <input type="text" name="importance" />  <br/>
        </label>
      </div>
      <div> 
      <input type="submit" value="Submit" />
      </div>

    </form>
    </div>
    
  );
}

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};

export default App;
