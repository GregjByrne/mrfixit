import { MessageSquareQuote } from 'lucide-react';

export default function MaintenanceTipsSection(){

    return(
        <div id="section-maint_tips">
            <div className="section section-padding sigma_testimonial-sec">
                <div className="container">
                    <div className="section-title centered">
                        <span className="subtitle">Mr. Fix It</span>
                        <h3 className="title">Maintenance <span className="primary-color">Tips</span>
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_testimonial style-3">
                                <div className="sigma_testimonial-body">
                                    <span className="fas fa-quote-left sigma_testimonial-icon">
                                        <MessageSquareQuote size={48} color="#707070" strokeWidth={3} />
                                    </span>
                                    <p>When it comes to improving energy efficiency and protecting your home, lagging water tanks and pipes is a simple yet highly effective solution. This practice involves insulating your hot water systems to reduce heat loss, save on energy costs, and prevent potential damage during colder months.</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-end">
                                    <div className="sigma_author-block">
                                        <span className="sigma_testimonial-category">Lagging Water Tanks and Pipes:</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_testimonial style-3">
                                <div className="sigma_testimonial-body">
                                    <span className="fas fa-quote-left sigma_testimonial-icon">
                                        <MessageSquareQuote size={48} color="#707070" strokeWidth={3} />
                                    </span>
                                    <p>Winter weather doesn&#39;t only take a toll on the roads, it can also impact the outdoor spaces of your property. The freezing and thawing cycle that occurs during colder months can lead to cracks in patios and driveways, posing a potential hazards. Staying proactive can save you from bigger problems down the line.</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-end">
                                    <div className="sigma_author-block">
                                        <span className="sigma_testimonial-category">Cold Weather Maintenance:</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="sigma_testimonial style-3">
                            <div className="sigma_testimonial-body">
                                <span className="fas fa-quote-left sigma_testimonial-icon">
                                    <MessageSquareQuote size={48} color="#707070" strokeWidth={3} />
                                </span>
                                <p>When managing your property, maintaining both aesthetic appeal and structural durability is key. One simple yet highly effective way to achieve both is by giving exterior surfaces a fresh coat of paint. Exterior painting is not just about looks, it&#39;s an essential step in protecting your property.</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <div className="sigma_author-block">
                                    <span className="sigma_testimonial-category">Exterior Painting for Properties:</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


