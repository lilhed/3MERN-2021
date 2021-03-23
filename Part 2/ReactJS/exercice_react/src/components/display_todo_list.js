import React from "react";

class DisplayTodoList extends React.Component{

    constructor() {
        super();
        this.state = {
            todos: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        const params = { method: 'GET', headers: { Accept: 'application/json' } };

        fetch('http://localhost:3001/todo/', params)
            .then(results => results.json())
            .then(json => {
                this.setState({
                    todos: json,
                    isLoaded: true
                });
            })
            .catch(console.error);
    }

    render(){
        let { todos, isLoaded } = this.state;
        if (!isLoaded){return (<p>Chargement...</p>)}
        else {
            return (
                todos.map((todo, i) => {
                        return (
                            <div className="TodoList">
                                <h3>Title: {todo.title}</h3>
                                <p><span className="category">Description:</span> {todo.description}</p>
                                <p><span className="category">Priority:</span> {todo.priority}</p>
                                <p><span className="category">Done:</span>     {todo.done ? "Finished":"Not Finished"}</p>
                                <p><span className="category">Creation:</span> {todo.creation}</p>
                                <p><span className="category">Deadline:</span> {todo.deadline}</p>
                            </div>
                        );
                    })
            )
        }

    }

}

export default DisplayTodoList;