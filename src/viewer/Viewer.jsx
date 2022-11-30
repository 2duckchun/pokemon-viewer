import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './card/Card'
import './viewer.css'

export default function Viewer({setModal, setModalInfo, log, setLog}) {
  const [axiosPokeMon, setAxiosPokeMon] = useState(undefined)
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9')
  const previousUrl = () => {
    axios.get(url)
    .then((data) => {
      const previous = data.data.previous
      if (previous !== null) {
        setUrl(previous)
      }
    })
  }

  const nextUrl = () => {
    axios.get(url)
    .then((data) => {
      const next = data.data.next
      if (next !== null) {
        setUrl(next)
      }
    })
  }

  useEffect(() => {
    axios.get(url)
    .then((data) => {
    setAxiosPokeMon(data.data.results)
    })
  }, [url])

  return (
    <section className='sect-viewer'>
      <div className='btnbox-viewer'>
        <button onClick={previousUrl} className="btn-viewer">Previous</button>
        <button onClick={nextUrl} className="btn-viewer">Next</button>
      </div>
      <div className='cards-viewer'>
        {axiosPokeMon !== undefined ? 
          <>
            {axiosPokeMon.map((e, i) => 
            <Card name={e.name} url={e.url} log={log} setModal={setModal} setModalInfo={setModalInfo} setLog={setLog}/>)} 
          </>
          : null}
      </div>
    </section>
  )
}
