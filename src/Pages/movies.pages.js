import React from "react"; import MoviesHero from "../Component/MoviesHero/movies.hero"; import { BiCameraMovie } from "react-icons/bi";

import settings from "../config/Poster.config";
import CastSlider from "../Component/PosterSlider/Cast,poster";

const launchRazorPay = () =>{
    let options = {
        key: "rzp_test_8KdLnSulCeMZiK",
        amount: 20000,
        currency:"INR",
        description : "Movie Purches on Rental",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7N4_6FnK6MvQg1lQVkWTM6tZPKz81VrGfMQ&s",
        handler: () =>{
            alert("Payment Done")
        },
        theme:{color:'#c4242d'}
    };
    let rzp = new window.Razorpay(options)
    rzp.open();
};

const Movie =()=>{ return(
    <>
        <MoviesHero/>
        <div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
            <div className="flex flex-col items-start gap-3">
                <h2 className="text-gray-800 font-bold text-2xl"> About the movie </h2>
                <p>A young man`s visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya`s clutches leading to a humorously chaotic
                    and terrifying adventure </p>
            </div>
    
            <div className="my-8">
                <hr />
            </div>
            <div className="flex flex-col items-start gap-3">
                <h1 className="text-gray-800 font-bold text-2xl">Applicable offers </h1>
                <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-72">
                    <div className="w-8 h-8 ">
                        <BiCameraMovie className="w-full h-full" /> </div>
    
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-800 text-lg"> Filmy Pass </h3>
                        <p className="text-gray-600 text-sm"> Get Rs.75*off on 3 movies you on Stream, Buy Filmy Pass @Rs.99 </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto px-4">
        <CastSlider 
        images={settings}
        title="Cast"
        />
        </div>
        <button onClick={launchRazorPay} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Book Tickets</button>
        </> ); };
         export default Movie;