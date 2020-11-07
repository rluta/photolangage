import React from 'react'
import {RichText} from 'prismic-reactjs'
import {cardStyles} from 'styles'

const Card = ({uid, url, title, quote}) => {
    return (
      <div className="card-container">
        <img alt={uid} className="photo" src={url} />
        <h2 className="title">{RichText.asText(title)}</h2>
        <p className="quote">{RichText.asText(quote)}</p>
        <style jsx global>{cardStyles}</style>
      </div>
    );
}

export default Card
