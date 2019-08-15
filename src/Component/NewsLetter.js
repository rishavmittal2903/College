import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';

class NewsLetter extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="NewsLetterDiv">
   			<div className="bg-colors py-4">
		<div className="container py-2">
			<h2 className="text-bg-click text-center font-weight-bold let-spa text-wh">Our Most Popular Courses <a href="#" className="text-wh button-clk">Click
					Here</a></h2>
		</div>
	</div>
	<div className="newsletter_right_w3w3pvt-lau bg-black py-5">
		<div className="container">
			<div className="row newsletterbckgrnd">
				<div className="col-lg-4 border-right">
					<h6 className="text-colors let-spa">Signup for Free</h6>
					<h3 className="text-wh font-weight-bold mt-2 mb-3">Subscribe Newsletter</h3>
				</div>
				<div className="col-lg-8 news-right-w3ls mt-lg-0 mt-4">
					<p className="text-li mb-3">Subscribe to our latest news to be updated</p>
					<form action="#" method="post">
						<div className="row">
							<div className="col-md-5 form-group pr-md-0">
								<input className="form-control" type="text" name="Name" placeholder="Name" required=""/>
							</div>
							<div className="col-md-5 form-group pr-md-0">
								<input className="form-control" type="email" name="Email" placeholder="Email Address" required=""/>
							</div>
							<div className="col-md-2 form-group pr-md-0 mt-md-0 mt-3">
								<button className="btn" type="submit">Subscribe</button>
							</div>
						</div>
					</form>
				</div>
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
export default connect(mapStateToProps,mapDispatchToProps)(NewsLetter);
