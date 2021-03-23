import './showList.css';

function ShowList(props) {
    return (
        <tr>
            <td>
                <ul>
                    <li>Titre : {props.title}</li>
                    <li>Description : {props.description}</li>
                </ul>
            </td>
        </tr>

    );
}

export default ShowList;