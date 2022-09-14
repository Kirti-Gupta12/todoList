import './App.css';
import Header from "./MyComponents/Header";
import AddTodo from "./MyComponents/AddTodo";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';

function App() {
  //useeffect hook use krke reloading wali or jo saari items add nahi ho rhi thi vo wali dikkat resolve krenge
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title) => {
    let Sno;
    if (todos.length === 0) {
      Sno = 0;
    }
    else {
      Sno = todos[todos.length - 1].Sno + 1;
    }

    const myTodo = {
      Sno: Sno,
      title: title,
    }

    setTodos([...todos, myTodo]);

  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  let adding = {

    backgroundColor: '#212529',
    width: ' 95%',
    borderRadius: '45px',
  }

  return (
    <>

      <Header title="MyTODOs-LIST" />


      <div className='container' style={adding}>

        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />

      </div>
      <Footer />
    </>


  );



}

export default App;
