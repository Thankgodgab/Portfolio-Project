import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Gabriel-logo-light.png";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import CtaBtn from "../organisms/CtaBtn";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      return !prev;
    });
  };

    return (
        <header className="w-full bg-transparent max-h-[100px] flex items-center justify-center  z-5">
            <div className="w-full h-full flex items-center justify-between px-2.5 py-4 border-b border-divider md:border-none">
                <div className="p-2.5 h-[80px] w-[150px] lg:h-[100px] lg:w-[200px] flex items-center justify-center">
                    <img src={logo} alt="Gabriel logo" className="h-full w-full object-contain" />
                </div>
                <div className="hidden p-2.5 w-[80%] md:flex items-center justify-center h-full ">
                    <div className="px-5 max-w-full h-full flex items-center justify-center bg-divider rounded-4xl">
                        <nav className="w-full h-full flex items-center justify-center">
                            <div className="w-full h-full flex items-center justify-center">
                                <ul className="w-full gap-7 flex items-center justify-center h-full">
                                    <li className="w-full h-full flex items-center justify-center group ">
                                         <NavLink to="/" className={({ isActive }) => `py-[22px] px-[15px] text-[16px] font-semibold ${isActive ? "text-yellow-400" : "text-white"} group-hover:text-accent-secondary transition-colors duration-300 ease-in-out`}>Home</NavLink>
                                    </li>
                                    <li className="w-full h-full flex items-center justify-center group ">
                                         <NavLink to="/about" className={({ isActive }) => `py-[22px] px-[15px] text-[16px] font-semibold ${isActive ? "text-yellow-400" : "text-white"} group-hover:text-accent-secondary transition-colors duration-300 ease-in-out`}>About</NavLink>
                                    </li>
                                    <li className="w-full h-full flex items-center justify-center group ">
                                         <NavLink to="/services" className={({ isActive }) => `py-[22px] px-[15px] text-[16px] font-semibold ${isActive ? "text-yellow-400" : "text-white"} group-hover:text-accent-secondary transition-colors duration-300 ease-in-out`}>Services</NavLink>
                                    </li>
                                    <li className="w-full h-full flex items-center justify-center group ">
                                         <NavLink to="/portfolio" className={({ isActive }) => `py-[22px] px-[15px] text-[16px] font-semibold ${isActive ? "text-yellow-400" : "text-white"} group-hover:text-accent-secondary transition-colors duration-300 ease-in-out`}>Portfolio</NavLink>
                                    </li>
                                    <li className="w-full h-full flex items-center justify-center group ">
                                         <NavLink to="/contact" className={({ isActive }) => `py-[22px] px-[15px] text-[16px] font-semibold ${isActive ? "text-yellow-400" : "text-white"} group-hover:text-accent-secondary transition-colors duration-300 ease-in-out`}>Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="w-[20%] flex items-center justify-end grow p-2.5">
                    <div className="hidden lg:flex items-center justify-center h-full">
                        <a href="#">
                            <CtaBtn text="Download CV" />
                        </a>
                    </div>
                    <div className="md:hidden flex items-center justify-center  bg-gradient-to-r from-accent-secondary to-accent rounded-lg text-primary">
                        <button className="p-[10px] w-full h-full flex items-center justify-center" onClick={toggleMenu}>
                            <FaBars size={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`z-55 fixed top-0 left-0 h-full w-full bg-gradient-to-r from-accent-secondary to-accent p-2.5 flex flex-col transform ${ isMenuOpen ? "translate-x-0" : "-translate-x-full" } transition-transform duration-300 ease-in-out`}>
                <div className="w-full h-12 flex items-center justify-end border-b-2 border-divider py-[30px]">
                    <div className="md:hidden flex items-center justify-center  bg-primary rounded-lg text-white">
                        <button className="p-[10px] w-full h-full flex items-center justify-center" onClick={toggleMenu}>
                            <LiaTimesSolid size={20} />
                        </button>
                    </div>
                </div>
                <div className="w-full  flex  justify-start">
                    <ul className="w-full flex flex-col items-center justify-start">
                        <li className="w-full h-full flex items-center group ">
                             <NavLink to="/" className={({ isActive }) => `py-[15px] px-[15px] text-[16px] font-semibold ${isActive ? "text-yellow-400" : "text-primary"} group-hover:text-accent-secondary transition-colors duration-300 ease-in-out`}>Home</NavLink>
                        </li>
                        <li className="w-full h-full flex items-center group ">
                             <NavLink to="/about" className={({ isActive }) => `py-[15px] px-[15px] text-[16px] font-semibold ${isActive ? "text-yellow-400" : "text-primary"} group-hover:text-accent-secondary transition-colors duration-300 ease-in-out`}>About</NavLink>
                        </li>
                        <li className="w-full h-full flex items-center group ">
                             <NavLink to="/services" className={({ isActive }) => `py-[15px] px-[15px] text-[16px] font-semibold ${isActive ? "text-yellow-400" : "text-primary"} group-hover:text-accent-secondary transition-colors duration-300 ease-in-out`}>Services</NavLink>
                        </li>
                        <li className="w-full h-full flex items-center group ">
                             <NavLink to="/portfolio" className={({ isActive }) => `py-[15px] px-[15px] text-[16px] font-semibold ${isActive ? "text-yellow-400" : "text-primary"} group-hover:text-accent-secondary transition-colors duration-300 ease-in-out`}>Portfolio</NavLink>
                        </li>
                        <li className="w-full h-full flex items-center group ">
                             <NavLink to="/contact" className={({ isActive }) => `py-[15px] px-[15px] text-[16px] font-semibold ${isActive ? "text-yellow-400" : "text-primary"} group-hover:text-accent-secondary transition-colors duration-300 ease-in-out`}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-5 right-5 bg-accent-secondary text-white p-3 rounded-full shadow-lg hover:bg-accent hover:scale-105 transition transform">↑</button>
</header>
    )
}

export default Header