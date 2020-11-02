import React from 'react'
import {default as NextLink} from 'next/link'
import Link from 'next/link'
import {RichText} from 'prismic-reactjs'

import {DocLink} from 'components'
import {cardStyles} from 'styles'

const Card = ({card}) => {
    return (
      <div className="card-container">
        <img className="photo" src={card.data.photo.url}/>
        <h2 className="title">{RichText.asText(card.data.title)}</h2>
        <p className="quote">{RichText.render(card.data.quote)}</p>
        <style jsx global>{cardStyles}</style>
      </div>
    );
}

export default Card
