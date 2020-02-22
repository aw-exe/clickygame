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

  // const shuffleCharacter = (array) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };

  // const [clickedCharacter, setClickedCharacter] = useState([]);
  // const [previousTopScore, setPreviousTopScore]= useState(0);
  // const [message, setMessage ]= useState('Begin by clicking on a character')

  // handleClick = (id) => {
  //   if (this.state.clicked.indexOf(id) === -1) {
  //     this.handleIncrement();
  //     this.useState({ clicked: this.state.clicked.concat(id) });
  //   } else {
  //     this.handleReset();
  //   }
  // };

  // handleIncrement = () => {
  //   const newScore = this.state.currentScore + 1;
  //   this.useState({
  //     currentScore: newScore,
  //     rightWrong: ""
  //   });
  //   if (newScore >= this.state.topScore) {
  //     this.useState({ topScore: newScore });
  //   }
  //   else if (newScore === 12) {
  //     this.useState({ rightWrong: "You win!" });
  //   }
  //   this.handleShuffle();
  // };

  // handleReset = () => {
  //   this.useState({
  //     currentScore: 0,
  //     topScore: this.state.topScore,
  //     rightWrong: "Ouch! Try Again.",
  //     clicked: []
  //   });
  //   this.handleShuffle();
  // };

  // const topScore = () => {
  //   const currentScore = clickedCharacter.length 
  //   const newScore= ((currentScore > previousTopScore) ? currentScore : previousTopScore)
  //   setPreviousTopScore(newScore)
  // }
  
  // const GameOver = () => {
  //   topScore()
  //   setClickedItems([])
  
  // }
  
  // const clickHandler = id =>{
  //  if(clickedCharacter.includes(id)) {
  //       return GameOver();
  //   }    
  //   setClickedCharacter([id, clickedCharacter])  
  // } 
  

  return (
    <React.Fragment>
      <Navbar
        // score = {clickedCharacter.length}
        // topScore = {previousTopScore} 
        // message = {setMessage}
      />

      <Jumbotron/>

      <Wrapper>
        {(characterData).map(Character => (
          <div className="card-container">
            <Card
              key={Character.id}
              id={Character.id}
              image={Character.image}
              // clickHandler={clickHandler}
            />
          </div>
        ))}
      </Wrapper>

      <Footer/>
    </React.Fragment>
    )
  }

export default App;
