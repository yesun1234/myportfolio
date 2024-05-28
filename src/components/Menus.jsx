import React from 'react'
import styled from 'styled-components'

const MainLink = styled.a`
   display:flex;
   align-items:center;
   text-transform: capitalize;
`;
const Links = styled.span`
   display:inline-block;
   width:15px;
   height:10px;
   border-radius:50%;
   border:3px solid #ddd;
   position:relative;
   transition: all 0.3s ease;
   &:first-child::after{
            content:"";
            display:inline-block;
            width:16px;
            height:3px;
            background:#ddd;
            border-radius:2px;
            position:absolute;
            left:6px;
            transition: width 0.3s ease
   }  
   &:last-child{
      margin-left:3px;
      margin-right:10px;
      transition: margin-left 0.3s ease;
   }  
`;
const HoverLink = styled(MainLink)`
   &:hover ${Links}:first-child::after{
      width:25px; 
   }
   &:hover ${Links}:last-child{
      margin-left: 13px;
   }
`;
const ActiveLink = styled(MainLink)`
   color:yellow;
   font-weight:600;
   text-decoration:underline;
   ${Links}:first-child::after{
      width:25px;
   }
   ${Links}:last-child{
      margin-left: 13px;
   }
`;

const Menus = ({navtitle, navLink, navActive, setNavActive}) => {

  const handleLink = (links) => {
     setNavActive(links);
  }

  const activeLinks = <ActiveLink href={'#'+navLink} onClick={()=>handleLink(navLink)}>
                      <Links />
                      <Links />
                      {navtitle}
                      </ActiveLink>;
  const hoverLinks = <HoverLink  href={'#'+navLink} onClick={()=>handleLink(navLink)}>
                     <Links />
                     <Links />
                     {navtitle}
                     </HoverLink>;
  
  return  navActive && navActive === navLink ? 
          activeLinks:hoverLinks
}

export default Menus