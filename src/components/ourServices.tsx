import services_img1 from '../assets/images/services_img/floorRepair_350_235.jpg'; // Services Sectionn Image
import services_img2 from '../assets/images/services_img/plumbingRepair_500_333.jpg'; // Services Sectionn Image
import services_img3 from '../assets/images/services_img/elecRepairs_350_235.jpg'; // Services Sectionn Image
import { Grid2x2, DoorOpen, Toolbox, ArrowRight } from 'lucide-react';

export default function OurServices(){
 return (
    
        <div id="section-services">
            <div className="section section-padding sigma_service-sec style-15">
                <div className="container">
                <div className="section-title centered">
                    <span className="subtitle">What We Do</span>
                    <h3 className="title">
                    <span className="primary-color">Our</span> Services</h3>
                    <p>We offer wood floor installation, plumbing services, and electrical repairs in Dublin with promptness, transparent pricing, and no hidden fees.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="sigma_service style-15 has-overlay">
                            <div className="service-image-overlay bg-center bg-cover" style={{ backgroundImage: `url(${services_img1})` }} >
                            </div>
                            <div className="sigma_service-thumb">
                                <Grid2x2 size={96} color="#de1b1b" strokeWidth={1} />
                            </div>
                            <div className="sigma_service-body">
                                <h5>
                                    <a href="#section-services">Floor Installations</a>
                                </h5>
                                <p>Wood floors can enhance your home. We assist in selecting, removing old flooring, and installing new wood flooring for you.</p>
                                <a href="#section-services" className="btn-link primary-color">
                                    <ArrowRight color="#df1111" strokeWidth={1} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="sigma_service style-15 has-overlay">
                            <div className="service-image-overlay bg-center bg-cover" style={{ backgroundImage: `url(${services_img2})` }}>

                            </div>
                            <div className="sigma_service-thumb">
                                <DoorOpen size={96} color="#de1b1b" strokeWidth={1} />
                            </div>
                            <div className="sigma_service-body">
                            <h5>
                                <a href="#section-services">Plumbing Services</a>
                            </h5>
                            <p>We provide plumbing services to commercial and domestic clients in Dublin, with transparent pricing and no hidden fees. Contact us for details.</p>
                            <a href="#section-services" className="btn-link primary-color">
                                <ArrowRight color="#df1111" strokeWidth={1} />
                            </a>
                            </div> 
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="sigma_service style-15 has-overlay">
                            <div className="service-image-overlay bg-center bg-cover" style={{ backgroundImage: `url(${services_img3})` }}>

                            </div>
                            <div className="sigma_service-thumb">
                                <Toolbox size={96} color="#de1b1b" strokeWidth={1} />
                            </div>
                            <div className="sigma_service-body">
                                <h5>
                                    <a href="#section-services">Electrical Repairs</a>
                                </h5>
                                <p>We offer expert home electrical repairs and appliance servicing in Dublin. Our technicians handle various issues in homes, gardens, and kitchens.</p>
                                <a href="#section-services" className="btn-link primary-color">
                                    <ArrowRight color="#df1111" strokeWidth={1} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
 );

}