import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


export default function TodoList() {

  const [todos, setTodos] = useState([]);

  useEffect(() => { getTodos(); }, []);


  const getTodos = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const result = await axios.get('http://localhost:9000/todos', config);
      setTodos(result.data || null);
      
    } catch (error) { console.log('error: ' + error?.response); }
  };


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '100vw', maxWidth: '100%'}}>
      <div style={{position: 'absolute', top: 20, right: 20}}>
        <Link style={{color: 'inherit', textDecoration: 'none', backgroundColor: '#ddd', borderRadius: 6, padding: '6px 12px', fontWeight: '600'}} to='/create'>Create Todo</Link>
      </div>

      <h1 style={{height: '100px'}}>Todo List</h1>
      {!todos ? <h4 style={{flexGrow: 1, justifyContent: 'center'}}>You do not have any todos. <Link to='/create'>Add your first one here</Link></h4> : <>
      
        {todos.map((todo, i) => 
          <div key={i} style={{backgroundColor: '#ddd', borderRadius: 6, padding: '0 20px', margin: '10px 0', width: '33%'}}>

            <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
              
              <h2 style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', paddingRight: 12}}>
                {todo.title || 'No title'}
              </h2>

              <p>Created on: <span style={{fontWeight: '600'}}>
                {new Date(todo.creation || 'No date').toDateString().slice(4)}
              </span></p>
            </div>

            <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between'}}>
              <p style={{fontWeight: '600'}}>{todo.description || 'No description'}</p>
              <p style={{fontWeight: '600'}}>Priority: {todo.priority || 'No Priority'}</p>
            </div>

          </div>
        )}

      </>}
    </div>
  );
}