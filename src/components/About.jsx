import { useReducer, useState } from 'react';
import { reducerTareas, initialState } from '../context/reducers';

export default function About() {
  const [tareas, dispatch] = useReducer(reducerTareas, initialState);
  const [mensaje, setMensaje] = useState('');


  return (
    <div className="About">
      <h1>Explicando el hook useReducer</h1>

      <div>
        <p><strong>Crear nueva tarea</strong></p>
        <input onChange={(ev) => setMensaje(ev.target.value)}></input>
        </div>
        <br/>
        <button onClick={() =>
            dispatch({type: 'ADD', payload: {id: tareas.length + 1, mensaje}})
        }>Crear tarea</button>
        <button onClick={() => dispatch({type: 'DELETE'})}>Borrar tareas</button>

      <ul>
        {tareas.map(tarea => {
          return <li key={tarea.id}>{tarea.mensaje}</li>
        })}
      </ul>
    </div>
  );
}