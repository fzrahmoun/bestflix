import React from 'react'
import {Link } from "react-router-dom";


//Movie card component 

function MovieCard({id,title,description,posterURL,rating}) {
  return (
    <div className='blocMovie'>
       
       <h3> {title} </h3>
       <p> {description} </p>
       <nav><ul> <li><Link to={`/moviedetails/${id}`}>{posterURL}</Link>  </li></ul></nav>
       <p> Rating : {rating}</p>
      
    </div>
    
  )
}

export default MovieCard