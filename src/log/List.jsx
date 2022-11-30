import React from 'react'

export default function List({logDate, pokeImg, pokeName}) {
  return (
    <li>
      <img src={pokeImg} alt={pokeName}></img>
      <div>
        <p>{logDate}에 </p>
        <p>{pokeName}을 확인.</p>
      </div>
    </li>
  )
}
