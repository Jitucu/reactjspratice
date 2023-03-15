import React, { Component } from 'react'
import Counter from './Components/Counter.css'

export default class App extends Component {
  constructor()
  {
    super()
    this.state={
      count:0
    }
    

  }
  handleIncrement=()=>{
    return(
      this.setState({count:this.state.count+1})
    )
  }
handleDecrement=()=>{
  this.setState({count:this.state.count-1})
}
handleReset=()=>{
  return(
    this.setState({count:0})
  )
}
  render() {
    return (
      <>
      <div className='mainblock'>
     <h1>{this.state.count}</h1>
     </div>
     <div className='subblock'>
     <button onClick={this.handleIncrement}>+ Increment</button>
     <button onClick={this.handleDecrement}>- Decrement</button>
     <button onClick={this.handleReset}>RESET</button>
     </div>
     </>
    )
  }
}
