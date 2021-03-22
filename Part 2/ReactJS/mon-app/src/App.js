import './App.css';
import TodosList from './components/TodosList';
import NewTodo from './components/NewTodo';

function App() {
  return (
    <div>
      <header>
        <h1>List from Database</h1>
      </header>
      <h1>Hello</h1>
      <p>Hello new list</p>
      <div>
        <table>
          <TodosList title="list1" desscripition="lknsdf" priority="2" />
          <TodosList title="list2" desscripition="lknsdf" priority="1"/>
        </table>
      </div>
      <NewTodo />

    </div>
  );
}

export default App;
