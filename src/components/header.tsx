import mriLogo from '../assets/images/mriLogo-150x70.PNG'; // MrFixIt Logo Image
import { FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa';
import { Menu, Send, PhoneCall, MapPinCheck } from 'lucide-react';
import SideBar from './sideBar';
import { useState, useEffect } from "react";

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

     useEffect(() => {
    const handleScroll = () => {
        // Add the sticky class after scrolling down more than 50px
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);
    
    return(
        <div id="section-header">
            <SideBar  isOpen={isOpen} onClose={closeSidebar} />
            <header className={`sigma_header sigma_header-absolute style-18 can-sticky ${isSticky ? "sticky" : ""}`}>
                <div className="sigma_header-top dark-bg">
                    <div className="container-fluid">
                        <div className="sigma_header-top-inner">
                            <div className="sigma_header-top-links">
                                <ul className="sigma_header-top-nav">
                                    <li>
                                        <a href="tel:0858412277">
                                        <span className="symbolspan"><PhoneCall size={16} strokeWidth={2} /></span>
                                        0858412277
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:joe.byrne@live.ie">
                                        <span className="symbolspan"><Send size={16} strokeWidth={2} /></span>
                                        info@mrfixit.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                        <span className="symbolspan"><MapPinCheck size={16} strokeWidth={2} /></span>
                                        Dublin, Ireland.
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sigma_header-top-contacts">
                                <ul className="sigma_header-top-nav">
                                    <li> <a href="/"><FaFacebookF size={15} /></a>
                                    </li>
                                    <li> <a href="/"><FaTwitter size={15} /></a>
                                    </li>
                                    <li> <a href="/"><FaInstagram size={15} /></a>
                                    </li>
                                    <li> <a href="/"><FaGoogle size={15} /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sigma_header-middle">
                    <div className="container-fluid">
                        <div className="navbar">
                            <div className="sigma_logo-wrapper">
                                <a className="sigma_logo" href="/">
                                    <img 
                                        src={mriLogo} 
                                        alt="logo" 
                                        width="200" 
                                    />
                                </a>
                            </div>
                            <ul className="navbar-nav">
                                <li className="menu-item">
                                    <a href="#section-about" className="nav-link">About</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#section-services" className="nav-link">Services</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#section-portfolio" className="nav-link">Portfolio</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#section-team" className="nav-link">Team</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#section-pricing" className="nav-link">Pricing</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#section-maint_tips" className="nav-link">Tips</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#section-blog" className="nav-link">Blog</a>
                                </li>
                                <li className="menu-item">
                                    <a href="#section-contact-form" className="nav-link">Contact</a>
                                </li>
                            </ul>
                            <div className="siderbar_div">
                                <ul className="">
                                    <li className="sidebar_bar_control" onClick={toggleSidebar}>
                                        <Menu size={34} strokeWidth={1.5} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 
        </div>
    );

};




 