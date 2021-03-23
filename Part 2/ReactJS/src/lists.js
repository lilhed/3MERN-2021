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
                <h2 className="listTitle">{list.title}</h2>
                <p className="listDesc">{list.description}</p>
                <h3 className="tasksTitle">T&acirc;ches</h3>
                <div className="listTasks">
                    {list.tasks
                        .sort((tA, tB) => {
                            return tA.priority === tB.priority
                                ? (tA.title.localeCompare(tB.title))
                                : (tA.priority > tB.priority ? 1 : -1)
                        })
                        .map((task, i) => {
                        return (<Task key={i} task={task} />);
                    })}
                </div>
            </div>
        );
    }
}

class Task extends React.Component {
    makeTaskDone() {
        const params = {
            method: 'PUT',
            headers: { Accept: 'application/json' },
            body: JSON.stringify({a: 1, b: 'Textual content'})};

        fetch('http://localhost:1234/update/todo/', params)
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
        const task = this.props.task;

        return (
            <div className={`task priority${task.priority} ${task.done ? "done" : "not_done"}`}>
                <div className="taskCheck">
                    <input type="checkbox" onChange={this.makeTaskDone} checked={task.done}/>
                </div>

                <div className="taskContent">
                    <div className="taskHead">
                        <h4 className="taskTitle">{task.title}</h4>
                        <p className="taskCreation">{task.creation}</p>
                    </div>

                    <p className="taskDesc">{task.description}</p>

                    {task.deadline ? (
                        <p className="taskDeadline">&rarr; {task.deadline}</p>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default ListContainer;