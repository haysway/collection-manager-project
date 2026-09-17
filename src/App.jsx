import { useState } from 'react'
import NewAlbum from './components/NewAlbum'
import AlbumList from './components/AlbumList';
import './App.css'

function App() {
  const [albums, setAlbums] = useState([]);
  const [artistFilter, setArtistFilter] = useState('');
  const [genreFilter, setGenreFilter] = useState('All');
  const [ownedFilter, setOwnedFilter] = useState(false);
  const [formatFilter, setFormatFilter] = useState('All');

  const filteredAlbums = albums.filter((album) => {
    if (artistFilter && !album.artist.toLowerCase().includes(artistFilter.toLowerCase()))
      return false;

    if (genreFilter !== 'All' && !album.genres.includes(genreFilter))
      return false;

    if (ownedFilter && !album.owned)
        return false;
    
    if (formatFilter !== 'All' && !album.formats.includes(formatFilter))
      return false;

    return true;
  })

  const addAlbumHandler = (album) => {
    setAlbums((prevAlbums) => [album, ...prevAlbums]);
  }

  return (
    <div>
      <h1>Album Collection</h1>

      <NewAlbum onAddAlbum={addAlbumHandler}/>
      <AlbumList
        items={filteredAlbums}
        artistFilter={artistFilter}
        onArtistChange={setArtistFilter}
        genreFilter={genreFilter}
        onGenreChange={setGenreFilter}
        ownedFilter={ownedFilter}
        onOwnedChange={setOwnedFilter}
        formatFilter={formatFilter}
        onFormatChange={setFormatFilter}
      />

    </div>
  )
}

export default App;
