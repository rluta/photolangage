import React from 'react'
import { Text, Quote, ImageWithCaption } from './slices'
import { Card } from './index.js'

/**
 * Post slice zone component
 */
const SliceZone = ({ sliceZone }) => (
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case ('card'):
        return <Card slice={slice} key={`slice-${index}`} />
      default:
        return null
    }
  })
)

export default SliceZone
