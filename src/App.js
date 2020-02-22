import React from 'react';
import {
  Navbar,
  Jumbotron,
  Wrapper,
  Card,
  Footer
} from "./components";
import Character from './rm.json'
import { render } from '@testing-library/react';


function shuffleCharacter(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const App = () => {

  // Set this.state
  state = {
    Character,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  },

  handleClick = (id) => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Ouch! Try Again.",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacter = shuffleCharacter(Character);
    this.setState({ Character: shuffledCharacter });
  };

  render() 
    return (
      <React.Fragment>
        <Navbar
          score={this.state.currentScore}
          topScore={this.state.topScore}
        />

        <Jumbotron/>

        <Wrapper>
          {this.state.Character.map(Character => (
            <div className="card-container">
              <Card
                key={Character.id}
                id={Character.id}
                image={Character.image}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
              />
            </div>
          ))}
        </Wrapper>

        <Footer/>
      </React.Fragment>
      )
  
  }

export default App;
