import React from "react"
import { Link } from 'react-router'


export default React.createClass({
    render(){
        return (<div>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/about">About</Link> </li>
                <li> <Link to="/repos">Repos</Link> </li>
            </ul>
        </div>)
        
    }
})

