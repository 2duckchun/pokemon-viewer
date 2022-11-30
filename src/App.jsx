import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './reset.css'
import './App.css'
import Header from './header/Header'
import Home from './Home/Home';
import Viewer from './viewer/Viewer';
import Modal from './modal/Modal'
import Log from './log/Log'

function App() {
  const [modal, setModal] = useState(false)
  const [modalInfo, setModalInfo] = useState(false)
  const [log, setLog] = useState([])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/pokemon-viewer/' element={<Home />} />
        <Route path='/viewer' element={<Viewer setModal={setModal} log={log} setLog={setLog} setModalInfo={setModalInfo}/>} />
        <Route path='/log' element={<Log log={log} setLog={setLog} />} />
      </Routes>
      {modal === true ? <Modal setModal={setModal} modalInfo={modalInfo} /> : null}
    </div>
  );
}

export default App;
