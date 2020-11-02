import React from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText, Link } from "prismic-reactjs";

// Project components & functions
import DefaultLayout from "layouts";
import { Header, Card, DeckLink} from "../components";
import { Client } from "utils/prismicHelpers";
import { queryRepeatableDocuments } from 'utils/queries'

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

  const { ref } = previewData
  const decks = await queryRepeatableDocuments( (doc) => doc.type === 'deck' ) || {}

  return {
    props: {
      decks,
      preview
    },
    unstable_revalidate: 60
  }
}

export default Home;
