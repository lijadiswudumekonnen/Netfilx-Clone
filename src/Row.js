import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_Url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl,isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request)
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
         <img
            key={movie.id}
            className="row__poster"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.name}
           />
        ))}
      </div>
    </div>
  );
}

export default Row;



























// import React, { useState, useEffect } from 'react';
// import axios from './axios'; // Axios library for making HTTP requests
// import './row.css';
//  const base_Url = "https://image.tmdb.org/t/p/original/";
// function Row({ title, fetchUrl,isLargeRow }) {

//  const Row = ({ title, fetchUrl }) => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     // Fetch the movie data when the component mounts
//     const fetchData = async () => {
//       const response = await axios.get(fetchUrl);
//       setMovies(response.data.results);
//     };

//     fetchData();
//   }, [fetchUrl]);

//   return (
//     <div className="row">
//       <h2>{title}</h2>
//       <div className="row__posters">
//         {/* Display the movie posters */}
//         {movies.map((movie) => (
//           <img
//             key={movie.id}
//             className="row__poster"
//             src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
//             alt={movie.name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
// }
// export default Row;


// const base_Url = "https://image.tmdb.org/t/p/original/";
// function Row({ title, fetchUrl,isLargeRow }) {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       setMovies(request.data.results);
//       // console.log(request)
//       return request;
//     }
//     fetchData();
//   }, [fetchUrl]);
//   // console.log(movies);

//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row__posters">
//         {movies.map((movie) => (
//           <img
//             className={`row__poster ${isLargeRow && "row__posterLarge"}`}
//             scr={`${base_Url}${movie.poster_path}`}
//             alt={movie.name}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Row;
