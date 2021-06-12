import React from 'react'

export default function MovieForm(props) {
    return (
        <div>
            <p>Best Movie</p>
            <h1>Movie From {props.match.params.id}</h1>
            <button onClick = {() => props.history.push('/movies')} className="btn btn-danger">Save</button>
        </div>
    )
}
