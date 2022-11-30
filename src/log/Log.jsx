import React from 'react'
import styled from 'styled-components'
import List from './List'

let LogSection = styled.section`
    background-color: rgba(255, 99, 71, 0.5);
    border-radius: 10px;
    width: 400px;
    padding: 20px;
    margin: 40px auto;
    h2 {
      font-size: 25px;
      margin-bottom: 20px;
      font-weight: 700;
    }
    ul {
      height: 500px;
      background-color: white;
      overflow-y: scroll;
      padding: 10px;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      border-radius: 5px;
      margin-bottom: 5px;
    }
`


export default function Log({log, setLog}) {
  return (
    <LogSection>
      <h2>Log</h2>
      <ul>
        {log.map((e, i) => {
          return <List logDate={e.logDate} pokeImg={e.pokeImg} pokeName={e.pokeName} />
        })}
      </ul>
    </LogSection>
  )
}
