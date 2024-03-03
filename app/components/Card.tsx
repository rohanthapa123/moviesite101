import { IAnimeResult } from '@consumet/extensions';
import React from 'react'

const Card = (data : any ) => {
  return (
    <div>
        <h1>{data.title}</h1>
    </div>
  )
}

export default Card