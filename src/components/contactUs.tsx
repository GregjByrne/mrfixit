import { useState } from 'react';
import type { SubmitEvent } from 'react';



export default function ContactUs(){

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus("Sending your message...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try{
        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        if (data.success) {
            setStatus("Thank you! Your message has been sent successfully.");
            event.target.reset();
        } else {
            setStatus(`Error: ${data.message}`);
        }
    } catch (error) {
        setStatus("Oops! Something went wrong. Please try again later.");
    } finally {
        setLoading(false);
    }
  };

 return (
        <div id="section-contact-form">
            <div className="section sigma_contact-sec pt-0">
                <div className="container">
                    <div className="sigma_form style-5">
                        <div className="row position-relative">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <span className="subtitle">Call to Action</span>
                                    <h3 className="title">Contact Us</h3>
                                </div>
                                <form className="mf_form_validate ajax_submit" onSubmit={onSubmit}>
                                    {/* Anti-Spam Honeypot field (hidden from users, caught by bots) */}
                                    <input type="checkbox" name="botcheck" style={{ display: "none" }} />

                                    {/* Subject line that shows up in your email header */}
                                    <input type="hidden" name="subject" value="New Contact Form Submission" />
                                    
                                    <div className="form-group">
                                        <input type="text" name="name" placeholder="Enter Full Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Email Address" required />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" rows={10} placeholder="Enter Message" required></textarea>
                                    </div>
                                        <button type="submit" disabled={loading}>
                                            {loading ? "Submitting..." : "Submit Request"}
                                        </button>
                                    <div className="server_response w-100">
                                        {status && <p style={{ marginTop: "15px", fontWeight: "bold" }}>{status}</p>}
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6">
                                <div className="sigma_contact-map">
                                    <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dublin,%20Ireland+(Mr%20Fix%20It)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" height="600" allowFullScreen={true}>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 );
}
