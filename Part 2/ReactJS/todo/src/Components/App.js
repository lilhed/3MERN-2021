import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <TodoList/>
        </Route>
        <Route path='/create'>
          <CreateTodo/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
