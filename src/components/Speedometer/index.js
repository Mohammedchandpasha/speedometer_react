// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => {
        console.log(`previous state value ${prevState.count}`)
        return {speed: prevState.speed + 10}
      })
    }
  }

  onDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => {
        console.log(`previous state value ${prevState.count}`)
        return {speed: prevState.speed - 10}
      })
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container image" alt="speedometer">
        <img alt="speedometer" />
        <h1 className="heading">Speedometer</h1>
        <div className="speed-details-container">
          <h1>Speed is {speed}mph</h1>
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button className="ac-button" onClick={this.onIncrement}>
              Accelerate
            </button>

            <button className="brake-button" onClick={this.onDecrement}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
