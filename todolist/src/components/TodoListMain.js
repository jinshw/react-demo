
import React from 'react'
import TodoListItem from './TodoListItem.js'

class TodoListMain extends React.Component {


    render() {
        return (
            <ul className="todo-list">
                {
                    this.props.todos.map((todo, index) => {
                        return <TodoListItem key={index} {...todo} index={index} {...this.props} />
                    })
                }
            </ul>
        )
    }
}

export default TodoListMain;