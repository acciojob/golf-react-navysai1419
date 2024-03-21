import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: 0,
    };
  }

  buttonClickHandler = () => {
    this.setState({ renderBall: true });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' && this.state.renderBall) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  };

  renderChoice = () => {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.ballPosition}px` }}
        ></div>
      );
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start Game
        </button>
      );
    }
  };

  render() {
    return <div className="container">{this.renderChoice()}</div>;
  }
}

export default App;
