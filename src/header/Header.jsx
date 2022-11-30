import { Link } from 'react-router-dom'
import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header className='cont-header'>
      <h1 className='txt-header'><Link to='/'>&#60; 2DC /&#62;</Link></h1>
      <ul className='ul-header'>
        <li className='li-header'><Link to='/'>Home</Link></li>
        <li className='li-header'><Link to='/viewer'>Pokemon-Viewer</Link></li>
        <li className='li-header'><Link to='/log'>Log</Link></li>
      </ul>
      <article className='space-header'>
      </article>
    </header>
  )
}