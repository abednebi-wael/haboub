import React from 'react'
import { BsFacebook, BsFillEnvelopeOpenFill, BsFillTelephoneFill, BsInstagram,  BsTwitter} from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../App.css'





function Footer() {
  return (
    <div>
		<div id="newsletter" className="section">
			
			<div className="container">
				
				<div className="row">
					<div className="col-md-12">
						<div className="newsletter">
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<form>
								<input className="input" type="email" placeholder="Enter Your Email"/>
								<button className="newsletter-btn"><i className="fa fa-envelope"></i> Subscribe</button>
							</form>
							<ul className="newsletter-follow">
								<li>
									<Link to={'#'}><i className="fa fa-facebook"></i><BsFacebook/></Link>
								</li>
								<li>
									<Link to={'#'}><i className="fa fa-twitter"><BsTwitter/></i></Link>
								</li>
								<li>
									<Link to={'#'}><i className="fa fa-instagram"><BsInstagram/></i></Link>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
     
<footer className="footer-distributed">

			<div className="footer-left">

				<h3>lena <span>logo</span></h3>

				<p className="footer-links">
					<Link to={'#'} className="link-1">Home</Link>
					
					<Link to={'#'}>Blog</Link>
				
					<Link to={'#'}>Pricing</Link>
				
					<Link to={'#'}>About</Link>
					
					<Link to={'#'}>Faq</Link>
					
					<Link to={'#'}>Contact</Link>
				</p>

				<p className="footer-company-name">Company Name © 2022</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"><FaMapMarkerAlt/></i>
					<p><span>Ez zahra</span> cafe rayhana</p>
				</div>

				<div>
					<i className="fa fa-phone"><BsFillTelephoneFill/></i>
					<p>53289456</p>
				</div>

				<div>
					<i className="fa fa-envelope"><BsFillEnvelopeOpenFill/></i>
					<p><Link to={'mailto:habib_chamekh.com'}>habib_chamekh.com</Link></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<Link to={'#'}><i className="fa fa-facebook"><BsFacebook/></i></Link>
					<Link to={'#'}><i className="fa fa-twitter"><BsTwitter/></i></Link>
					
					<Link to={'#'}><i className="fa fa-github"><BsInstagram/></i></Link>

				</div>

			</div>

		</footer>
    </div>
  )
}

export default Footer