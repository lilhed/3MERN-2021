
function DisplayTodoList(props) {
    return (
        <div className="TodoList">
            <h3>Title: {props.title}</h3>
            <p><span className="category">Description:</span> {props.description}</p>
            <p><span className="category">Priority:</span> {props.priority}</p>
            <p><span className="category">Done:</span>     {props.done}</p>
            <p><span className="category">Creation:</span> {props.creation}</p>
            <p><span className="category">Deadline:</span> {props.deadline}</p>
        </div>
    );
}

export default DisplayTodoList;