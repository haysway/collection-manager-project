import { useState } from 'react'
import NewAlbum from './components/NewAlbum'

import './App.css'

function App() {
  const [albums, setAlbums] = useState('');

  const addAlbumHandler = (album) => {
    setAlbums((prevAlbums) => [album, ...prevAlbums]);
  }

  return (
    <div>
      <h1>Temp title</h1>

      <NewAlbum onAddAlbum={addAlbumHandler}/>
    </div>
  )
}

export default App
