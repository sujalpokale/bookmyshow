import React , {useEffect , useState} from "react";
import axios from "axios";
//components
import HeroCarousal from "../Component/HeroCarousal/HeroCarousal.component";
import EntertaimentcardSider from "../Component/Entertaimentcard/Entertailmentcard.components";
import Premier from "../Component/Premiere/Premiere.component";
import PosterSlider from "../Component/PosterSlider/PosterSlider";

const Homepage = (props) =>{
     
    const [popularMovies , setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () =>{
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    },[]);

    return (
    <>
        <HeroCarousal/>
        <div className="container mx-auto px-2 ">
            <h3 className="text-2xl font-bold text-gray-800 px-2 py-2">Recommended Movies</h3>
            <PosterSlider
        images={popularMovies}
        
        />

        </div>
        <div className="flex flex-col gap-6 ">
        <div className="container mx-auto px-4 ">
            <h2 className="text-2xl font-bold text-gray-800 px-2 py-2"> The Best Of Live events </h2>
            <EntertaimentcardSider/>
            
        </div>
        <div className=" container mx-auto py-4 "> 
            <div className="items-center">
            <img src={`https://image.tmdb.org/t/p/original${props.poster_path || ""}`}
                    alt={props.title || "default title"}
            
            className="w-full h-full"/></div>
        </div>
        <div className="bg-slate-700 py-6">
            <div className="container mx-auto px-4 text-white flex flex-col gap3">
            <div className="flex ">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
                alt="Rupay"
                className="w-full h-full"/>
            </div>
            <div className="container mx-auto px-4">
        <PosterSlider
        images={popularMovies}
        title="Primres"
        />

        </div>
            </div>
        </div>
        </div>
        <div className="container mx-auto px-4">
        <PosterSlider
        images={popularMovies}
        title="Your Music Studio"
        />

        </div>
        <div className="container mx-auto px-4">
        <PosterSlider
        images={popularMovies}
        title="Explor Fun Activites"
        />
        </div>
    </>
      );
      };
      


export default Homepage;