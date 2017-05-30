
import React from 'react';
import ReactDOM from 'react-dom';
// import Browser from 'browser'
import Provider from 'LAYOUTS/Provider/index.jsx';

// require("./main.scss")
// require("./components/App")

const rootEl = document.getElementById('app');

// ReactDOM.render(<h1>Hello, world!</h1>,rootEl)
ReactDOM.render(<Provider />,rootEl)

/*import React from 'react'
 class Test extends React.Component {
   
    render() {
        return (
            <div>
                <h1>我的传说</h1>
            </div>
        )
    }
}

React.render(<Test />, document.getElementById("app"))*/