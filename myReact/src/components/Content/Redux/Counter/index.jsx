import React from 'react'
// import Counter from './Counter.jsx'
import { connect } from 'react-redux';
import { createStore } from 'redux'

import { counterProduct } from 'ACTIONS/selectProduct' 


// React component
class Counter extends React.Component {
  render() {
    const { count, onIncreaseClick } = this.props
    return (
      <div>
        <span>{count}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    count: state.selectProduct.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(counterProduct({}))
  }
}

// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


// function mapStateToProps(state) {
//     return {
//         value: state.count
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         onIncreaseClick: () => dispatch(increaseAction)
//     }
// }

// // Action Creator
// const increaseAction = { type: 'increase' }

// const App = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Counter)

// // Reducer
// function counter(state = { count: 0 }, action) {
//   const count = state.count
//   switch (action.type) {
//     case 'increase':
//       return { count: count + 1 }
//     default:
//       return state
//   }
// }


export default class CounterDOM extends React.Component {
    render() {
        return (
            <App />
        )
    }
}

