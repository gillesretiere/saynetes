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
        server: 'https://hammer-marteau.com/',
        update: () => { // we added this callback
          this.setDeck((props) => ({
            deck: props,
          }));
        },

      }}>
      return (
      <>
        <div class="amchart" id="chartdiv">
          This is the App
        </div>
      </>
      );
    </DeckContext.Provider>
  </UserContext.Provider>

}

export default App;
