import React, { Component } from "react";
import "./Todolist.css";

const Todolist = ({ todos, OnDeliteTodo, onTogleComplited }) => {
  return (
    <ul className="list__Todo">
      {todos.map(({ id, text, completed }) => {
        return (
          <li className="todo_item" key={id}>
            <input
              type="checkbox"
              className="Todo__checkbox"
              checked={completed}
              onChange={() => onTogleComplited(id)}
            />
            <p className="Todo__text">{text}</p>
            <button className="btn" onClick={() => OnDeliteTodo(id)}>
              Видалити
            </button>
          </li>
        );
      })}  
    </ul>
  );
};
export default Todolist;

