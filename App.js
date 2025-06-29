import React from "react";
import { Routes, Route } from "react-router-dom";
//axios
import axios from "axios";

// HOCs
import DefaultHOC from "./HOC/default.hoc";
import MoviesHOC from "./HOC/Movies.Hoc";
// Components
import Homepage from "./Pages/home.page";
import Movie from "./Pages/movies.pages";
import Plays from "./Pages/play.pages";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"]= process.env.REACT_APP_API_KEY ;
function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultHOC component={Homepage} />} />
      <Route path="/movies/:id" element={<MoviesHOC component={Movie} />} />
      <Route path="/plays" element={<DefaultHOC component={Plays} />} />
    </Routes>
  );
}

export default App;
