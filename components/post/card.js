import React from 'react'
import { RichText } from 'prismic-reactjs'

import { DocLink } from 'components'
import { cardStyles } from 'styles'

const Card = ({ card }) => {
  return (
        <div className="card-container">
          <img className="photo" alt={card.photo} src={card.photo}/>
          <h2 className="title">
            {RichText.asText(card.title)}
          </h2>
          <p className="quote">
            {RichText.asText(card.quote)}
          </p>
          <style jsx global>{cardStyles}</style>
        </div>
      );
}

export default Card
