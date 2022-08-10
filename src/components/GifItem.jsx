import React from 'react'

export const GifItem = ({id, title, url}) => {
  
  return (
    <div className='card' >
      <img src={url} alt={title}  height="300px"/>
      <p>{title}</p>
    </div>
  )
}
