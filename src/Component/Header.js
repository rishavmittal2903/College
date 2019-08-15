import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';
import logo from '../Images/logo1.png';
class Header extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="HeaderDiv">
   <header id="home">
		
		<div className="top-bar py-2 bg-li">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-5 top-social-w3pvt-am mt-lg-1 mb-md-0 mb-1 text-lg-left text-center">
						<div className="row">
							<div className="col-xl-4 col-6 header-top_w3layouts border-right">
								<p className="text-bl">
									<span className="fa fa-map-marker mr-2"></span>Bangalore, India
								</p>
							</div>
							<div className="col-xl-4 col-6 header-top_w3layouts text-md-right">
								<p className="text-bl">
									<span className="fa fa-phone mr-2"></span>+91 9206134708
								</p>
							</div>
							<div className="col-xl-4"></div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-7 top-social-w3pvt-am mt-lg-0 mt-2">
						<div className="row">
							<div className="col-6 top-w3layouts">
								<div className="select-city text-center">
									<select className="list_of_cities">
										<optgroup label="Popular Cities">
											<option selected >Select City</option>
											<option>Birmingham</option>
											<option>Anchorage</option>
											<option>Phoenix</option>
											<option>Little Rock</option>
											<option>Los Angeles</option>
											<option>Denver</option>
											<option>Bridgeport</option>
											<option>Wilmington</option>
											<option>Jacksonville</option>
											<option>Atlanta</option>
											<option>Honolulu</option>
											<option>Boise</option>
											<option>Chicago</option>
											<option>Indianapolis</option>
										</optgroup>
										<optgroup label="Alabama">
											<option>Birmingham</option>
											<option>Montgomery</option>
											<option>Mobile</option>
											<option>Huntsville</option>
											<option>Tuscaloosa</option>
										</optgroup>
										<optgroup label="Alaska">
											<option>Anchorage</option>
											<option>Fairbanks</option>
											<option>Juneau</option>
											<option>Sitka</option>
											<option>Ketchikan</option>
										</optgroup>
										<optgroup label="Wyoming">
											<option>Cheyenne</option>
											<option>Casper</option>
											<option>Laramie</option>
											<option>Gillette</option>
											<option>Rock Springs</option>
										</optgroup>
									</select>
									<div className="clearfix"></div>
								</div>
							</div>
							<div className="col-6 border-left mt-lg-1 socila-brek text-md-right text-center">
								<ul className="top-right-info">
									<li>
										<p className="par-so mr-3">Follow As:</p>
									</li>
									<li className="mr-1 soci-effe facebook">
										<a href="https://www.facebook.com/rishav.mittal.3" target="_blank" title="Facebook">
											<span className="fa fa-facebook-f"></span>
										</a>
									</li>
									<li className="mr-1 soci-effe twitter">
										<a href="https://twitter.com/hashtag/login?lang=en" target="_blank" title="Twitter">
											<span className="fa fa-twitter"></span>
										</a>
									</li>
									<li className="mr-1 soci-effe google-plus">
										<a href="mailto:rishavmittal2903@gmail.com" target="_blank" title="Gmail">
											<span className="fa fa-envelope"></span>
										</a>
									</li>
									<li className="soci-effe twitter">
										<a href="https://www.linkedin.com/in/rishav-mittal-aa5b95134/" target="_blank" title="Linkedin">
											<span className="fa fa-linkedin"></span>
										</a>
									</li>
								</ul>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
 
	
	<div className="main-top">
		<div className="container d-lg-flex">
			<h1 className="logo-style-res float-left wdth20p">
				<a className="navbar-brand" href="index.html">
					<img src={logo} alt="" className="img-fluid logo-img logoimg mrgntop5px"/>
				</a>
			</h1>
			<div className="nav_w3ls mx-lg-auto">
				<nav>
					<label for="drop" className="toggle">Menu</label>
					<input type="checkbox" id="drop" />
					<ul className="menu mx-lg-auto">
						<li><a href="index.html" className="active">Home</a></li>
						<li><a href="#about">About Us</a></li>
						<li>
							<label for="drop-2" className="toggle toogle-2">Pages <span className="fa fa-angle-down" aria-hidden="true"></span>
							</label>
							<a href="#">Pages <span className="fa fa-angle-down" aria-hidden="true"></span></a>
							<input type="checkbox" id="drop-2" />
							<ul>
								<li><a href="#services" className="drop-text">Services</a></li>
								<li><a href="#professors" className="drop-text">Professors</a></li>
								<li><a href="#blog" className="drop-text">Blog</a></li>
								<li><a href="#who" className="drop-text">Who We Are</a></li>
								<li><a href="#testi" className="drop-text">Testimonials</a></li>
							</ul>
						</li>
						<li><a href="#gallery">Gallery</a></li>
						<li><a href="#contact">Contact Us</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
            
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
export default connect(mapStateToProps,mapDispatchToProps)(Header);
