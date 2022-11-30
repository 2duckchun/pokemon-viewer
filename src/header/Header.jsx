import { Link } from 'react-router-dom'
import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header className='cont-header'>
      <h1 className='txt-header'><Link to='/home'>&#60; 2DC /&#62;</Link></h1>
      <ul className='ul-header'>
        <Link to='/home'><li className='li-header'>Home</li></Link>
        <Link to='/viewer'><li className='li-header'>Pokemon-Viewer</li></Link>
        <Link to='/log'><li className='li-header'>Log</li></Link>
      </ul>
      <article className='space-header'>
      </article>
    </header>
  )
}