import React from 'react';
import {
  Navbar,
  Jumbotron,
  Card,
  Wrapper,
  Footer
} from "./components";
 import RM from "./RM.json"


function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Jumbotron />
    <Wrapper />
    <Card />
    <RM />
    <Footer />
    </React.Fragment>
   
  );
}

export default App;
