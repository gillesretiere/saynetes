import React, { useState, } from 'react';
import { UserContext } from './store/user_context';
import DeckContext from './store/DeckContext';

function App() {

  const [decks, setDecks] = useState([]);

  <UserContext.Provider value={decks}>
    <DeckContext.Provider
      value={{
        deck: '',
        language: 'all',
        update: () => { // we added this callback
          this.setDeck((props) => ({
            deck: props,
          }));
        },

      }}>
      return (
      <>
        This is the App
      </>
      );
    </DeckContext.Provider>
  </UserContext.Provider>

}

export default App;
