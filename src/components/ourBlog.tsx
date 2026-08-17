import roofRepairs_img from '../assets/images/blog_img/roof_repairs_416.webp';
import livingRoom_img from '../assets/images/blog_img/livingroom_416.webp';  
import woodWork_img from '../assets/images/blog_img/wood_work_416.webp';
import { CalendarDays } from 'lucide-react';

import { useMemo } from 'react';
import { getFormattedPastDate } from '../utils/dateUtils';

export default function BlogSection(){
    // Memoize the value so it only calculates once when the component mounts
    const blogDate_roofing = useMemo(() => getFormattedPastDate(6), []);
    const blogDate_propMaint = useMemo(() => getFormattedPastDate(12), []);
    const blogDate_homeMaint = useMemo(() => getFormattedPastDate(9), []);

    return(
        <div id="section-blog">
            <div className="section section-padding pt-0 sigma_post-sec">
                <div className="container">
                    <div className="section-title centered">
                        <h3 className="title">
                        Our<span className="primary-color"> Blog</span></h3>
                        <p>Mr Fix It is a dedicated management firm specialising in providing tailored solutions for properties and residents across Leinster. With a strong focus on single-family homes, apartments, multifamily housing, and mixed-use properties, the firm excels in managing diverse living spaces in all environments. Known for their expertise and commitment to quality service, Mr Fix It ensures that each property under their care operates seamlessly. Their approach combines professionalism with a deep understanding of the unique challenges and opportunities that come with all types of living, making them a trusted partner for property owners and residents alike.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <article className="sigma_post style-5">
                            <div className="sigma_post-thumb">
                                <a href="#section-blog" className="d-block">
                                    <img 
                                        src={roofRepairs_img} 
                                        alt="Roofing Repairs" 
                                        width={416}
                                        height={416}
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                            <div className="sigma_post-body">
                                <div className="sigma_post-meta border-0 p-0">
                                    <a href="#section-blog" className="d-block">
                                        <CalendarDays size={16}  color="#df1616" strokeWidth={2} />
                                        {' '}{blogDate_roofing}
                                    </a>
                                </div>
                                <div className="sigma_post-content">
                                    <h5>
                                        <a href="#section-blog">Roof and Gutter Maintenance:</a>
                                    </h5>
                                        <p className="m-0">During stormy seasons, your roof is the first line of defence against harsh weather, making it the most vulnerable part of your home. Ensuring there are no leaks is essential, as even small issues can lead to severe damage over time. But climbing up to inspect or repair your roof during rough weather isn&#39;t ideal. Thankfully, Mr. Fix It is here to help. They specialise in weatherproofing roofs and clearing debris from gutters, protecting your home from costly damage. By taking proactive steps now, you can safeguard your home and avoid expensive repairs later.
                                    </p>
                                </div>
                            </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <article className="sigma_post style-5">
                            <div className="sigma_post-thumb">
                                <a href="#section-blog" className="d-block">
                                    <img 
                                        src={livingRoom_img} 
                                        alt="Living Room Decor" 
                                        width={416}
                                        height={416}
                                        loading="lazy" 
                                    />
                                </a>
                            </div>
                            <div className="sigma_post-body">
                                <div className="sigma_post-meta border-0 p-0">
                                    <a href="#section-blog" className="d-block">
                                        <CalendarDays size={16}  color="#df1616" strokeWidth={2} />
                                        {' '}{blogDate_propMaint}
                                    </a>
                                </div>
                                <div className="sigma_post-content">
                                    <h5>
                                        <a href="#section-blog">Make Property Maintenance Easy:</a>
                                    </h5>
                                    <p className="m-0">Maintaining a property can often feel like an endless to-do list, from bathroom renovations to roofing repairs, painting, and decorating. Keeping everything in top shape requires time and effort, which can quickly become overwhelming. That's where Mr. Fix It comes in. As a total property maintenance solutions company, we specialise in taking the burden off your shoulders. With our expertise in property upkeep, we ensure your property stays in excellent condition, giving you more time to focus on what truly matters. Let us handle the hard work so you don&#39;t have to.
                                    </p>
                                </div>
                            </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <article className="sigma_post style-5">
                            <div className="sigma_post-thumb">
                                <a href="#section-blog" className="d-block">
                                    <img 
                                        src={woodWork_img} 
                                        alt="Wood Work Repairs" 
                                        width={416}
                                        height={416}
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                            <div className="sigma_post-body">
                                <div className="sigma_post-meta border-0 p-0">
                                    <a href="#section-blog" className="d-block">
                                        <CalendarDays size={16}  color="#df1616" strokeWidth={2} />
                                        {' '}{blogDate_homeMaint}
                                    </a>
                                </div>
                                <div className="sigma_post-content">
                                    <h5>
                                        <a href="#section-blog">Consider Home Maintenance:</a>
                                    </h5>
                                    <p className="m-0">They say home is where the heart is, and making sure your living space aligns with your needs and desires is key to your comfort and happiness. Whether you've called your house home for years or just settled in, investing in home is always a smart choice. From enhancing functionality to increasing value, maintaining your property ensures it stays a haven for you and your family. Mr. Fix It specializes in property maintenance and can help transform your vision into reality, so your home remains a perfect reflection of your lifestyle.
                                    </p>
                                </div>
                            </div>
                        </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

