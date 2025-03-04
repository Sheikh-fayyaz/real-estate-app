import React from 'react'

function Image({imgPath, imgAlt, classes}) {
  return (
    <img src={imgPath} className={classes} alt={imgAlt} />
  )
}

export default Image