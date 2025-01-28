
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import cmpLogo from "../assets/cmpLogo.png"

const Navbar = () => {
    const [barOpen, setBarOpen] = useState(false)
  // const [isOpen, setIsOpen] = useState(false)

    const navLink = [
        <>
          <NavLink to={'/'} className={({isActive}) => isActive ? ' mx-2 px-3 py-1 text-green-600 font-medium' : ' text-gray-600  mx-2 px-3 py-1 font-medium'}>Home</NavLink>
          <NavLink to={'/login'} className={({isActive}) => isActive ? 'px-3 mx-2 py-1 text-green-600 font-medium' : 'text-gray-800 mx-2 px-3 py-1 font-medium'}>Login</NavLink>
          <NavLink to={'/signup'} className={({isActive}) => isActive ? 'px-3 mx-2 py-1 text-green-600 font-medium' : 'text-gray-800 mx-2 px-3 py-1 font-medium'}>Sign up</NavLink>
          <NavLink to={'/menu'} className={({isActive}) => isActive ? 'px-3 mx-2 py-1 text-green-600 font-medium' : 'text-gray-800 mx-2 px-3 py-1 font-medium'}>Menu</NavLink>
      </>
    ]

    
    return (
        <div className='bg-gray-200'>
      <div className="  py-4 px-2 dark:bg-gray-100 dark:text-gray-800 shadow-xl fixed w-full border border-gray-300 z-50">
        <div className="max-w-7xl flex justify-between items-center h-12 mx-auto ">
          {/* Left Side bar toggle */}
            <button onClick={()=> setBarOpen(true)} className="p-4 lg:hidden">
             <FaBars size={20}></FaBars>
            </button>
            <div  className={` ${barOpen  ? ' ml-0': '-ml-80'} bg-gray-50 w-[180px] top-0 left-0 -pt-4 -pl-2 lg:hidden absolute h-screen duration-200 delay-100`} > 
              <img className="w-8 h-8 mt-3 ml-4" src={cmpLogo} alt="" />
              <button onClick={()=> setBarOpen(false)} className=" absolute top-2 right-2 p-2">
                 <RxCross2 size={20}></RxCross2>
              </button>
              <ul className=" flex flex-col space-y-2 mt-3">
                <NavLink to={'/'} className={({isActive}) => isActive ? ' mx-2 px-3 py-1 bg-green-50 border border-gray-200 rounded-md text-green-600 font-medium' : ' text-gray-600 border border-gray-200 rounded-md mx-2 px-3 py-1 font-medium'}>Home</NavLink>
               
                <NavLink to={'/login'} className={({isActive}) => isActive ? 'px-3 bg-green-50 border border-gray-200 rounded-md mx-2 py-1 text-green-600 font-medium' : 'text-gray-800 mx-2 px-3 py-1 border border-gray-200 rounded-md font-medium'}>Login</NavLink>
              </ul>
          </div>
          
          <div className="flex items-center gap-x-2 ">
            <Link to={'/'} className=" ">
            <img className="w-12 h-12 " src={cmpLogo} alt="" />
            
            </Link>
            <h2 className="uppercase text-lg md:text-2xl xl:text-3xl font-bold"> <span className="bg-gradient-to-r  from-green-600 to-pink-400 text-transparent bg-clip-text animate-gradient">FOOD CORNER</span></h2>
          </div>
          <ul className="items-stretch hidden space-x-3 lg:flex">
          {navLink}
          </ul>
          <div className="items-center  flex-shrink-0 relative flex gap-x-3">
            <Link to={'/login'}><button className="self-center  rounded">Log in</button> </Link>
            
          
             
          </div>
        </div>
      </div>
    </div>
    );
};

export default Navbar;