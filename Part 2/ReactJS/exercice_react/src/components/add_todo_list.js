
function AddTodoList(props) {
    return (
        <div className="AddTodoList">
            <h3>Add a new To Do Task</h3>
            <form>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title"/>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description"/>
                    <label htmlFor="priority">Priority: </label>
                    <input type="text" name="priority"/>
                    <label htmlFor="done">Done: </label>
                    <input type="text" name="done"/>
                    <label htmlFor="creation">Creation: </label>
                    <input type="text" name="creation"/>
                    <label htmlFor="deadline">Deadline: </label>
                    <input type="text" name="deadline"/><br/>
                    <input className="button" type="submit" value="Add this To Do Task"/>
            </form>

        </div>
    );
}

export default AddTodoList;