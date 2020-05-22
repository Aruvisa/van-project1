import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0

     }
  } 

  tambahNilai = () => {
    this.setState({count : this.state.count+1});
  }

  kurangNilai = () => {
    this.setState({count : this.state.count-1});
  }
  render() { 
    return (
      <div className='container'>
        <h2>{this.state.count}</h2>
        <button onClick ={this.tambahNilai}className='btn'>+</button>
        <button onClick = {this.kurangNilai}className='btn'>-</button>
      </div>
      
    );
  }
}
 
export default App;