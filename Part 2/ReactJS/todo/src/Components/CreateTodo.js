import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


export default function CreateTodo() {

  const [todo, setTodo] = useState({
    title: null,
    description: null,
    priority: 0,
    done: false,
    creation: null,
    deadline: null
  });


  const sendTodo = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    let newTodo = todo;
    newTodo.creation = Date.now();

    try {
      const result = await axios.post('http://localhost:9000/todos', newTodo, config);

      result && window.alert('Successfully created todo: "' + result.data.title + '"');
      
    } catch (error) { console.log(error?.response); }
  };


  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', width: '100vw', maxWidth: '100%'}}>
      <div style={{position: 'absolute', top: 20, right: 20}}>
        <Link style={{color: 'inherit', textDecoration: 'none', backgroundColor: '#ddd', borderRadius: 6, padding: '6px 12px', fontWeight: '600'}} to='/'>Todo List</Link>
      </div>

      <h1 style={{height: '100px'}}>Create todo</h1>

      <div style={{flexGrow: 1, width: '33%'}}>
        <div style={{backgroundColor: '#ddd', display: 'flex', flexDirection: 'column', padding: 20, borderRadius:12}}>

          <h3>Your Todo title</h3>
          <input placeholder='title' onBlur={e => setTodo({...todo, title: e.target.value})}/>

          <h3>Give it a useful description</h3>
          <input placeholder='description' onBlur={e => setTodo({...todo, description: e.target.value})}/>

          <h3>Add a priority (default: 0)</h3>
          <input placeholder='priority' onBlur={e => setTodo({...todo, priority: parseInt(e.target.value)})}/>

          <h3>Define a deadline for your task</h3>
          <input placeholder='deadline' onBlur={e => setTodo({...todo, deadline: e.target.value})}/>

          <button onClick={sendTodo} style={{padding: 12, margin: '20px auto 0', border: 0, width: '33%', backgroundColor: 'limegreen', cursor: 'pointer'}}>ADD TODO</button>

        </div>
      </div>
    </div>
  );
}