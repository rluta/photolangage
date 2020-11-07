import React from "react";
import Head from "next/head";
import { RichText } from "prismic-reactjs";

import { queryRepeatableDocuments } from 'utils/queries'

// Project functions & styles
import { Client } from "utils/prismicHelpers";

// Project components & functions
import DefaultLayout from "layouts";
import { Card} from "../components";

/**
 * Homepage component
 */
const Deck = ({ doc }) => {
  if (doc && doc.data) {
    const rdm = Math.floor(Math.random() * doc.data.cards.length)
    console.log(`Returning card ${doc.data.cards[rdm].uid}`)

    return (
      <DefaultLayout>
        <Head>
        </Head>
        <div>
          {doc.data.cards.filter((card, idx) => idx === rdm).map( c => <Card card={c.card} key={c.card.id} /> )}
        </div>
      </DefaultLayout>
    );
  }
  return null;
};

export async function getStaticProps({ params = null, preview = null, previewData = {} }) {

  const { ref } = previewData
  const client = Client()
  const doc = await client.getByUID("deck", params.uid, {fetchLinks: ['card.photo', 'card.title', 'card.quote']}) || {}


  return {
    props: {
      doc,
      preview
    },
    unstable_revalidate: 60
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'deck')

  return {
    paths: documents.map(doc => `/${doc.uid}`),
    fallback: true,
  }
}

export default Deck;
