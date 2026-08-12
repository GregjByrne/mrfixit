 import footer_img from '../assets/images/footer_img/mfi_logo_white_150x70.png';
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
                                    <a href="#">
                                        {/* <i className="fab fa-facebook-f"></i> */}
                                        <FaFacebookF size={25} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {/* <i className="fab fa-twitter"></i> */}
                                        <FaTwitter size={25}  />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                        <FaInstagram size={25}  />
                                    </a>
                                </li>
                            </ul>
                        <div className="sigma_footer-copyright">
                            <p className="mb-0">&copy; Conuresites -
                            <a href="#">2025</a>
                        </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    );
 }   