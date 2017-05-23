
'use strict';
import React from 'react'
import LocalDb from "localDb";
import TodoListHeader from "./TodoListHeader.js"
import TodoListMain from "./TodoListMain.js";
import TodoListFooter from "./TodoListFooter.js";

class App extends React.Component {
    constructor() {
        super()
        this.db = new LocalDb('React-Todos111');
        this.state = {
            todos: this.db.get("todos") || [],
            isAllChecked: false
        }
    }

    // 添加任务，是传递给Header组件的方法
    addTodo(todoItem) {
        let isAllChecked = false;
        this.state.todos.push(todoItem)
        this.allChecked()
        this.db.set('todos', this.state.todos);
    }
    deleteTodo(index){
        this.state.todos.splice(index,1)
        this.setState({todos:this.state.todos})
        this.db.set('todos', this.state.todos);
    }

    // 判断是否所有任务的状态都完成，同步底部的全选框
    allChecked() {
        let isAllChecked = false;
        if (this.state.todos.every((todo) => todo.isDone)) {
            isAllChecked = true;
        }
        this.setState({ todos: this.state.todos, isAllChecked });
    }

    // 改变任务状态，传递给TodoItem和Footer组件的方法
    changeTodoState(index, isDone, isChangeAll = false) {
        if (isChangeAll) {
            this.setState({
                todos:this.state.todos.map((todo)=>{
                    todo.isDone = isDone
                    return todo;
                }),
                isAllChecked:isDone
            })
        } else {
            this.state.todos[index].isDone = isDone;
            // this.allChecked();
            let isAllChecked = false;
            this.setState({ todos: this.state.todos, isAllChecked });
        }
        this.db.set('todos', this.state.todos);
    }

    clearDone(){
        let todos = this.state.todos.filter((todo)=>!todo.isDone)
        this.setState({
            todos:todos,
            isAllChecked:false
        })
        this.db.set('todos',todos)
    }

    render() {
        let props = {
            todoCount:this.state.todos.length||0,
            todoDoneCount:this.state.todos.filter((todo)=>todo.isDone).length||0

        }
        return (
            <div className="panel">
                <TodoListHeader addTodo={this.addTodo.bind(this)} />
                <TodoListMain todos={this.state.todos} deleteTodo={this.deleteTodo.bind(this)} changeTodoState={this.changeTodoState.bind(this)} />
                <TodoListFooter {...props} clearDone={this.clearDone.bind(this)} changeTodoState={this.changeTodoState.bind(this)} isAllChecked={this.state.isAllChecked}  />
            </div>
        )
    }
}

React.render(<App />, document.getElementById("app"))