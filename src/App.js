import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  handleReset() {
    alert('Do you really want to reset the counted number!');
    this.setState({
      count: 0
    });
  };

  render() {
    return (
    <div className="main">
      <h1 className="header">Total Visitors at Art Gallery</h1>
      <p className="count">{this.state.count}</p>
      <button className='increment' onClick={(e) => this. handleIncrement()}> Increment</button>
      <button className='reset' onClick={(e) => this.handleReset()}>Reset!</button>
    </div>
    );
  }
};

export default App;
