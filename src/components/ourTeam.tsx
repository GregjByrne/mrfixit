import { Check } from 'lucide-react';

export default function OurTeam(){

    return(
        <div id="section-team">
            <div className="section sigma_team-sec">
                <div className="container">
                    <div className="section-title flex-title">
                        <div className="section-title-heading">
                            <span className="subtitle">Our Team</span>
                            <h3 className="title mb-0"><span className="primary-color">Our </span>Maintenance Service Team</h3>
                        </div>
                    </div>
                    <div>
                        <p>
                        At <b>Mr. Fix It,</b> we are an Irish team made up of passionate and professional individuals who take pride in delivering exceptional property maintenance services. With a large team of skilled staff across Dublin, we ensure every job is handled promptly, efficiently, and to the highest standard.
                        Our team members are fully trained, highly skilled, and accredited by the relevant professional bodies. This guarantees that our services are not only reliable but also meet industry standards.
                        </p>
                        <p>
                        <b>Comprehensive Property Maintenance Solutions:</b><br />
                        From minor repairs to major renovations, our experienced maintenance team is equipped to handle all your property needs. With years of expertise in the property maintenance industry, our builders and handymen can quickly identify and resolve issues as they arise.
                        </p>
                        <p>
                        We offer a <b>wide range of services</b> to cater to the unique requirements of every client. Whether you need regular upkeep, emergency repairs, or specialised solutions, our comprehensive package ensures you get everything under one roof. Our services include (but are not limited to):
                        </p>
                        <div className="sigma_general-list style-3">
                            <ul>
                                <li><Check color="#e10e0e" strokeWidth={2} /><span><b> Lawn care and landscaping:</b></span></li>
                                <li><Check color="#e10e0e" strokeWidth={2} /><span><b> Plumbing and electrical repairs:</b></span></li>
                                <li><Check color="#e10e0e" strokeWidth={2} /><span><b> Emergency maintenance:</b></span></li>
                                <li><Check color="#e10e0e" strokeWidth={2} /><span><b> Renovations and refurbishment:</b></span></li>
                            </ul>
                        </div>
                        <p><b>Why Choose Us?</b></p>
                        <div className="sigma_general-list style-3">
                            <ul>
                                <li><Check color="#e10e0e" strokeWidth={2} /><span><b> Expert Team:</b> Fully trained and accredited professionals.</span></li>
                                <li><Check color="#e10e0e" strokeWidth={2} /><span><b> Reliable Service:</b> Timely, efficient, and high-quality solutions.</span></li>
                                <li><Check color="#e10e0e" strokeWidth={2} /><span><b> Comprehensive Offerings:</b> A complete range of maintenance services for every need.</span></li>
                                <li><Check color="#e10e0e" strokeWidth={2} /><span><b> Customer-Centric Approach:</b> We take pride in building long-term relationships by delivering exceptional service and customer satisfaction.</span></li>
                            </ul>
                        </div>
                        <p>
                            With <b>Mr. Fix It,</b> you can rest assured that your property is in the best hands. Our commitment to excellence and attention to detail sets us apart as a trusted choice for property maintenance in Dublin.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}