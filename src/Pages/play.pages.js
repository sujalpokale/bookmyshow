import React from "react";
import Poster from "../Component/Poster/poster.component";
import PlaysFilter from "../Component/Plays.Filter/Play.filter.com";
const Plays = () =>{
    return(
        <>
        <div className="container mx-auto px-4">

        <div className="w-full lg:flex lg:flex-row-reverse" >
            <div className="lg:w-8/12">
            <h2 className="text-2xl font-bold font-serif"> Plays in Nagpur </h2>
            <div className="flex flex-wrap">
             <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4 ">   
            <Poster 
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397866-shvcvjglfj-portrait.jpg"
            title="WRISTWATCH by Divyansh Rana"
            subtitle="English/Hindi ₹199 onwards"
            /></div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4 ">   
            <Poster 
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397866-shvcvjglfj-portrait.jpg"
            title="WRISTWATCH by Divyansh Rana"
            subtitle="English/Hindi ₹199 onwards"
            /></div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4 ">   
            <Poster 
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397866-shvcvjglfj-portrait.jpg"
            title="WRISTWATCH by Divyansh Rana"
            subtitle="English/Hindi ₹199 onwards"
            /></div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4 ">   
            <Poster 
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397866-shvcvjglfj-portrait.jpg"
            title="WRISTWATCH by Divyansh Rana"
            subtitle="English/Hindi ₹199 onwards"
            /></div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4 ">   
            <Poster 
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397866-shvcvjglfj-portrait.jpg"
            title="WRISTWATCH by Divyansh Rana"
            subtitle="English/Hindi ₹199 onwards"
            /></div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4 ">   
            <Poster 
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397866-shvcvjglfj-portrait.jpg"
            title="WRISTWATCH by Divyansh Rana"
            subtitle="English/Hindi ₹199 onwards"
            /></div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4 ">   
            <Poster 
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397866-shvcvjglfj-portrait.jpg"
            title="WRISTWATCH by Divyansh Rana"
            subtitle="English/Hindi ₹199 onwards"
            /></div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4 ">   
            <Poster 
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA2IEp1bA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00397866-shvcvjglfj-portrait.jpg"
            title="WRISTWATCH by Divyansh Rana"
            subtitle="English/Hindi ₹199 onwards"
            /></div>
            </div>
            </div>

            <div className="lg:w-1/4 ">
            <h2 className="text-2xl font-bold font-serif"> Filter  </h2>
            
            <div>
                <PlaysFilter title="Date" tags={["Today","Tomorrow","Monday"]}/>
                <PlaysFilter title="language" tags={["English","Hindi"]}/>
                <PlaysFilter title="Categories" tags={["Storytelling","Theatr",]}/>
                <PlaysFilter title="Genres" tags={["Today","Tomorrow","Monday"]}/>
                <PlaysFilter title="More Filter" tags={["Today","Tomorrow","Monday"]}/>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Plays;