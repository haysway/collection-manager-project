import { useState } from 'react';

function AlbumForm(props) {
    // album name
    // artist name
    // release date
    // genres (multi select?)
    // record label
    // owned selector (yes/no)
    // if yes, which media (vinyl, cd, cassette)

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form className="card" onSubmit={submitHandler}>
            <div className="form-control">
                <label>Name</label>
            </div>


            <div className="form-control">
                <label>Artist</label>
            </div>

            <div className="form-control">
                <label>Release Date</label>   
            </div>

            <div className="form-control">
                <label>Genres</label>                
            </div>


            <div className="form-control">
                <label>Record Label</label>                
            </div>


            <div className="form-control">
                <label>Owned</label>                
            </div>


            <div className="form-control">
                <label>Format</label>                
            </div>

            <button type="submit">Add Album</button>
        </form>
    );
}

export default AlbumForm;