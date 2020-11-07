import React from 'react'
import {RichText} from 'prismic-reactjs'
import {cardStyles} from 'styles'

const Card = ({card}) => {
    return (
      <div className="card-container">
        <img className="photo" src={card.data.photo.url}/>
        <h2 className="title">{RichText.asText(card.data.title)}</h2>
        <p className="quote">{RichText.asText(card.data.quote)}</p>
        <style jsx global>{cardStyles}</style>
      </div>
    );
}

export default Card
