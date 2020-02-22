import React, {useState} from 'react';
import {
  Navbar,
  Jumbotron,
  Wrapper,
  Card,
  Footer
} from "./components";
import characterData from './rm.json'


const App = () => {

  const shuffleCharacter = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [Character] = useState(characterData);

  handleClick = (id) => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.useState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.useState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.useState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.useState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.useState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Ouch! Try Again.",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacter = shuffleCharacter(Character);
    this.useState({ Character: shuffledCharacter });
  };

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
