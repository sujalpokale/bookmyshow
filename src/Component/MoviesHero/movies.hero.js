import React from "react";

const MoviesHero = () => {
  return (
    <>
      <div className="md:hidden">
        <img 
          src="https://i.ytimg.com/vi/nE_2Mxustts/maxresdefault.jpg" 
          alt="Movie Poster" 
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <img 
          src="https://i.ytimg.com/vi/nE_2Mxustts/maxresdefault.jpg" 
          alt="Movie Poster" 
        />
      </div>

      <div className="relative  hidden lg:block " style={{height:"30rem"}} >
        <div 
          className="absolute h-full w-full z-10"
          style={{
            backgroundImage: `linear-gradient(
              80deg, 
              #1A1A1A 24.97%, 
              #1A1A1A 38.3%, 
              rgba(26, 26, 26, 0.0409746) 97.47%, 
              #1A1A1A 100%
            ),
            url("https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/munjya-et00398936-1716358299.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "30rem"
          }}
            >
        <div className="container mx-auto py-4 ">
          <div className=" flex-row-reverse items-center">
          <div className="absolute z-30 w-96 h-96 left-24 top-10 ">
            <img 
              src="https://i.ytimg.com/vi/nE_2Mxustts/maxresdefault.jpg" 
              alt="Movie Poster" 
              className="h-full w-full rounded-xl"
            />
          </div>
          

        </div>
      </div>
    </div>
  </div>

    </>
  );
};

export default MoviesHero;
