import React from 'react'
import './home.css'

export default function Home() {
  return (
    <section className='sect-home'>
      <img className='img-home' src="https://cdn.pixabay.com/photo/2012/10/06/22/18/horse-60153_960_720.jpg" alt="말 힐링"></img>
      <h2 className='txt-home'>이 페이지는 머리를 비우기에 좋습니다.</h2>
      <div className='msgbox-home'>
        <p>포켓몬을 클릭하시면서</p>
        <p>휴식을 얻어가시기 바랍니다.</p>
        <p>저는 이 장난을 통해 리액트와 조금 더 친해지겠습니다.</p>
      </div>
    </section>
  )
}
