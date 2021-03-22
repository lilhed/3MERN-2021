import './showList.css';

function ShowList(props) {
    return (
        <tr>
            <td>
                <ul>
                    <li>Titre : {props.title}</li>
                    <li>Description : {props.description}</li>
                    <li>Priorité : {props.priority}</li>
                </ul>
            </td>
        </tr>

    );
}

export default ShowList;