import React from 'react'

import movieData from "./data"
import { useParams } from 'react-router-dom';

//Component Filter with props 

function MovieDetails() {

  const { id } = useParams();
  const selectedMovieId = parseInt(id, 10);
  const selectedMovie = movieData.find(movie => movie.id === selectedMovieId);


  if (!selectedMovie) {
    return <div className='colorWhite'>Details not found</div>;
  }

  return (
    <div className='detailsTrailer'>
      <h3 className='titleMovieDetails'>{selectedMovie.title}</h3>
       <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${selectedMovie.trailer}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p className='descriptionMovieDetails'>{selectedMovie.description}</p>

    </div>
  );

}

export default MovieDetails