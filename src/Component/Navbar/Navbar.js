import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { IoChevronDownSharp } from "react-icons/io5";


const NavSm = () => {
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div className="accent-green-600">
                <h3 className="text-xl font-bold">It All Start Here!</h3>
                <span className="text-gray-400 text-xs flex items-center">
                    Nagpur <IoChevronForwardSharp/>
                </span>
            </div>
            <div className="w-8 h-8">
                <FaSearch className="w-full h-full "/>
            </div>
        </div>
        </>
    )
};
const NavMg = () => {
    return(
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
            <FaSearch />
          <input type="search" className="w-full focus:outline-none" placeholder="Search the movice , event , etc."/>  
        </div>
    )
};
const NavLg = () => {
   return(<>
    <div className="container mx-auto px-4 flex items-center justify-between">
        <div className=" flex items-center w-1/2 gap-3">
            <div className="w-18 h-12 gap-3">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxETEhUSExMVFhUWGRoaGBgXFxcXFhUaFxcWFxcVFxgZHSggGholHRsaITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGS4mICYwMjIvKystLzM1Li0tMzcxLSsrLSsrKy0rLystLTIrKy8tLS0tLS03Ky0tLy0tNistLf/AABEIAIEBhQMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQECAwj/xABHEAABAwICBAsEBwUIAgMAAAABAAIDBBEFEgYHITETQVFhcXKBkaGxsiIyNHMUMzVCg7PBIyRSYpIlQ1OCosPS4RXCVGPR/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMFAQIEBv/EADQRAQACAQIEAgULBQAAAAAAAAABAgMEEQUSITFBURMiYYGhFCQzNUJxscHR4fAjMoKR8f/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFj19bHDG6WVwYxu9x3DiQZCLFwzEYqiMSwvD2OvYjm2EdKykBERAREQEREBERARF4VtZHCwySvDGN3uJsAg90WvwbG6eqaXQSB4abG1wQecFbBAREQF41lXHEx0kjg1jRdzjuAXsoFrexDJTMgB2yv29Vm09l7LW9uWsyn02Gc2WuOPGWFj+tNguyjjzn/ABH7GjobvPgt7q70ndWQlspHDxn2rC2ZpPsuA8OxUmtjo/jMlJO2ePaRcObewe072k9x7Fx11E83Xs9Pn4JijBNcUet5z4+x9DkrpBOx4zMcHDddpBFxvFwqGx7S6sq7h8hZH/hxktb2ne7tW+1U4/wMppHn9nKbx8jX8Y/zeY51PGes22hUZeDZseCctu8eHsW+i0+O6TUlILzSgO4mDa89DQsXRHS2KvEmRrmOYfdcRctO52xTc0b7K2MOSaTk5Z5fNIkRFlEIiICIiAiLh7gASTYDaSdw50HKLV4TpDS1LnMgma9zd4F79IvvHOtogIiICIiAiIgIiICIiAiIgIiICius4f2dL1o/zWKVKK6zvs6XrR/msQY+qgfuP4j/ANFMlDtVJ/cfxH/opigIiICISurXg7iCg7IiICIurZAd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" alt="logo" className="w-full h-full bg-transparent" />
            </div>
            <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
                <FaSearch />
                    <input type="search" className="w-full focus:outline-none" placeholder="Search the movice , event , etc."/>  
            </div>
        </div>
        </div>

        <div className="flex items-center gap-3">
        <span className="text-gray-400 text-xs flex items-center hover:text-black cursor-pointer">
                    Nagpur <IoChevronDownSharp/>
                </span>
        <button className="bg-red-600 text-white text-sm rounded px-2 py-1 ">SignIn
        </button>
        <div className="w-8 h-8 text-black"> 
            <BiMenu className="w-full h-full"/>
        </div>
    </div>
    </>
   )
};

const Navbar = () =>{
    return(
        <>
        <nav className="bg-teal-400 px-4 py-2">
            <div className="md:hidden">{
             /* Mobile Screen*/    
              <NavSm/>          
            }</div>
            <div className="hidden lg:hidden md:flex">{
             /* tablet Screen*/ 
               <NavMg/>           
            }</div>
            <div className="hidden lg:flex">{
             /* Laptop Screen*/   
                <NavLg/>
            }</div>
        </nav>
        </>
    )
};
export default Navbar;