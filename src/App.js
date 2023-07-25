import React from "react";
// import "./App.css";
import requests from "./requests";
// import "./Row.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner  />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="TopRatedMovies"fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="ActionMovies"fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies"fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies"fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies"fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries "fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
