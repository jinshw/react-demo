import React from 'react';

import { Route, IndexRoute, IndexRedirect } from 'react-router';

import { browserHistory } from 'react-router';

import Container from 'LAYOUTS/Container/index.jsx';
import Login from 'LAYOUTS/Container/Login/index.jsx';
import Button from 'COMPONENTS/Antd/Button/index.jsx'

import Ajax from 'COMPONENTS/Content/Ajax'

const Main = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('LAYOUTS/Container/Main').default)
    },'main')
}


const authRequired = (location, cb) => {
    // if (!localStorage.getItem('userData')) {
    //     browserHistory.push('/login');
    // }
}
const IconFont = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/IconFont').default)
    },'iconfont')
}

const Product = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/Product').default)
    },'product')
}

const Think = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/Product/Think').default)
    },'think')
}

const Lenovo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/Product/Lenovo').default)
    },'lenovo')
}

const ProductInfo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/Product/Lenovo/ProductInfo').default)
    },'productInfo')
}

const NotFound = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('LAYOUTS/Container/NotFound').default)
    },'notfound')
}

const Empty = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/Empty').default)
    },'empty')
}
const Redux = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/Redux').default)
    },'redux')
}

const Counter = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('COMPONENTS/Content/Redux/Counter/index.jsx').default)
    },'counter')
}


export default (
	<Route path="/" component={Container} >
	    <IndexRoute  component={Login} />
	    <Route path="/login" component={Login} />
		<Route path="/index" onEnter={authRequired}  getComponent={Main} >
			<IndexRedirect to="/index/iconfont" />
            <Route path= "/index/ajax" component= {Ajax}  />
			<Route path="/index/iconfont" getComponent={IconFont} />
            <Route path="/index/button" component={Button} />
            <Route path="/index/empty" getComponent={Empty} />
            <Route path="/index/redux" getComponent={Redux} />
            <Route path="/index/counter" getComponent={Counter} />
            <Route path="/index/product" getComponent={Product}>
	            <Route path="/index/product/think" getComponent={Think} />
	            <Route path="/index/product/lenovo" getComponent={Lenovo} >
	                <Route path="/index/product/lenovo/:productId" getComponent={ProductInfo} />
	            </Route>
	        </Route>
	    </Route>
        <Route path="*" getComponent={NotFound} />
	</Route>
);