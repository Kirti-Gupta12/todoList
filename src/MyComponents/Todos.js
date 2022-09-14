import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem";

export const Todos = (props) => {

  let myStyle = {
    minHeight: '70vh',
    margin: '40px auto'
  }

  let h3col = {
    color: 'gray',

    fontFamily: 'monospace',
    textAlign: 'center',
  }

  return (
    <div className='container mb-3' style={myStyle}>
      {/* <h3 className='mt-3'>Todos List</h3> */}



      {props.todos.length === 0 ? <h3 style={h3col}><br /><br />You have NO tasks to DO!<br /><br />Enjoy Your Day...</h3> :

        props.todos.map((todo) => {
          return (<TodoItem todo={todo} key={todo.Sno} onDelete={props.onDelete} />
          )
        }
        )}


    </div>
  )
}

export default Todos
