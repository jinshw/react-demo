import React from 'react'
import { Table, Form, Icon, Input, Button,message,Modal,Popconfirm } from 'antd'
import MyUpload from './upload.jsx'

const FormItem = Form.Item;

export default class Ajax extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: '111',
        }
        this.SERVER_URL = 'http://localhost:3000'
        this.param = {
            userid: 'mmm',
            password: 'ccc'
        }

        this.dataSource = {
            dataSource: [{
                // key: '0',
                _id: 'Edward King 0',
                userid: '32',
                password: 'London, Park Lane no. 0',
            }, {
                // key: '1',
                _id: 'Edward King 1',
                userid: '32',
                password: 'London, Park Lane no. 1',
            }],
            count: 1,
        }

        this.columns = [
        // {
        //     title: 'key',
        //     dataIndex: '_id',
        //     width: '30%',
        //     render: (text, record, index) => (
        //         <div> {text} </div>
        //     ),
        // }, 
        {
            title: '用户ID',
            dataIndex: 'userid',
        }, {
            title: '密码',
            dataIndex: 'password',
        }, {
            title: '操作',
            dataIndex: 'operation',
            render: (text, record, index) => {
                console.log(".....operation.....")
                console.log(text, record, index)
                var userid = record.userid
                return (
                   <div>
                       <Popconfirm title="确定删除该条记录?"  onConfirm={this.delete.bind(this,record.userid)}   okText="确定" cancelText="取消">
                        <Button>删除</Button>
                       </Popconfirm>
                   </div>
                );
            },
        }];
    }


    getAjax = () => {
        // $.ajax({
        // 	url:"http://localhost:3000/api/desc",
        // 	data:{},
        // 	dataType:"json",
        // 	type:"get",
        // 	success:function(data){
        // 		console.log(data)
        //         // this.setState({
        //         //     show:'777'
        //         // })
        // 	}
        // }).bind(this)



        fetch(this.SERVER_URL + '/ajax/test')
            .then((res) => {
                console.log(res);
                // console.log(res.json());
                //检查响应文本
                res.json().then(function (data) {
                    console.log(data);
                });
                this.setState({
                    show: "5555"
                })

            })
            .catch((e) => {
                console.log('catch...')
                console.log(e.message)
            })
    }

    insert = () => {
        var that = this
        var uid = document.getElementById("uid").value
        var pwd = document.getElementById("pwd").value
        fetch(this.SERVER_URL + '/user/insert', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            body: "userid=" + uid + "&password=" + pwd
        }).then((res) => {
            //检查响应文本
            res.json().then(function (data) {
                console.log(data);
                message.success("新增成功")
            });
            that.getByConditions()

        }).catch((e) => {
            console.log(e.message)
        })
    }

    delete = (id) => {
        var that = this


        fetch(this.SERVER_URL + '/user/delete', {
            method: "POST",
             headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            body: "userid=" + id 
        }).then((res) => {
            console.log("delete start.....")
            res.json().then(function (data) {
                console.log(data);
                message.success("删除成功")
                that.getByConditions()
            });
        }).catch((e) => {
            console.log(e.message)
        })
    }

    update = () => {
        var that = this
        fetch(this.SERVER_URL + '/user/update', {
            method: "POST"
        }).then((res) => {
            console.log("update start.....")
            res.json().then(function (data) {
                console.log(data);
                message.success("更新成功")
            });
        }).catch((e) => {
            console.log(e.message)
        })
    }

    findByIdAndUpdate = () => {
        var that = this
        fetch(this.SERVER_URL + '/user/findByIdAndUpdate', { method: "POST" }).then((res) => {
            console.log("findByIdAndUpdate start....")
            res.json().then(function (data) {
                console.log(data)
                that.setState({
                    show: JSON.stringify(data)
                })
            }).catch((e) => {
                console.log(e.message)
            })
        })
    }

    getByConditions = () => {
        var that = this
        fetch(this.SERVER_URL + '/user/getByConditions', { method: "POST" }).then((res) => {
            console.log("getByConditions start....")
            res.json().then(function (data) {
                that.dataSource.dataSource = data

                that.setState({
                    // show: JSON.stringify(data)
                })
            }).catch((e) => {
                console.log(e.message)
            })
        })
    }

    changeVal = () => {

    }


    render() {
        var _show = this.state.show

        const { dataSource } = this.dataSource;
        const columns = this.columns;

        return (
            <div>
                <div>
                    <h2>MongoDB 操作</h2>
                    <Button onClick={this.insert} >增加</Button>
                    <Button onClick={this.update} >修改</Button>
                    <Button onClick={this.delete} >删除</Button>
                    <Button onClick={this.findByIdAndUpdate} >查询一条数据</Button>
                    <Button onClick={this.getByConditions} >查询多条数据</Button>
                    <div>
                        {this.state.show}
                    </div>
                </div>
                <div>
                    <Form layout="inline" onSubmit={this.insert} >
                        <FormItem>
                            <Input id="uid" prefix={<Icon type="user" style={{ fontSize: 13 }} />} defaultValue={this.param.userid} placeholder="Username" onChange={this.changeVal} />
                        </FormItem>
                        <FormItem>
                            <Input id="pwd" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} defaultValue={this.param.password} type="password" placeholder="Password" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit">添加</Button>
                        </FormItem>
                    </Form>


                </div>

                <hr style={{margin:"20px 0"}} />
                {/*<div style= {{margin:"100px"}} >
                    <MyUpload></MyUpload>
                </div>*/}

                <div>
                    <Table bordered dataSource={dataSource} columns={columns} />
                </div>
                
            </div>

        )
    }

}