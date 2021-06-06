import React from 'react';
import Navbar2 from "../../Navbar/Navbar2/Navbar2.js";
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed.js';
import './Accueil.css'
import SidebarRight from './SidebarRight/SidebarRight'


const Accueil = () => {  

    return(
      <div className="Accueil" >
          <Navbar2/>
        <div className="Accueil_body">
          <Sidebar/>
          <Feed/>
          <SidebarRight/>
        </div>
      </div>
    );
};

export default Accueil;

                  