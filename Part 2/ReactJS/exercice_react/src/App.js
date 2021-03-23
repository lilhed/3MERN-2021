import logo from './logo.svg';
import './App.css';
import DisplayTodoList from "./components/display_todo_list";
import AddTodoList from "./components/add_todo_list";

function App() {
  return (
    <div className="App">
        <header>
            <h1>React Exercise</h1>
        </header>

        <div>
            <h2>List of To Do Tasks</h2>
            <div className="All-Todos">
                <DisplayTodoList/>
            </div>
            <hr/>
            <AddTodoList/>

        </div>
    </div>
  );
}

export default App;
