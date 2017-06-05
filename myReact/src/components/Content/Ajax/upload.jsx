import React, { Component } from 'react'
import { Table, Form, Icon, Input, Button, message, Modal, Popconfirm, Upload } from 'antd'
const FormItem = Form.Item;
const props = {
    name: 'file',
    action: 'http://localhost:3000/user/uploadFile',
    data:{ method:'post' },
   
    onChange(info) {

    },
};

export default class MyUpload extends Component {
    constructor(props) {
        super(props)

    }



    render() {
        return (
            <Upload {...props}>
                <Button>
                    <Icon type="upload" /> Click to Upload
            </Button>
            </Upload>
        )

    }
}


