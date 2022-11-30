import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './card.css'

export default function Card({name, url, setModal, setModalInfo, log, setLog}) {
    const [pokeInfo, setPokeInfo] = useState(undefined)

    useEffect(() => {
      axios.get(url)
      .then((poke) => {
        setPokeInfo({
          id: poke.data.id,
          name: poke.data.name,
          frontUrl: poke.data.sprites.front_default,
          backUrl: poke.data.sprites.back_default,
          height: poke.data.height,
          weight: poke.data.weight,
          hp: poke.data.stats[0].base_stat,
          attack: poke.data.stats[1].base_stat,
          defense: poke.data.stats[2].base_stat,
          special_attack: poke.data.stats[3].base_stat,
          special_defense: poke.data.stats[4].base_stat,
          speed: poke.data.stats[5].base_stat
        })
      })
    }, [name])

    const switcher = (e) => {
        const pokemonData = {...e.target.closest("div").dataset}
        setModalInfo(pokemonData)
        setModal(true)
        const logCopy = [...log]
        logCopy.push({
          pokeImg: pokemonData.fronturl,
          pokeName: pokemonData.name,
          logDate: new Date().toLocaleString('ko-KR')
        })
        setLog(logCopy)
    }

    return (
      <>
        {pokeInfo !== undefined ? 
          <div className='card-viewer' 
          data-id={pokeInfo.id}
          data-name={pokeInfo.name} 
          data-stats={pokeInfo.stats}
          data-fronturl={pokeInfo.frontUrl}
          data-backurl={pokeInfo.backUrl}
          data-height={pokeInfo.height}
          data-weight={pokeInfo.weight}
          data-hp={pokeInfo.hp}
          data-attack={pokeInfo.attack}
          data-defense={pokeInfo.defense}
          data-special_attack={pokeInfo.special_attack}
          data-special_defense={pokeInfo.special_defense}
          data-speed={pokeInfo.speed}
          onClick={switcher}>
            <h3 className='tit-card'>{name}</h3>
            <img className="img-card" src={pokeInfo.frontUrl} alt={name}></img>
          </div>
        : null}
      </>
    )
}