import React, { useEffect, useState } from "react";
import HeroSlider from "react-slick";
import axios from "axios";
// components
import { NextArrow, PrevArrow } from "./Arrows.components";

// import css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            try {
                const getImages = await axios.get("/movie/now_playing");
                setImages(getImages.data.results);
            } catch (error) {
                console.error("Error fetching now playing movies: ", error);
            }
        };
        requestNowPlayingMovies();
    }, []);

    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "100px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const settings = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {images.map((image) => (
                        <div key={image.id} className="w-full h-64 md:h-80 py-3 px-2">
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt={image.title}
                                className="w-full h-full rounded-md"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
            <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>
                    {images.map((image) => (
                        <div key={image.id} className="w-full h-96 px-2 py-3">
                            <img
                                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                                alt={image.title}
                                className="w-full h-full rounded-md"
                            />
                        </div>
                    ))}
                </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousal;
