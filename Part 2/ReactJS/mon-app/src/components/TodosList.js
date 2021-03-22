import './TodosList.css';

function TodosList(props) {
    return (
        <tr>
          <td>
            <ul>
              <li>Titre : {props.title}</li>
              <li>Descrition : {props.desscripition}</li>
              <li>Priorité : {props.priority}</li>
            </ul>
          </td>
        </tr>

    );
  }
  
  export default TodosList;
  