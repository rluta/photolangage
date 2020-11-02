import React from "react";
import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText, Link } from "prismic-reactjs";

// Project components & functions
import DefaultLayout from "layouts";
import { Header, Card} from "../components";
import { Client } from "utils/prismicHelpers";

/**
 * Homepage component
 */
const Home = ({ doc, posts }) => {
  if (doc && doc.data) {
    return (
      <DefaultLayout>
        <Head>
          <title>{RichText.asText(doc.data.title)}</title>
        </Head>
        <Card card={doc.data.cards} />
      </DefaultLayout>
    );
  }
  return null;
};

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData
  const client = Client()
  const doc = await client.getByUID("deck", "deck", null) || {}

  return {
    props: {
      doc,
      preview
    },
    unstable_revalidate: 60
  }
}

export default Home;
