import React from "react";

//component
import Navbar from "../Component/Navbar/Navbar";


const DefaultLayout = (props) => {
    return (
        <>
           <Navbar/>
           {props.children}
        </>
    );
};

export default DefaultLayout;