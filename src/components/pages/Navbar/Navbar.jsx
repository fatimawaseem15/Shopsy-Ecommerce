import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../../assets/logo.png"
// import DarkMode from './DarkMode';
const menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "About",
        link: "/about"
    },
    {
        id: 3,
        name: "Services",
        link: "/services"
    },
    {
        id: 4,
        name: "Contact",
        link: "/contact"
    }
];





function Navbar() {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 text-black duration-200 relative z-40" >
        {/* upper Navbar */}
        <div className='bg-primary/40 py-2'>
            <div className='container flex justify-between items-center'>
                <div>
                    <a href="#"
                    className='font-bold text-2xl sm:text-3xl flex gap-2'>
                    <img src={logo} alt="logo" className='w-10 xs:h-6'/>
                    Shopsy
                    </a>
                </div>
                {/* search bar */}
                <div className='flex justify-between items-center gap-4'>
                    <div className='relative group hidden sm:block' >
                        <input type="text" placeholder='search'
                        className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"/>
                        <IoMdSearch 
                        className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
                    </div>
                     {/* order */}
                <div>
                    <div>
                        <button onClick={()=> alert("Ordering not available yet")}
                            className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                            <span className="group-hover:block hidden transition-all duration-200">
                                Order
                            </span>
                            <FaShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer' />
                        </button>
                    </div>
                 </div>
                     {/* DarkMode Switch */}
                     {/* <div>
                            <DarkMode />
                        </div> */}
             </div>     
        </div>
     </div>
     <div className='flex justify-center py-2' > 
     <ul className='sm:flex hidden items-center gap-4'>
    {menu.map((data) => (
        <li key={data.link}>
            <a className='inline-block px-4 hover:text-primary duration-200' href={data.link}>{data.name} </a>
        </li>
    ))}
    <li>
        <a href="#" className='flex items-center gap-[2px] px-2'>
            Trending
        </a>
    </li>
    </ul>
    </div>
</div>
  )
}

export default Navbar
