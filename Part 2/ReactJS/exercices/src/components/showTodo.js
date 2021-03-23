import './showTodo.css';

function ShowTodo(props) {
    return (
        <tr>
            <td>
                <ul>
                    <li>Titre : {props.title}</li>
                    <li>Description : {props.description}</li>
                    <li>Priorité : {props.priority}</li>
                    <li>Fait : {props.done}</li>
                    <li>Création : {props.creation}</li>
                    <li>Rendu : {props.deadline}</li>
                </ul>
            </td>
        </tr>

    );
}

export default ShowTodo;