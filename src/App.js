import React from 'react';
import {
  Navbar,
  Jumbotron,
  Card,
  Wrapper,
  Footer
} from "./components";
 import rm from './rm.json'


function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Jumbotron />
    <Wrapper />
    <Card />
    <Footer />
    </React.Fragment>
   
  );
}

export default App;
