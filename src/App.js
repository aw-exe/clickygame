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

  const [clickedCharacter, setClickedCharacter] = useState([]);
  const [previousTopScore, setPreviousTopScore]= useState(0);
  const [message, setMessage ]= useState('Begin by clicking on a character')

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
        // score={useState.currentScore}
        // topScore={useState.topScore}
      />

      <Jumbotron/>

      <Wrapper>
        {useState.Character.map(Character => (
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




const App = () => {
  
  
    const [clickedItems, setClickedItems] = useState([]);
    const [prevTopScore, setPrevTopScore]= useState(0);
    const [message, setMessage ]= useState('Begin by clicking an image.')
    const [textColor, setTextColor] = useState({color:'FFFFFF'})
    const [shakeNow, setShakeNow] = useState(false)
   
    const textHandler = (val, color) => {
      const correctText = "Correct! You're hitting all the right notes.";
      const incorrectText = "Well you're no Miles Davis! Click any image to play again."
      const correctColor = {color: '#66ff33'}
      const incorrectColor = {color: '#ff3300'}
      const resultMessage = (val ? correctText : incorrectText)
      const colorResult= (val ? correctColor : incorrectColor)
      setMessage(resultMessage)
      setTextColor(colorResult)
      setShakeNow(!val)
      
    }
    
    const topScoreHandler = () => {
      const currentScore = clickedItems.length 
      const newScore= ((currentScore > prevTopScore) ? currentScore : prevTopScore)
      setPrevTopScore(newScore)
    }
  
    const GameOver = () => {
      topScoreHandler()
      setClickedItems([])
    
    }
 
    const checkHandler = id =>{
     if(clickedItems.includes(id)) {
          textHandler(false)
          return GameOver();
      }    
      textHandler(true)
      setClickedItems([id,...clickedItems])  
    } 
  
  return(
      <div style={styles.backdrop}>
           <Navbar 
           textResult = {message}
           score = {clickedItems.length}
           topScore = {prevTopScore} 
           color={textColor}

           /> 
           <Jumbotron/>
           <Shake active={shakeNow}>
              <Wrapper>
              
              {shuffle(guitars).map(guitar =>(
                  <MemoryCard
                    key={guitar.id}  
                    id = {guitar.id}
                    name = {guitar.name}
                    bassImage = {guitar.image} 
                    checkHandler = {checkHandler}          
                  /> 
                ))}
              </Wrapper>
              </Shake>
          <Footer />
      </div>
  )

}