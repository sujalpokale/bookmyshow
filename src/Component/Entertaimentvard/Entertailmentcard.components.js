import React from 'react'
import HeroSlider from "react-slick";

const Entertaimentcard = (props)=> {

    return(
        <>
        <div className='w-full h-30 px-2'>
            <img 
            className="w-full h-full rounded-xl" 
            src={props.src} 
            alt="Entertainment Image"/>
        </div>
        </>
    );
};

const EntertaimentcardSider = () => {
    const EntertaimentImage =[
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NSBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-amusement-park-collection-202404190106.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-NCBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png"
    ];
const settings ={
    arrows: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite:true,
}

    return(
        <>
        <HeroSlider {...settings}>
            {EntertaimentImage.map((image) =>(
                <Entertaimentcard src={image}/>
            ))}
        </HeroSlider>
        </>
    )
}

export default EntertaimentcardSider;