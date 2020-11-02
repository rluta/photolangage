import React from 'react'
import { Text, Quote, ImageWithCaption } from './slices'

/**
 * Post slice zone component
 */
const SliceZone = ({ sliceZone }) => (
  sliceZone.map((slice, index) => {
    switch (slice.slice_type) {
      case ('card'):
        return <ImageWithCaption slice={slice} key={`slice-${index}`} />
      default:
        return null
    }
  })
)

export default SliceZone
