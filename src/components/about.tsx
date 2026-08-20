import { CProgress, CProgressBar } from '@coreui/react';
import about_img from '../assets/images/project_img/builder_636x558.webp'; // About Sectionn Image

export default function AboutSection(){
 return (

        <div id="section-about">
            <div className="section sigma_about-skill sigma_about-sec style-17">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="sigma_about style-17 mb-5 mb-lg-0">
                                <div className="section-title">
                                    <span className="subtitle">About Us</span>
                                    <h3 className="title">Our Service Plans To Meet All Your Demands</h3>
                                    <p>
                                    Welcome to our business, established a decade ago with a foundation built on over 20 years of hands-on experience in the building trade. Our qualifications and extensive background in the industry ensure that every job, from painting to carpentry and wood flooring, plumbing, electrical,  and much more is handled with the highest level of expertise and care. <br />
                                    We pride ourselves on providing top-notch repair work for both residential and commercial properties. Whether it's a minor fix or a major renovation, we bring diligence, professionalism, and meticulous attention to detail to every project. <br />
                                    Unsure if we&#39;re the right fit for your needs? Give us a call, and we&#39;ll be more than happy to discuss any potential work with you. Our many satisfied customers are ready to vouch for our commitment to quality and excellence. <br />
                                    Let's talk about how we can help you today.
                                    </p>
                                </div>
                                <div className="sigma_about-content">
                                    <div className="sigma_progress">
                                        <h6>Flooring</h6>
                                        <CProgress animated variant="striped" className="rounded-pill">
                                            <CProgressBar
                                                role="progressbar"
                                                value={84}
                                                aria-label="Flooring Work"
                                                className="rounded-pill"
                                            />
                                        </CProgress>
                                    </div>
                                    <div className="sigma_progress with-secondary">
                                        <h6>Home Repairs</h6>
                                        <CProgress animated variant="striped" className="rounded-pill">
                                            <CProgressBar
                                                role="progressbar"
                                                value={70} 
                                                aria-label="Home Repairs"
                                                className="rounded-pill"
                                            />
                                        </CProgress>
                                    </div>
                                     <div className="sigma_progress">
                                        <h6>Plumbing</h6>
                                         <CProgress animated variant="striped" className="rounded-pill">
                                            <CProgressBar
                                                role="progressbar"
                                                value={84} 
                                                aria-label="Plumbing Repairs"
                                                className="rounded-pill"
                                            />
                                        </CProgress>
                                     </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sigma_about style-17">
                                <div className="sigma_about-image-1">
                                    <img 
                                        src={about_img} 
                                        alt="About"
                                        width="100%"
                                        height="100%"                                       
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}