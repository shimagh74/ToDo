import React from "react";
import ListShow from "./ListShow";
const uuidv1 = require('uuid/v1')

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      todoList: [],
      showList: "All"
    };
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todoList: [{
        text: this.state.text,
        done: false,
        id: uuidv1()
      },

      ...this.state.todoList
      ],
      text: ""
    });
  };


  handleSearch = e => {
    let value = e.target.value;
    this.setState.text = value;
    console.log(this.state.text)
    // this.setState(state => ({
    //     searchList :  state.todoList.filter((todo) => {
    //         if (todo.text.includes(e.target.value))
    //             return true;
    //         return false;
    //     })
    // }));
  };

  onDone = index => {
    this.setState(state => ({
      todoList: state.todoList.map((todo, indexTodo) => {
        if (indexTodo === index) {
          todo.done = !todo.done;
          console.log(this.state.todoList);
        }
        return todo;
      })
    }));
  };

  render() {
    let newTodo = [];
    if (this.state.showList === "All") newTodo = this.state.todoList;
    else if (this.state.showList === "Done")
      newTodo = this.state.todoList.filter(todo => todo.done);
    else newTodo = this.state.todoList.filter(todo => !todo.done);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="App col-4">
              <form onSubmit={this.handleSubmit}>
                <input class="form-control" value={this.state.text} onChange={this.handleChange} placeholder="وارد کردن تکلیف جدید"></input>
                <button class="btn btn-success" type="submit">TodoAdd</button>
              </form>
              
              </div>
              

              <div className="col-4">
              <button class="btn btn-primary" onClick={() => this.setState({ showList: "All" })}>همه</button>{" "}
              <button class="btn btn-primary" onClick={() => this.setState({ showList: "Done" })}>انجام شده</button>{" "}
              <button class="btn btn-primary" onClick={() => this.setState({ showList: "unDone" })}>انجام نشده</button>
              {/* .filter((todo, index)=>(

if (!this.state.text)
  return todo;

if (this.state.text){
  if(this.state.text==todo){
    return todo;
  }
}

)) */}
              {newTodo.map((todo, index) => (
                <ListShow
                  key={index}
                  todo={todo}
                  handleDone={() => this.onDone(index)}
                />
              ))}
            
            </div>
            <div className="col-4">
              <input class="form-control" value={this.state.todo} onChange={this.handleSearch} type="text" placeholder="...جستجو" ></input>

              </div>
          </div>
        </div>

      </>
    );
  }
}

export default TodoForm;
