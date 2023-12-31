import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import "./App.css"

import {Routes, Route, Link  } from "react-router-dom";
function App() {

  return (
    <div className="App container">
      <h1 style={{color:'#e50914'}}>Bestflix</h1>
      <nav>
        <ul> 
          <li><Link to="/">Home</Link>  </li>
    
        </ul>
      </nav>
      <Routes>
          <Route index  path="/" element={<MovieList />} />
          <Route path="/moviedetails/:id" element={<MovieDetails />} />

       </Routes>
    </div>
  );
}

export default App;