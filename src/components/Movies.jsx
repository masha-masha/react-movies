import React from 'react'
import Movie from './Movie'

const Movies = ({ movies=[] }) => {
    return (
        <div className='movies'>
            { movies.length ? movies.map((movie) => {
                return <Movie
                    key={movie.imdbID}
                    title={movie.Title}
                    poster={movie.Poster}
                    id={movie.imdbID}
                    type={movie.Type}
                    year={movie.Year}
                />
            }) :
            <h4>Nothing found</h4>}
        </div>
    )
}

export default Movies