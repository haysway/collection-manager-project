import { useState } from 'react'
import NewAlbum from './components/NewAlbum'
import AlbumList from './components/AlbumList';
import './App.css'

function App() {
  //const [albums, setAlbums] = useState([]);
  const [albums, setAlbums] = useState([
    {
        id: 1,
        name: 'Distressor',
        artist: 'Whirr',
        date: '2010-05-30',
        genres: ['Shoegaze', 'Alternative'],
        label: 'Free Whirl',
        owned: true,
        formats: ['Vinyl', 'Cassette']
    },
    {
        id: 2,
        name: 'Peripheral Vision',
        artist: 'Turnover',
        date: '2015-05-04',
        genres: ['Indie', 'Shoegaze', 'Alternative'],
        label: 'Run For Cover Records',
        owned: true,
        formats: ['Vinyl', 'CD']
    },
    {
        id: 3,
        name: 'Floral Green',
        artist: 'Title Fight',
        date: '2012-09-18',
        genres: ['Punk', 'Alternative', 'Indie'],
        label: 'SideOneDummy Records',
        owned: true,
        formats: ['Vinyl']
    },
    {
        id: 4,
        name: 'Anymore',
        artist: 'Gleemer',
        date: '2017-11-17',
        genres: ['Shoegaze', 'Alternative', 'Indie'],
        label: 'Other People Records',
        owned: false,
        formats: []
    },
    {
        id: 5,
        name: 'Goodness',
        artist: 'The Hotelier',
        date: '2016-05-27',
        genres: ['Indie', 'Alternative', 'Punk'],
        label: 'Tiny Engines',
        owned: true,
        formats: ['CD']
    },
    {
        id: 6,
        name: 'Hyperview',
        artist: 'Title Fight',
        date: '2015-02-03',
        genres: ['Alternative', 'Indie', 'Shoegaze'],
        label: 'SideOneDummy Records',
        owned: false,
        formats: []
    },
    {
        id: 7,
        name: 'Peripheral Vision',
        artist: 'Turnover',
        date: '2015-05-04',
        genres: ['Indie', 'Shoegaze', 'Alternative'],
        label: 'Run For Cover Records',
        owned: false,
        formats: []
    },
    {
        id: 8,
        name: 'Good Nature',
        artist: 'Turnover',
        date: '2017-08-25',
        genres: ['Indie', 'Alternative', 'Pop'],
        label: 'Run For Cover Records',
        owned: true,
        formats: ['Cassette']
    },
    {
        id: 9,
        name: 'The Greatest Generation',
        artist: 'The Wonder Years',
        date: '2013-05-14',
        genres: ['Punk', 'Indie'],
        label: 'Hopeless Records',
        owned: true,
        formats: ['Vinyl', 'CD']
    },
    {
        id: 10,
        name: 'No Joy',
        artist: 'Spanish Love Songs',
        date: '2015-04-29',
        genres: ['Punk', 'Indie', 'Alternative'],
        label: 'No Sleep Records',
        owned: false,
        formats: []
    },
    {
        id: 11,
        name: 'Goodbye',
        artist: 'Pity Sex',
        date: '2013-07-16',
        genres: ['Shoegaze', 'Punk', 'Alternative'],
        label: 'Run For Cover Records',
        owned: true,
        formats: ['Vinyl']
    },
    {
        id: 12,
        name: 'Cave World',
        artist: 'Viagra Boys',
        date: '2022-07-08',
        genres: ['Punk', 'Rock'],
        label: 'YEAR0001',
        owned: false,
        formats: []
    }
]);
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

  const deleteAlbumHandler = (id) => {
    setAlbums((prevAlbums) =>
        prevAlbums.filter((album) => album.id !== id)
    );
  };

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
        onDeleteAlbum={deleteAlbumHandler}
      />

    </div>
  )
}

export default App;
