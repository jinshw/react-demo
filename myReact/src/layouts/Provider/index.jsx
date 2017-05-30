import React from 'react';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import { Router, browserHistory,hashHistory, Route, IndexRoute } from 'react-router';

// import createLogger from 'redux-logger';

import reducers from 'REDUCERS/index.js';

import './global.scss';

import { notification } from 'antd';

import routers from 'ROUTES/routes.jsx';

const store = createStore(reducers)

class Root extends React.Component {
    render() {
        return (
                <Provider store={store} >    
                    <Router history={hashHistory}>
                        {routers}
                    </Router>
                </Provider>
            
        );
    }
}

export default Root;
