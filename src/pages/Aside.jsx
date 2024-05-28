import React from 'react'
import Header from './Header'
import Nav from './Nav'

const Aside = () => {
  return (
    <aside>
       <Header /> 
       <p className="title-desc d-none d-md-block mt-0 mt-md-2">
         I'm new full-stack developer. I mainly use Java,
         bufds alfjdsa klfjdsla;fjdsa. dsfdfdfd.
       </p>
       <Nav />
    </aside>
  )
}

export default Aside