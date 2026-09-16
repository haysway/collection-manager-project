import { useState } from 'react'
import NewAlbum from './components/NewAlbum'
import AlbumList from './components/AlbumList';
import './App.css'

function App() {
  const [albums, setAlbums] = useState([]);

  const addAlbumHandler = (album) => {
    setAlbums((prevAlbums) => [album, ...prevAlbums]);
  }

  return (
    <div>
      <h1>Album Collection</h1>

      <NewAlbum onAddAlbum={addAlbumHandler}/>
      <AlbumList
        items={albums}
      />

    </div>
  )
}

export default App;
