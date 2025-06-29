
//transforms components into another Components
//Adding additional functionalities to the existing compoents

import React from "react";

//layout
import DefaultLayout from "../Layout/default.layout";

const DefaultHOC = ({component: Component}) => {
    return (
    
      
        <DefaultLayout> 
          <Component />
        </DefaultLayout>
      
    
    );
};

export default DefaultHOC;

