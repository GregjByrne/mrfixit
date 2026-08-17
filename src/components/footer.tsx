 import footer_img from '../assets/images/footer_img/mfi_logo_white_150x70.webp';
 import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
 
 export default function FooterSection(){
    return(
        <div id="section-footer">
            <footer className="sigma_footer sigma_footer-dark">
                <div className="container">
                    <div className="sigma_footer-middle text-center">
                        <div className="sigma_footer-logo">
                            <img 
                                src={footer_img} 
                                alt="Mr Fix It Logo"
                                width={150}
                                height={70}
                            /> 
                        </div>
                            <ul className="sigma_footer-links">
                                <li>
                                <a href="#">Home</a>
                                </li>
                                <li>
                                <a href="#section-about">About</a>
                                </li>
                                <li>
                                <a href="#section-blog">Blog</a>
                                </li>
                                <li>
                                <a href="#section-contact-form">Contact</a>
                                </li>
                            </ul>
                            <ul className="sigma_social-icons">
                                <li>
                                    <a href="#section-footer" aria-label="Link Mr Fix It to Facebook">
                                        <FaFacebookF size={25} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#section-footer" aria-label="Link Mr Fix It to Twitter">
                                        <FaTwitter size={25}  />
                                    </a>
                                </li>
                                <li>
                                    <a href="#section-footer" aria-label="Link Mr Fix It to Instagram">
                                        <FaInstagram size={25}  />
                                    </a>
                                </li>
                            </ul>
                        <div className="sigma_footer-copyright">
                            <p className="mb-0">&copy; Conuresites -
                            <a href="#section-footer" aria-label="Link Conuresites to your Socials">2025</a>
                        </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
 }   