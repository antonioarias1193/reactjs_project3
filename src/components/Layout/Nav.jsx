
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faBars, faX, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import React, { Fragment, useState } from 'react'
import Button from './Button'
import Logos from './Fragment/Input/Element/Logos'

const Nav = () => {
    return (
        <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-[20vw] px-10 ">
            <Heading></Heading>
            <Menu></Menu>
            {/* <MenuProduct></MenuProduct> */}
        </div>
    </div>
  )
}

const MenuProduct = () => {
    let [open,setOpen]=useState(false)
    return(
        <>
            <div className=''>
                <ul className='hidden md:grid grid-flow-col gap-10 text-xl font-medium'>
                    <li>
                        About
                    </li>
                    <li>
                        Product
                    </li>
                </ul>
            </div>
        </>
    )
}

const Menu = () => {
    let Links = [
        {name:"About", link:"/", icon:"" },
        {name:"Product", link:"/", icon:<FontAwesomeIcon icon={faCaretDown} /> },
    ]
    let [open,setOpen]=useState(false)
    return(
        <Fragment>
            <div onClick={()=>setOpen(!open)}
            className='text-3xl absolute right-8 top-6
            cursor-pointer md:hidden'>
                <Logos Icon={open ? faX:faBars}></Logos>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 
            pb-12 absolute md:static bg-white md:z-auto z-[-1]
            left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
            duration-300 ease-in ${open ? 'top-16 opacity-100':'top-[-100px] opacity-0'} md:opacity-100`}>
                {
                    Links.map((Link)=>(
                        <li key={Link.name} className='md:ml-8 text-xl font-medium md:my-0 my-7'>
                            <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-300'>{Link.name}
                            {" "} {Link.icon}
                            </a>
                        </li>
                    ))
                }
            </ul>

        </Fragment>
    )
}

const DesktopMenu = () => {
    
}

const Heading = () => {
    return(
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
            text-gray-800'>
                <Logos Icon={faBullseye}
                ClassName='text-indigo-600' />
                Designer
        </div>
        )
}

export default Nav