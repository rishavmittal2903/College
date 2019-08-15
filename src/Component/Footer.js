import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';

class Footer extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="FooterDiv">
   				<footer className="bg-colors py-5">
		<div className="container py-xl-4">
			<div className="row footer-grids">
				<div className="col-lg-2 col-sm-4 footer-grid">
					<h3 className="mb-sm-4 mb-3 pb-lg-3">Home</h3>
					<ul className="list-unstyled">
						<li>
							<a href="index.html">Index</a>
						</li>
						<li className="my-2">
							<a className="scroll" href="#about">About Us</a>
						</li>
						<li>
							<a className="scroll" href="#services">Services</a>
						</li>
						<li className="my-2">
							<a className="scroll" href="#gallery">Gallery</a>
						</li>
						<li>
							<a className="scroll" href="#contact">Contact Us</a>
						</li>
					</ul>
				</div>
				<div className="col-lg-2 col-sm-4 footer-grid mt-sm-0 mt-4">
					<h3 className="mb-sm-4 mb-3 pb-lg-3"> Links</h3>
					<ul className="list-unstyled">
						<li>
							<a className="scroll" href="#who">Who We Are</a>
						</li>
						<li className="my-2">
							<a className="scroll" href="#blog">Latest Blog</a>
						</li>
						<li>
							<a className="scroll" href="#professors">Our Professors</a>
						</li>
					</ul>
				</div>
				<div className="col-lg-2 col-sm-4 footer-grid">
					<ul className="list-unstyled mt-lg-5 mt-4">
						<li>
							<a className="scroll" href="#about">Statistical Facts</a>
						</li>
						<li className="my-2">
							<a href="#">Find us</a>
						</li>
						<li>
							<a className="scroll" href="#testi">Testimonials</a>
						</li>
						<li className="mt-2">
							<a href="#">Privacy Policy</a>
						</li>
					</ul>
				</div>
				<div className="col-lg-4 col-sm-6 footer-grid mt-lg-0 mt-4">
					<div className="address">
						<div className="row address-grid">
							<div className="col-md-3 col-sm-4 col-2 address-left text-center">
								<i className="fa fa-phone"></i>
							</div>
							<div className="col-md-9 col-sm-8 col-10 address-right">
								<p>+91 920 613 4708</p>
							</div>
						</div>
						<div className="row address-grid my-3">
							<div className="col-md-3 col-sm-4 col-2 address-left text-center">
								<i className="fa fa-envelope"></i>
							</div>
							<div className="col-md-9 col-sm-8 col-10 address-right">
								<p>
									<a href="mailto:example@email.com"> rishav.mittal2994@gmail.com</a>
								</p>
								<p>
									<a href="mailto:example@email.com"> rishavmittal2903@gmail.com</a>
								</p>
							</div>
						</div>
						<div className="row address-grid">
							<div className="col-md-3 col-sm-4 col-2 address-left text-center">
								<i className="fa fa-map"></i>
							</div>
							<div className="col-md-9 col-sm-8 col-10 address-right">
								<p> 01 Marathalli Road, Bellandur <br/> Bangalore, INDIA</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-2 col-sm-6 footer-grid footer-contact mt-lg-0 mt-4">
					<h3 className="mb-sm-4 mb-3 pb-lg-3"> Contact Us</h3>
					<ul className="list-unstyled">
						<li>
							+(91) 92061 34708
						</li>
						<li className="mt-2">
							<a href="mailto:info@example.com">rishavmittal2903@gmail.com</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
        </div>                    
                
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        user:state.sampleReducer    
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setName:(name)=>{
            dispatch(changeName(name))
        }   
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Footer);
