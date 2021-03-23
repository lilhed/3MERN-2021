import './App.css';
import ShowList from './components/showList';
import AddList from './components/addList';
import ShowTodo from "./components/showTodo";
import AddTodo from './components/addTodo';

function App() {
    return (
        <div>
            <header>
                <h1>Listes & Todos</h1>
            </header>
            <div id="lists">
                <table>
                    <center>
                        <h3>Mes listes : </h3>
                        <ShowList title="Liste 1" description="Voici ma première liste"/>
                        <ShowList title="Liste 2" description="Voici ma seconde liste"/>
                    </center>
                    </table>
            </div>

            <div id="todos">
                <table>
                    <center>
                        <h3>Mes todos : </h3>
                        <ShowTodo title="Todo 1" description="Voici ma première todo" priority="4" done='False' creation={new Date().getDate()} deadline ={new Date().getDate() + 5}/>
                    </center>
                </table>
            </div>

            <center>
                <div id="addLists">
                    <AddList />
                </div>

                <div id="addTodos">
                    <AddTodo />
                </div>
            </center>
        </div>
    );
}

export default App;