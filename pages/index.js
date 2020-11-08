import React from "react";
import Head from "next/head";

// Project components & functions
import DefaultLayout from "layouts";
import { DeckLink} from "../components";

/**
 * Homepage component
 */
const Home = ( decks ) => {
  if (decks) {
    return (
      <DefaultLayout>
        <Head>
          <title>Index</title>
        </Head>
        <div>
          {decks.decks.map( d => <DeckLink deck={d} /> )}
        </div>
      </DefaultLayout>
    );
  }
  return null;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  import { queryRepeatableDocuments } from 'utils/queries';

  const { ref } = previewData
  const decks = await queryRepeatableDocuments( (doc) => doc.type === 'deck' ) || {}

  return {
    props: {
      decks,
      preview
    }
  }
}

export default Home;
