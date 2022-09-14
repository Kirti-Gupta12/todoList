import React from 'react';
import { useState } from 'react';

export const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState("");

    const submit = (e) => {
        e.preventDefault();  //Page reload nahi hoga isse


        if (!title) {
            alert('ENTER A VALID TASK!');
        }
        else {
            addTodo(title);
            setTitle("");
        }
    }

    let adding = {
        // innerWidth:'10px',
        maxWidth : '50%'

    }


    return (
        <div className='container mt-5 pt-5' style={adding}>
            <form onSubmit={submit}>
                <div className="mb-3">

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder={"Add a Task"} aria-label="Recipient's username" aria-describedby="button-addon2" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" />
                        <button className="btn btn-outline-light" type="submit" id="button-addon2"><span role="img" aria-label="add">➕</span></button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default AddTodo