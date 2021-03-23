import './addList.css';

function AddList() {
    return (
        <div className="addList">
            <p>Ajout de liste :</p>
            <form>
                <label for="title">Titre : </label>
                <input type="text" name="title"></input>
                <label for="description">Description : </label>
                <input type="text" name="description"></input>
                <input type="submit" value="Ajouter"/>
            </form>
        </div>
    );
}

export default AddList;