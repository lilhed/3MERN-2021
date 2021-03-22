import './App.css';
import ShowList from './components/showList';
import AddList from './components/addList';

function App() {
    return (
        <div>
            <header>
                <h1>Listes & Todos</h1>
            </header>
            <div>
                <center>
                    <table>
                        <center>
                            <h3>Mes listes : </h3>
                            <ShowList title="Liste 1" description="Voici ma première liste" priority="3" />
                            <ShowList title="Liste 2" description="Voici ma seconde liste" priority="1"/>
                        </center>
                    </table>
                </center>
            </div>
            <center>
                <AddList />
            </center>

        </div>
    );
}

export default App;