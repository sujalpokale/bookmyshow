import React from "react";

import MovieNavbar from "../Component/Navbar/Movies.navbar";

const MoviesLayout = (props)=>{

    return(
        <>
          <MovieNavbar/>
           {props.children}
        </>
    )
};

export default MoviesLayout;