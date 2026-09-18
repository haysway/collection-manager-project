function AlbumCard(props) {
    return(
        <div className="card album-card"
        onClick={() => props.onDelete(props.id)}
        >
            <h3>{props.name}</h3>
            <p>Artist: {props.artist}</p>
            <p>Release Date: {props.date}</p>
            <p>Genres: {props.genres.join(', ')}</p>
            <p>Record Label: {props.label}</p>
            <p>Owned: {props.owned ? 'Yes' : 'No'}</p>
            {props.owned && (
                <p>Formats: {props.formats.join(', ')}</p>
            )}
        </div>
    );
}

export default AlbumCard;