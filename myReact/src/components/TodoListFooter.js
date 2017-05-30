/**
 * Created by YikaJ on 15/6/16.
 */
'use strict';
import React from "react";
import {  Button  } from 'antd';
export default class TodoListFooter extends React.Component {

    // 处理全选与全不选的状态
    handlerAllState(event){
        this.props.changeTodoState(null, event.target.checked, true);
    }

    handlerClear(){
        this.props.clearDone()
    }

    render() {
        return (
            <div className="clearfix todo-footer">
                <input  checked={this.props.isAllChecked} onChange={this.handlerAllState.bind(this)} type="checkbox" className="fl" />
                <span className="fl">{this.props.todoDoneCount}已完成 / {this.props.todoCount}总数</span>
                <button className="fr" onClick={this.handlerClear.bind(this)} >清除已完成</button>
                
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                
            </div>
        )
    }
}