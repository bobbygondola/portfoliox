import "../styles/css/App.css"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactInfo = () => {
	return (
		<div className='ContactForm'>
			<div className='container'>
				{/* Row 1 */}
				<div className='row'>
					<div className='col-12'>
                        <div className="contactMe">
						<h1 className='section-title'>
							<span className='main-color'>Contact</span> <span className="sec-color">Me.</span>
                            <h2><span className="sec-color">Lets</span> <span className='main-color'>Change</span> <span className="sec-color">The World Together!</span></h2>
						</h1>
                        </div>
					</div>
				</div>
				{/* Row 2 */}
				<div className='row'>
					<div className='col-lg-4'>
						<div className='contact-info'>
							<div className='phone-info'>
								<FontAwesomeIcon
									icon={faPhone}
									className='contact-icon'
									fixedWidth
								></FontAwesomeIcon>
								<span>Give me a call:</span>
								<p>(973) 224-3825</p>
							</div>
						</div>
					</div>
					<div className='col-lg-4'>
						<div className='contact-info'>
							<div className='email-info'>
								<FontAwesomeIcon
									icon={faEnvelope}
									className='contact-icon'
									fixedWidth
								></FontAwesomeIcon>
								<span>Send me an email:</span>
								<p>RobertGondolaUSA@Gmail.com</p>
							</div>
						</div>
					</div>
					<div className='col-lg-4'>
						<div className='contact-info'>
							<div className='location-info'>
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									className='contact-icon'
									fixedWidth
								></FontAwesomeIcon>
								<span>Currently located:</span>
								<p>Charlotte, NC</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;