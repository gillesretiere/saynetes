import React, { useState, createContext } from 'react';
import { UserContext } from './store/user_context';

function App() {

  const [decks, setDecks] = useState([]);

  return (
    <UserContext.Provider value={decks}>
      <div>
        App
      </div>
    </UserContext.Provider>
  );

}

export default App;
