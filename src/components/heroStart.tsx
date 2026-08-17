import heroStart_img from '../assets/images/project_img/worker_740x685.webp'; // Hero Section Image
import { PhoneCall } from 'lucide-react';


export default function HeroStart(){

    return(
        <div id="section-hero">
            <div className="sigma_banner bg-secondary-1 style-11">
                <div className="banner-slider-inner">
                    <div className="container">
                        <div className="sigma_banner-text">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h1 className="title">
                                    Welcome to Quality Home Repair and Maintenance Services</h1>
                                    <p className="text-white">Mr. Fix It, is your local handyman for all home repairs and maintenance, providing quality services at affordable prices.</p>
                                    <div className="banner-links d-flex align-items-center banner_phone">
                                        <a href="tel:0858412277">
                                            <span className="symbolspan"><PhoneCall size={16} strokeWidth={2} /></span>
                                            0858412277
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="sigma_banner-image has-animation d-none d-sm-block">
                                <img 
                                    src={heroStart_img} 
                                    alt="projects" 
                                    style={{ width: 'auto', height: 'auto' }} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}