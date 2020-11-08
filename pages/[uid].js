import React from "react";

// Project functions & styles
import { Client } from "utils/prismicHelpers";

// Project components & functions
import DefaultLayout from "layouts";
import { Card} from "../components";

/**
 * Homepage component
 */
const Deck = ({ card }) => {
  if (card) {
    return (
      <DefaultLayout>
          <Card key={card.uid} url={card.data.photo.url} title={card.data.title} quote={card.data.quote} />
      </DefaultLayout>
    );
  }
  return null;
};

export async function getServerSideProps({ params = null, preview = null, previewData = {} }) {

  const { ref } = previewData
  const client = Client()
  const doc = await client.getByUID("deck", params.uid, {fetchLinks: ['card.photo', 'card.title', 'card.quote']}) || {}
  const rdm = Math.floor(Math.random() * doc.data.cards.length)
  const card = doc.data.cards[rdm].card

  console.log(`Returning card ${card.uid}`)

  return {
    props: {
      card,
      preview
    }
  }
}

export default Deck;
