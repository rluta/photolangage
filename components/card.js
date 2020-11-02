import React from 'react'
import { RichText } from 'prismic-reactjs'

import { DocLink } from 'components'
import { cardStyles } from 'styles'

const Card = ({ card }) => {
  return
        <div className="card-container">
          <img className="photo"/>
          <h2 className="title">
            {RichText.asText(card.title)}
          </h2>
          <p className="quote">
            {RichText.asText(card.quote)}
          </p>
        </div>
        {button}
        <style jsx global>{cardStyles}</style>
}

export default Card
