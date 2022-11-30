import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './card/Card'
import './viewer.css'

export default function Viewer({setModal, setModalInfo, log, setLog, saveUrl, setSaveUrl}) {
  const [axiosPokeMon, setAxiosPokeMon] = useState(undefined)
  const [url, setUrl] = useState(saveUrl)
  const previousUrl = () => {
    axios.get(url)
    .then((data) => {
      const previous = data.data.previous
      if (previous !== null) {
        setSaveUrl(previous)
        setUrl(previous)
      }
    })
  }

  const nextUrl = () => {
    axios.get(url)
    .then((data) => {
      const next = data.data.next
      if (next !== null) {
        setSaveUrl(next)
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
            <Card name={e.name} url={e.url} log={log} setModal={setModal} setModalInfo={setModalInfo} setLog={setLog} key={i}/>)} 
          </>
          : null}
      </div>
    </section>
  )
}
