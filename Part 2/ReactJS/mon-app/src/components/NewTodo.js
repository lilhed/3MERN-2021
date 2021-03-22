import './NewTodo.css';

function NewTodo() {
    return (
      <div className="newTodo">
          <form>
              <label for="title">Titre : </label>
              <input type="text" name="title"></input>
              <label for="description">Description : </label>
              <input type="text" name="description"></input>
              <label for="priority">Priority : </label>
              <input type="title" name="priority"></input>
              <input type="submit" value="Submit"/>
          </form>
      </div>
    );
  }
  
  export default NewTodo;