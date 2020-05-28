import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import Box from './components/containerBox';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hr: '',
      min: '',
      meridiem: ''
    };
  }

  getTime = () => {
    axios.get('/cc/time')
      .then(response => {
        console.log(response.data);
        const time = response.data;
        this.setState({
          hr: time.hour <= 12 ? time.hour : time.hour % 12,
          min: response.data.minutes,
          meridiem: time.hour <= 12 ? 'AM' : 'PM'
        });
      })
      .catch(err => {
        console.log(err.message);
      })
  };
  componentWillMount() {
    this.getTime();
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getTime(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    return (
      <div className="main" >
        <center>
          <div className="time-card">
            <div className='card-title'>
              <h1>Time</h1>
            </div>
            <div className='row'>
              <Box>{this.state.hr}</Box>
              <Box>{this.state.min}</Box>
              <Box>{this.state.meridiem}</Box>
            </div>
          </div>
        </center>
      </div>
    )
  }
}

export default App;
