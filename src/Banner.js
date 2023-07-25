import React, { useEffect, useState } from 'react'
import "./Banner.css";
import axios from "./axios";
import requests from './requests';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // Fetch a random movie for the banner when the component mounts
    const fetchData = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * response.data.results.length
      );
      setMovie(response.data.results[randomIndex]);
    };

    fetchData();
  }, []);

  // Truncate the movie overview text if it is too long
  const truncateOverview = (text, maxLength) => {
    return text?.length > maxLength
      ? text.substr(0, maxLength - 1) + "..."
      : text;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncateOverview(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;






// function Banner() {
//     const [movie, setMovie] = useState([]);
//     useEffect(()=>{
//        async function fetchData(){
//         const request = await axios.get(requests.fetchNetflixOriginals)
//         setMovie(
//             request?.data.results[
//             Math.floor(math.random()* request.data.results.length)
//         ]    ); 
//         return request;
//     };
//        fetchData();  
//     },[])
//     function truncate (str,n){
//         return str?.length > n ? str.substr(0, n-1)+ "...": str;
//     }
//     return (
//         <header 
//         className="banner"
//         styel={{
//             backgroundsize:"cover",
//             backgroundimage:`"url"("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
//             backgroundpositon: "center center",
//         }}
        
//     >
//         <div className='Banner__contents'>
// <h1 className='banner__titel'>
//     {movie?.titel || movie?.name || movie.original_name}
// </h1>
// <div className='Banner__Buttons'>
// <button className='Banner__button'>play</button>
// <button className='Banner__button'>My List</button>
// </div>
        
//     <h1 className='banner__descripion'>{truncate(movie?.overview,150)}</h1>
//         </div>
 
//     <div className='banner__fadeBottom'/>

//     </header>
//   );
// }

// export default Banner
