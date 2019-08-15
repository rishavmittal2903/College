import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';

class ContactUs extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="ContactUsDiv">
   				<section className="contact pb-5" id="contact">
		<div className="container pb-xl-5 pb-lg-3">
			<h3 className="text-bl text-center font-weight-bold mb-2">Contact Us</h3>
			<h6 className="text-colors text-center let-spa mb-5">Get In Touch</h6>
			<div className="row mx-sm-0 mx-2">
				
				<div className="col-lg-6 map" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
					
<iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=30.7728012,76.5762378&amp;q=Chandigarh%20University%2CGharuan+(Chandigarh%20University)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/coordinates.html">find my coordinates</a></iframe>				
</div>
				<div className="col-lg-6 main_grid_contact" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
					<div className="form-w3ls p-md-5 p-4">
						<h4 className="mb-4 sec-title-w3 let-spa text-bl">Send us a message</h4>
						<form action="#" method="post">
							<div className="row">
								<div className="col-sm-6 form-group pr-sm-1">
									<input className="form-control" type="text" name="Name" placeholder="Name" required=""/>
								</div>
								<div className="col-sm-6 form-group pl-sm-1">
									<input className="form-control" type="email" name="Email" placeholder="Email" required=""/>
								</div>
							</div>
							<div className="form-group">
								<input className="form-control" type="text" name="Subject" placeholder="Subject" required=""/>
							</div>
							<div className="form-group">
								<input className="form-control" type="text" name="Phone Number" placeholder="Phone Number" required=""/>
							</div>
							<div className="form-group">
								<textarea name="message" placeholder="Message" required=""></textarea>
							</div>
							<div className="input-group1 text-right">
								<button className="btn" type="submit">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
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
export default connect(mapStateToProps,mapDispatchToProps)(ContactUs);
