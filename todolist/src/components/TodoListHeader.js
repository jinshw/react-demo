
'use strict';
import React from "react";

class TodoListHeader extends React.Component {

     // 绑定键盘回车事件，添加新任务
     handlerKeyUp(event){
         if(event.keyCode === 13){
            let txt = event.target.value
            if(!txt)return false;

            let newItemNode = {
                text:txt,
                isDone:false
            }
            event.target.value = ''
            this.props.addTodo(newItemNode)
         }
     }

    render(){
        return (
            <div className="panel-header">
                <input onKeyUp={this.handlerKeyUp.bind(this)} type="text" placeholder="what's your task ?"/>
            </div>
        )
    }
}

export default TodoListHeader;
