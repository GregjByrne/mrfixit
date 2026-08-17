import { CarouselData } from '../features/systemData/carousel_data';

export default function OurProjects(){

    return(
        <div id="section-portfolio">
            <div className="section bg-gray">
                <div className="sigma_portfolio-wrapper style-14">
                    <div className="container">
                        <div className="section-title flex-title">
                            <div className="section-title-heading">
                                <span className="subtitle">Portfolio</span>
                                <h3 className="title mb-0">
                                <span className="primary-color">Our </span> Projects</h3>
                            </div>
                            <div className="sigma_custom-dots mt-4 mt-sm-0">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="portfolio_carousel">
                                 <div className="portfolio_group">
                                        {CarouselData.map((d) => (
                                              <div key={d.service} className="portfolio_card">
                                                        <div className="portfolio_card_image">
                                                                <img 
                                                                src={d.carouselImage} 
                                                                alt={d.alt}
                                                                loading="lazy"
                                                                />      
                                                        </div>
                                                        <div className="portfolio_card_overlay">
                                                                <div className="overlay_href">
                                                                        <a href="#section-portfolio" className="">{d.serviceType}</a>
                                                                </div>
                                                                <span>{d.service}</span>
                                                        </div>
                                                </div>           
                                        ))}
                                </div>
                                <div aria-hidden="true" className="portfolio_group">
                                       {CarouselData.map((d) => (
                                              <div key={d.service} className="portfolio_card">
                                                        <div className="portfolio_card_image">
                                                                <img 
                                                                src={d.carouselImage} 
                                                                alt=""
                                                                loading="lazy"
                                                                />      
                                                        </div>
                                                        <div className="portfolio_card_overlay">
                                                                <div className="overlay_href">
                                                                        <a href="#section-portfolio" className="" tabIndex={-1}>{d.serviceType}</a>
                                                                </div>
                                                                <span>{d.service}</span>
                                                        </div>
                                                </div>           
                                        ))}
                                </div>
                        </div>
                    </div>
                </div>
             </div>
         </div>
    );

}
