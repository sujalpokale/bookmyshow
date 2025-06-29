import React from "react";
// import src , title , subtitle ,is Drak(bool)
const Poster = (props) =>{
    return(
        <>
        <div className="flex-clo items-start gap-2 px-3 py-2">
            <div className="h-80">
                <img  src={`https://image.tmdb.org/t/p/original${props.poster_path || ""}`}
                    alt={props.title || "default title"} className="w-full h-full rounded-xl" ></img>
            </div>
            
                <h3
                className={ 'text-lg font-bold ${ props.isDark ? "text-white":"text-gray-700"}' }
                >{props.title}</h3>
                <p
                 className={ 'text-lg font-bold ${ props.isDark ? "text-white":"text-gray-700"}' }

                >{props.subtitle}</p>
            </div>
        
        </>
    )
};

export default Poster;