
import React from 'react'
import { Link } from 'react-router-dom'

function Navsec() {
    const navlink = [{
        name: "Home",
        path: "/"
    },{
        name: "About",
        path: "/about",
    },{
        name: "Contact",
        path: "/contact",
    }]
  return (  
    <>
        <nav>
            <ul className='d-flex justify-content-center'>
                {
                    navlink.map((item) => {
                        return(
                            <Link to={item.path} className='navbar'>{item.name}</Link>
                        )
                    })
                }
            </ul>
        </nav>
    </>
  )
}

export default Navsec
