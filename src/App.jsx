import "./App.css";
import shortid from "shortid";
import React, { Component } from "react";
import DropDown from "./Dropdoun";
import ColorPiker from "./colorPiker";
import Todolist from "./Todolist/Todolist";
import TodoEditor from "./TodoEditor/TodoEditor";
import Filter from "./filter/filter";

const colorPikerOptions = [
  { lebel: "red", color: "#ff0000" },
  { lebel: "aqua", color: "#00ffff" },
  { lebel: "blue", color: "#0000ff" },
  { lebel: "chartreuse", color: "#7fff00" },
  { lebel: "darkorange", color: "#ff8c00" },
];

class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "Вивчити JavaScript ", completed: false },
      { id: "id-2", text: "Вивчити React", completed: false },
      { id: "id-3", text: "Вивчити Redux", completed: false },
    ],
    name: "",
    filter: "",
  };
  addTodo = (text) => {
    console.log(text);
    const Todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({ todos: [Todo, ...todos] }));
  };

  Delite = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  hendleInpunGhange = (event) => {
    console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  };

  TogleComplited = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  ChangeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const { todos, filter } = this.state;
    const TotalTodoCoutnt = todos.length;
    const complitedTodos = todos.reduce(
      (acc, todos) => (todos.completed ? acc + 1 : acc),
      0
    );
    const NomrmalizeFilter = filter.toLowerCase();
    const VilibleTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(NomrmalizeFilter)
    );
    return (
      <>
        <DropDown />
        <ColorPiker opsions={colorPikerOptions} />
        <p> Всього заміток:{TotalTodoCoutnt}</p>
        <p>Виконано:{complitedTodos}</p>
        <TodoEditor OnSabmit={this.addTodo} />
        <Filter value={filter} onChange={this.ChangeFilter} />
        <Todolist
          todos={VilibleTodos}
          OnDeliteTodo={this.Delite}
          OnFilter={this.filter}
          onTogleComplited={this.TogleComplited}
        />
      </>
    );
  }
}

export default App;
