import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  let pStyle = {
    // color : 'white',
    textTransform: 'uppercase',
    marginRight: '10px',
    paddingTop: '13px'
  }

  let hrstyle = {
    color: 'white',
  }

  return (
    <>
      <div className='container'>

        <div className="input-group mb-3">
          <div className="input-group-text">
            <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
          </div>
          <div type="text" className="form-control d-flex" aria-label="Text input with checkbox">
            <p style={pStyle}>{todo.title}</p>
            <button className='btn btn-sm' onClick={() => { onDelete(todo) }}><span role='img' aria-label='delete'>❌</span></button>
          </div>
        </div>

        {/* <p style={pStyle}>{todo.title}</p>
        <button className='btn btn-sm btn-danger' onClick={() => { onDelete(todo) }}>Delete</button> */}
      </div>

      <hr style={hrstyle} />
    </>

  )
}
