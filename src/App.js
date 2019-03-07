import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
    state = {
        inputValue: ''
    };
    
    inputChangeHandler = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    };
    
    clickHandler = (index) => {
        let inputValue = this.state.inputValue.split('')
        inputValue.splice(index, 1)
        inputValue = inputValue.join('')
        this.setState({
            inputValue: inputValue
        })
    }
    
  render() {
    const chars = this.state.inputValue.split('').map((element, index) =>
        <Char click={() => this.clickHandler(index)} key={index} char={element} />
    )
    return (
        <div>
            <input type="text" value={this.state.inputValue} onChange={this.inputChangeHandler} />
            <p>Length: {this.state.inputValue.length}</p>
            <Validation len={this.state.inputValue.length} />
            {chars}
        </div>
    );
  }
}

export default App;
