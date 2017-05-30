import React from 'react';

import { notification } from 'antd';

export let withNotify = ComponsedComponent => class extends React.Component {

    constructor(props) {

        super(props);
        this.notify = this.notify.bind(this)

    }

    notify(type, message, description) {

        notification.destroy();
        notification.config({
            placement: 'topRight',
            top: 100,
            duration: 3
        });

        switch (type) {
            case 'success':
                notification.success({
                    message: message,
                    description: description
                });
                return;
            case 'error':
                notification.error({
                    message: message,
                    description: description,
                });
                return;
            case 'open':
            default:
                notification.open({
                    message: message,
                    description: description,
                });
        }

    }

    render() {
        return <ComponsedComponent notify={this.notify} {...this.props} {...this.state} />;
    }
};
