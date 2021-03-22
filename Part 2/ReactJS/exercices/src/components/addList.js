import './addList.css';

function AddList() {
    return (
        <div className="addList">
            <form>
                <label for="title">Titre : </label>
                <input type="text" name="title"></input>
                <label for="description">Description : </label>
                <input type="text" name="description"></input>
                <label for="priority">Priorité : </label>
                <input type="title" name="priority"></input>
                <input type="submit" value="Ajouter"/>
            </form>
        </div>
    );
}

export default AddList;