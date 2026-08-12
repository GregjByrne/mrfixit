export default function CallToActionSection(){

    return(
      <div id="section-cta">
        <div className="section bg-secondary-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="section-title mb-lg-0">
                  <span className="subtitle text-white">Get a Quote</span>
                  <h3 className="title text-white mb-0">Get a Free <span className="primary-color">Consultation</span>
                  </h3>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="sigma_cta-buttons justify-content-lg-end">
                  <a href="#section-contact-form" className="sigma_btn light">Appointment</a>
                  <a href="#section-contact-form" className="sigma_btn">Get a quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}