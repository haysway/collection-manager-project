import AlbumCard from "./AlbumCard";

function AlbumList(props) {
    return (
        <div className="card">
            <h2>Albums</h2>

            {
                props.items.length === 0 ? (
                    <p>No albums entered</p>
                ) : (
                    props.items.map((album) => (
                        <AlbumCard
                            key={album.id}
                            name={album.name}
                            artist={album.artist}
                            date={album.date}
                            genres={album.genres}
                            label={album.label}
                            owned={album.owned}
                            formats={album.formats}
                        />
                    ))
                )
            }
        </div>
    );
}

export default AlbumList;