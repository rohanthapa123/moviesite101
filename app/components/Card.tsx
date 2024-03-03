import Link from 'next/link';
import React, { useEffect } from 'react'

const Card = (data : any ) => {
  const anime = data.data;
  function abc(){
    console.log("anime",anime)
  }
  abc();
  return (
    <Link href={anime?.url}>
    <div className='bg-slate-400 rounded-md text-center h-[350px] w-[250px] m-4'>
        <h1 className='text-black text-lg font-medium p-2'>{anime?.title}</h1>
        <img src={anime?.image} className='w-[80%] h-[70%] m-auto object-contain' alt="" />
        <h1 className='p-2'>Released on: {anime?.releaseDate}</h1>
    </div>
    </Link>
  )
}

export default Card