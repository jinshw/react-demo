
export default class TodoListItem extends React.Component {
    // 处理任务是否完成状态
    handlerChange() {
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }
    handlerDelete(){
        this.props.deleteTodo(this.props.index)
    }
    // 鼠标移入
    handlerMouseOver(){
        React.findDOMNode(this.refs.deleteBtn).style.display = "block" 
    }

    handlerMouseOut(){
        React.findDOMNode(this.refs.deleteBtn).style.display = "none"
    }

    render() {

        let doneStyle = this.props.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
        return (
            <li onMouseOver={this.handlerMouseOver.bind(this)} onMouseOut={this.handlerMouseOut.bind(this)} >
                <input type="checkbox" checked={this.props.isDone} onChange={this.handlerChange.bind(this)} />
                <span style={doneStyle} >{this.props.text}</span>
                <button ref="deleteBtn" className="fr" onClick={this.handlerDelete.bind(this)} style={{'display': 'none'}} >删除</button>
            </li>
        )
    }
}