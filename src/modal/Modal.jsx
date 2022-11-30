import React from 'react'
import './modal.css'

export default function Modal({setModal, modalInfo}) {
  const modalController = (e) => {
    if (e.target.className === 'cont-modal-overlay') {
      setModal(false)
    }
  }
  
  return (
    <section className='cont-modal-overlay' onClick={modalController}>
        <div className='cont-modal-main'>
          <h3 className='tit-modal'>{modalInfo.name}</h3>
          <img src={modalInfo.fronturl} alt={modalInfo.name}></img>
          <img src={modalInfo.backurl} alt={modalInfo.name}></img>
          <div className='cont-info-modal'>
            <p className='txt-modal'>height : {modalInfo.height}</p>
            <p className='txt-modal'>weight : {modalInfo.weight}</p>
            <table className='tbl-modal'>
              <thead>
                <tr>
                  <th>HP</th>
                  <th>attack</th>
                  <th>defense</th>
                  <th>special_attack</th>
                  <th>special_defense</th>
                  <th>speed</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                    <td>{modalInfo.hp}</td>
                    <td>{modalInfo.attack}</td>
                    <td>{modalInfo.defense}</td>
                    <td>{modalInfo.special_attack}</td>
                    <td>{modalInfo.special_defense}</td>
                    <td>{modalInfo.speed}</td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
    </section>
  )
}
