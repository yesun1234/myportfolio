import React, {useState, useContext } from 'react'
import Menus from '../components/Menus'
import { DataContext } from '../context/DataProvider';
import { RiMenuFill } from "react-icons/ri";

const Nav = () => {
    const { menu } = useContext(DataContext);
    const [navActive, setNavActive] = useState('about');

    return (
    <nav>
       <ul className="mynav">
       {
         menu.map((item, index)=>(
            <li key={index}>
               <Menus 
                  navtitle={item.name} 
                  navLink={item.link} 
                  navActive={navActive} 
                  setNavActive={setNavActive} /> 
            </li>
         ))
       } 
       </ul> 
       <div className="mobile-menu d-block d-md-none"><RiMenuFill /></div>
    </nav>
  )
}

export default Nav