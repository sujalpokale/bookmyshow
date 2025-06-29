import React from "react";

//layout
import MoviesLayout from "../Layout/movies.layout";

const MociesHOC = ({component: Component}) => {
    return (
     
        <MoviesLayout> 
          <Component />
        </MoviesLayout>
      
   
    );
};

export default MociesHOC;