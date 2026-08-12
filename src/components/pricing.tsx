import { Check } from 'lucide-react';
import { counterMetrics }  from '../features/systemData/pricing_data.tsx';
import { CounterItem } from '../utils/counterUtils/animatedPricingUtil.tsx';

export default function OurPricing(){

    return(
        <div id="section-pricing">
            <div className="section section-padding pt-0 sigma_pricing-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="sigma_pricing-counter style-5">
                            <div className="section-title">
                                <h3 className="title">Mr. Fix It <span className="primary-color"> Pricing</span></h3>
                                <p><b>Understanding our pricing:</b> Pricing is one of the most common questions we receive. However, estimating costs over the phone or via email can sometimes be challenging. Often, it&#39;s only once we are on-site that we can provide an accurate quote. To ensure the best experience for our customers, we follow these core principles:</p>
                            </div>
                            <div className="row">
                                {counterMetrics.map((metric) => (
                                    <CounterItem key={metric.id} metric={metric} />
                                ))}
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-7 mt-5 mt-xl-0">
                            <div className="sigma_pricing style-5">
                                <div className="sigma_pricing-bottom">
                                    <span className="sigma_pricing-title">Terms of Pricing</span>
                                    <div className="sigma_general-list style-3">
                                        <ul>
                                            <li><span><b>Competitive pricing: </b></span>   <Check color="#e10e0e" strokeWidth={2} /></li>
                                            <li><span><b>Complete transparency: </b></span> <Check color="#e10e0e" strokeWidth={2} /></li>
                                            <li><span><b>Commitment to quality: </b></span> <Check color="#e10e0e" strokeWidth={2} /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sigma_pricing-top">
                                    <div className="mb-4">
                                        <p>
                                        <b>Special offers for valued customers:</b> We are proud to offer <b>discounted rates</b> for registered charities and high-volume customers, recognising the importance of building long-lasting relationships.
                                        </p>
                                        <p>
                                        <b>Our transparent billing process:</b> All billing is managed through an open and accountable system, ensuring that only one customer is charged at a time. This guarantees 100% accuracy—so you can trust you&#39;re never billed for downtime or unnecessary costs.
                                        </p>
                                        <p>
                                        With our team completing a high volume of jobs annually, occasional invoice queries are natural. Thanks to our robust invoicing system, we can provide detailed breakdowns of all charges and explain how the total amount was calculated. For our regular customers, if you are still not satisfied with the resolution, we will collaborate to agree on a figure that suits both parties. Your satisfaction is our priority, as we are committed to fostering long-term partnerships.
                                        </p>
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