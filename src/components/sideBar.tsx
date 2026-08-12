import sidebar_img from '../assets/images/sidebar_img/mriLogo-150x70.PNG';
import type { SidebarProps } from '../types';

export default function SideBar({ isOpen, onClose }: SidebarProps){
 return(
    <>
      {/* Backdrop overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      {/* Sidebar drawer */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sigma_close aside-trigger" onClick={onClose}>
                <span></span>
                <span></span>
            </div>
            <div className="sigma_logo-wrapper">
                <a className="sigma_logo" href="index.html">
                {/* <img src="assets/img/mriLogo-150x70.PNG" alt="logo"> */}
                    <img 
                        src={sidebar_img} 
                        alt="logo" 
                        width="200" 
                    />
                </a>
            </div>
            <ul className="navbar-nav">
                <li className="menu-item">
                    <a href="#section-about">About</a>
                </li>
                <li className="menu-item">
                    <a href="#section-services">Services</a>
                </li>
                <li className="menu-item">
                    <a href="#section-portfolio">Portfolio</a>
                </li>
                <li className="menu-item">
                    <a href="#section-team">Team</a>
                </li>
                <li className="menu-item">
                    <a href="#section-pricing">Pricing</a>
                </li>
                <li className="menu-item">
                    <a href="#section-maint_tips">Tips</a>
                </li>
                <li className="menu-item">
                    <a href="#section-blog">Blog</a>
                </li>
                <li className="menu-item">
                    <a href="#section-contact-form">Contact</a>
                </li>
            </ul>
      </aside>
    </> 
 );
}