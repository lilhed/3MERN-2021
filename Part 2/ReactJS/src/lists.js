import React from 'react';
import './lists.css';

class ListContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            lists: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        const params = { method: 'GET', headers: { Accept: 'application/json' } };

        fetch('http://localhost:1234/get/list/', params)
            .then(results => results.json())
            .then(json => {
                this.setState({
                    lists: json,
                    isLoaded: true
                });
            })
            .catch(console.error);
    }

    render() {
        let { lists, isLoaded } = this.state;

        if (!isLoaded) {
            return (<p>Chargement...</p>);
        } else if (!lists) {
            return (<p>Aucune liste trouvée.</p>);
        } else {
            return (
                <div id="listsContainer">
                    {lists.map((list, i) => {
                        return (<List key={i} list={list} />);
                    })}
                </div>
            );
        }
    }
}

class List extends React.Component {
    render() {
        const list = this.props.list;

        return (
            <div className="list">
                <h3>{list.title}</h3>
                <p>{list.description}</p>
                <table className="listTasks">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Description</th>
                            <th>Priorit&eacute;</th>
                            <th>Fait</th>
                            <th>Cr&eacute;ation</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.tasks.map((task, i) => {
                            return (<Task key={i} task={task} />);
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Task extends React.Component {
    render() {
        const task = this.props.task;

        return (
            <tr className="task">
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td className="centeredCell">{task.priority}</td>
                <td className="centeredCell">{task.done ? "Oui" : "Non"}</td>
                <td className="centeredCell">{task.creation}</td>
                <td className="centeredCell">{task.deadline}</td>
            </tr>
        );
    }
}

export default ListContainer;