import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction'
import '../Css/bootstrap.css';
import '../Css/css_slider.css';
import '../Css/Site.css';
import '../Css/font-awesome.min.css';
import who from '../Images/who.jpg';
class AboutUs extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="AboutUsDiv">
   		<section className="w3ls-bnrbtm py-5" id="who">
		<div className="py-xl-5 py-lg-3">
			<div className="row no-gutters">
				<div className="col-xl-6 who-left-w3pvt">
					<h6 className="text-colors let-spa">Something</h6>
					<h3 className="text-bl font-weight-bold mt-2 mb-3">Who We Are</h3>
					<p>Donec consequat sapien ut leo cursus rhoncus. Nullam dui
						mi, vulputate ac metus.</p>
					<ul className="list-unstyled who-lists mt-4 ml-5">
						<li><span className="fa fa-caret-right"></span>Best Value Schools</li>
						<li className="my-2"><span className="fa fa-caret-right"></span>Best Colleges for Veterans</li>
						<li><span className="fa fa-caret-right"></span>Engineering Programs</li>
						<li className="mt-2"><span className="fa fa-caret-right"></span>Free Online Courses</li>
					</ul>
					<div className="bars-main-info mt-5">
						<h3 className="text-bl font-weight-bold mb-4">Our Skills</h3>
						<div className="progress-one">
							<h4 className="progress-tittle">Dolor sit amet</h4>
							<div className="progress-effect progress-effect-1">
							</div>
						</div>
						<div className="progress-one two-progress my-3">
							<h4 className="progress-tittle">Sed do eiusm</h4>
							<div className="progress-effect progress-effect-2 w-75">

							</div>
						</div>
						<div className="progress-one">
							<h4 className="progress-tittle">Ut labore et</h4>
							<div className="progress-effect progress-effect-3 w-50">

							</div>
						</div>
					</div>

				</div>
				<div className="col-xl-6 mt-xl-0 mt-5 text-xl-right text-center">
					<img className="img-fluid rounded" src={who} alt=""/>
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
export default connect(mapStateToProps,mapDispatchToProps)(AboutUs);
