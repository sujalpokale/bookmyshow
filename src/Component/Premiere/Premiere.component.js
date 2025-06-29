import React from "react";
import Slider from "react-slick";

//components
import Poster from "../Poster/poster.component";
//config
import settings from "../../config/Poster.config";
//images
import PremierImages from "../../config/Temp.poster";

export const Premier = () => {
   

return(<>
    <div className="flex flex-col items-start">
        <h3 className="text-white text-xl font-bold px-6"> Premier </h3>
        <p className="text-white text-sm  px-6">  Brand new releasese every Friday

        </p>
    </div>
    <Slider {...settings}>
        {PremierImages.map((image)=>(
            <Poster {...image} isDark />
        ))}
    </Slider>
    </>)

};

export default Premier; 

