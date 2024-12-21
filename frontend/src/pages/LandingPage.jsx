import React, { useContext } from 'react'
// import MenuNavigation from '../components/UI/HomeSection/MenuNavigation';
import Deck from '../components/decks/Deck';
import Layout from '../components/UI/Layout';
import DeckCard from '../components/decks/DeckCard';

import { UserContext } from '../store/user_context.jsx';

const LandingPage = () => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus non erat sit amet porta. Sed nec tortor at purus tempus elementum non quis ligula. Curabitur et risus in massa fermentum fermentum. Suspendisse vehicula interdum augue sodales vestibulum. Sed id consectetur nisl. Vestibulum in quam vitae nunc placerat euismod ac vitae lectus. Ut non cursus urna. Phasellus tristique felis sodales eros porttitor dapibus. Fusce rutrum mauris vel dui fringilla, placerat porta leo consequat.';
  const card_info = [{
    "title": "Titre",
    "subTitle": "Sous-titre",
    "image": "https://res.cloudinary.com/dhc7ovnwk/image/upload/v1729342505/langdeck/assets/images/saynetes/01%20-%20Chez%20le%20M%C3%A9decin/S01-00.png",
    "text": lorem
  },
  {
    "title": "Titre",
    "subTitle": "Sous-titre",
    "image": "https://res.cloudinary.com/dhc7ovnwk/image/upload/v1730466484/langdeck/assets/images/saynetes/02%20-%20%C3%A0%20la%20pharmacie/S02-00.png",
    "text": lorem
  },
  {
    "title": "Titre",
    "subTitle": "Sous-titre",
    "image": "https://res.cloudinary.com/dhc7ovnwk/image/upload/v1729344099/langdeck/assets/images/saynetes/03%20-%20Chez%20la%20Di%C3%A9t%C3%A9ticienne/S03-00.png",
    "text": lorem
  },
  {
    "title": "Titre",
    "subTitle": "Sous-titre",
    "image": "https://res.cloudinary.com/dhc7ovnwk/image/upload/v1729432055/langdeck/assets/images/saynetes/04%20-%20Gestion%20de%20l%27hypoglyc%C3%A9mie/S04-00.png",
    "text": lorem
  },
  {
    "title": "Titre",
    "subTitle": "Sous-titre",
    "image": "https://res.cloudinary.com/dhc7ovnwk/image/upload/v1729432494/langdeck/assets/images/saynetes/05%20-%20L%27activit%C3%A9%20physique/S05-00.png",
    "text": lorem
  },
  ];

  const ctx = useContext (UserContext);
  console.log (ctx);

  return (
    <>
      <Layout>
        <Deck deck={card_info}></Deck>
      </Layout>
    </>
  )
}

export default LandingPage