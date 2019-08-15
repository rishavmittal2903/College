import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';
class Notification extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="NotificationDiv">
   		<section className="w3ls-bnrbtm py-5" id="about">
		<div className="container py-xl-5 py-lg-3">
			<div className="row">
				<div className="col-lg-6 pr-xl-5">
					<h5 className="text-colors let-spa">Something About Us</h5>
					<h3 className="text-bl font-weight-bold mt-3 mb-5">We are the best leaders in the <br/>online education.</h3>
					<h4 className="text-colors let-spa">Free <br/>Online Courses</h4>
				</div>
				<div className="col-lg-6 pl-xl-5 mt-lg-0 mt-4">
					<p>UIE, Best Engineering College in Punjab, is unique in drawing its strength and motivation from the 
						unprecedented patronage 
						provided by top-notch blue-chip multinational companies. 
						Since inception, CU has set benchmarks for engineering education & is ranked among 
						the Best Engineering Colleges of Punjab. Our dynamic hands-on experiential learning based 
						engineering education and flexible academic model, which nurtures imagination & innovation, has 
						enabled us to create engineers who are able to meet the real-world demands of their profession and 
						provide best solutions for the betterment of the society.
						</p>
					
				</div>
			</div>
			<div className="stats-info mt-5 pt-lg-4">
				<div className="row">
					<div className="col-lg-3 col-sm-6 stats-grid-w3-w3pvt-am">
						<div className="row">
							<div className="col-4 icon-right-w3ls text-sm-left text-center">
								<div className="stats-icon-w3pvt">
									<span className="fa fa-smile-o"></span>
								</div>
							</div>
							<div className="col-8">
								<p className="counter font-weight-bold text-bl">1280</p>
								<p className="text-colors mt-2">Happy Parents</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 stats-grid-w3-w3pvt-am mt-sm-0 mt-4">
						<div className="row">
							<div className="col-4 icon-right-w3ls text-sm-left text-center">
								<div className="stats-icon-w3pvt">
									<span className="fa fa-shield"></span>
								</div>
							</div>
							<div className="col-8">
								<p className="counter font-weight-bold text-bl">920</p>
								<p className="text-colors mt-2">Awards Won</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 stats-grid-w3-w3pvt-am mt-lg-0 mt-4">
						<div className="row">
							<div className="col-4 icon-right-w3ls text-sm-left text-center">
								<div className="stats-icon-w3pvt">
									<span className="fa fa-user-o"></span>
								</div>
							</div>
							<div className="col-8">
								<p className="counter font-weight-bold text-bl">1400</p>
								<p className="text-colors mt-2">Best Teachers</p>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 stats-grid-w3-w3pvt-am mt-lg-0 mt-4">
						<div className="row">
							<div className="col-4 icon-right-w3ls text-sm-left text-center">
								<div className="stats-icon-w3pvt">
									<span className="fa fa-thumbs-o-up"></span>
								</div>
							</div>
							<div className="col-8">
								<p className="counter font-weight-bold text-bl">1080</p>
								<p className="text-colors mt-2">Successful Kids</p>
							</div>
						</div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Notification);
