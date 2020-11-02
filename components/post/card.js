import React from 'react'
import { default as NextLink } from 'next/link'
import Link from 'next/link'
import { RichText } from 'prismic-reactjs'

import { DocLink } from 'components'
import { cardStyles } from 'styles'

const Card = ({ card }) => {
  return (
        <div className="card-container">
          <img className="photo" src='images/6b2bf485-aa12-44ef-8f06-dce6b91b9309_dancing.png'/>
          <h2 className="title">
            One
          </h2>
          <p className="quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <Link className="random" href="/">
            <a>Random</a>
          </Link>
          <style jsx global>{cardStyles}</style>
        </div>
      );
}

export default Card
