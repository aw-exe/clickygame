import React from 'react';
import {
  Navbar,
  Jumbotron,
  Wrapper,
  Footer
} from "./components";


function App() {
  return (
    <React.Fragment>
    <Navbar />
    <Jumbotron />
    <Wrapper />
    <Footer />
    </React.Fragment>
   
  );
};


// const App = () => {
//     const [friends, setFriends] = useState(friendsData);

//     };

//     return (
//       <Wrapper>
//         <Title>Friends List</Title>
//         {friends.map(friend => (
//           <FriendCardExtended
//             removeFriend={removeFriend}
//             id={friend.id}
//             key={friend.id}
//             image={friend.image}
       
//           />
//         ))}
//       </Wrapper>
//     );
// }

export default App;
