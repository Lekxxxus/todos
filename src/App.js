import React, { useState } from "react";
import "./App.css";
import "./style.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(false);
  const [editTextInput, setEditTextInput] = useState("");
  const [editID, setEditID] = useState(0);

  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    setTodos([...todos, { text: inputText, id: Math.random() * 100 }]);
    console.log(todos);
    setInputText("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  const handleEditTodo = (id) => {
    setEditTodo(true);
    setEditID(id);
  };

  const handleEditTextInput = (e) => {
    setEditTextInput(e.target.value);
  };

  const handleEditSubmit = () => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === editID) {
        todo.text = editTextInput;
      }
      return todo;
    });
    setEditTextInput("");
    setTodos(updateTodo);
    setEditTodo(false);
  };

  return (
    <div className="App">
      <h1 className="h1-tag">Alex Todolist</h1>
      <img src="" alt="" />

      <input
        className
        value={inputText}
        onChange={handleInputText}
        type="text"
      />
      <input className="input-tag" onClick={handleSubmit} type="submit" />
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div>
              <ul className="ul-tag">
                <li>{todo.text}</li>
                <button
                  className="button-tag1"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="button-tag2"
                  onClick={() => handleEditTodo(todo.id)}
                >
                  Edit
                </button>
              </ul>
            </div>
            {editTodo ? (
              <div className="div1">
                <input
                  className="input-tag2"
                  value={editTextInput}
                  onChange={handleEditTextInput}
                  type="text"
                />
                <button onClick={handleEditSubmit}>Confirm</button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
export default App;
