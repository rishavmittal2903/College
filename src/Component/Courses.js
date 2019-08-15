import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';
class Courses extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="CoursesDiv">
   	<section className="about-bottom" id="services">
		<div className="container pb-lg-4">
			<div className="row bg-colors text-center">
				<div className="col-md-4 service-subgrids redcolor">
					<div className="w3ls-about-grid py-lg-5 py-md-4 py-5 px-3">
						<h4 className="text-wh font-weight-bold mb-3">627+ Companies</h4>
						<p className="text-li"> For campus placements in CU</p>
					</div>
					<span className="fa fa-users" aria-hidden="true"></span>
				</div>
				<div className="col-md-4 service-subgrids bg-li">
					<div className="w3ls-about-grid py-lg-5 py-md-4 py-5 px-3">
						<h4 className="text-bl font-weight-bold mb-3">6314+ Placements</h4>
						<p className="text-secondary"> Offered in Chandigarh University</p>
					</div>
					<span className="fa fa-linode" aria-hidden="true"></span>
				</div>
				<div className="col-md-4 service-subgrids redcolor">
					<div className="w3ls-about-grid py-lg-5 py-md-4 py-5 px-3">
						<h4 className="text-wh font-weight-bold mb-3">31.77LPA Engineering</h4>
						<p className="text-li"> Highest Package Offered</p>
					</div>
					<span className="fa fa-book" aria-hidden="true"></span>
				</div>
			</div>
			<div className="row bg-colors text-center">
				<div className="col-md-4 service-subgrids bg-li">
					<div className="w3ls-about-grid py-lg-5 py-md-4 py-5 px-3">
						<h4 className="text-bl font-weight-bold mb-3">14LPA Management</h4>
						<p className="text-secondary"> For CU campus placements</p>
					</div>
					<span className="fa fa-laptop" aria-hidden="true"></span>
				</div>
				<div className="col-md-4 service-subgrids redcolor">
					<div className="w3ls-about-grid py-lg-5 py-md-4 py-5 px-3">
						<h4 className="text-wh font-weight-bold mb-3">Patents</h4>
						<p className="text-li"> Claiming  accolades with 414+ successful patents</p>
					</div>
					<span className="fa fa-thumbs-o-up" aria-hidden="true"></span>
				</div>
				<div className="col-md-4 service-subgrids bg-li">
					<div className="w3ls-about-grid py-lg-5 py-md-4 py-5 px-3">
						<h4 className="text-bl font-weight-bold mb-3">Global Exposure</h4>
						<p className="text-secondary"> New beginnings with endless possibilities</p>
					</div>
					<span className="fa fa-magic" aria-hidden="true"></span>
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
export default connect(mapStateToProps,mapDispatchToProps)(Courses);
