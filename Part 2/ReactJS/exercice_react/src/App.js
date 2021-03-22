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
                <DisplayTodoList
                    title="Pedro's ToDolist"
                    description="It is the To Do List of Pedro"
                    priority="23"
                    done="false"
                    creation="22/06"
                    deadline="23/06"
                />
                <DisplayTodoList/>
            </div>
            <hr/>
            <AddTodoList/>

        </div>
    </div>
  );
}

export default App;
