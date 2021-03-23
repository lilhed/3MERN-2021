    import './addTodo.css';

function AddTodo() {
    return (
        <div className="addTodo">
            <p>Ajout de todo :</p>
            <form>
                <label for="title">Titre : </label>
                <input type="text" name="title"></input>

                <label for="description">Description : </label>
                <input type="text" name="description"></input>

                <label for="priority">Priorité : </label>
                <input type="title" name="priority"></input>

                <label htmlFor="done">Fait : </label>
                <input type="checkbox" name="done"></input>

                <label htmlFor="creation">Création : </label>
                <input type="date" name="creation"></input>

                <label htmlFor="deadline">Rendu : </label>
                <input type="date" name="deadline"></input>

                <input type="submit" value="Ajouter"/>
            </form>
        </div>
    );
}

export default AddTodo;