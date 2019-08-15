import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';

class Clients extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="ClientsDiv">
   				<section className="clients" id="testi">
		<div className="row no-gutters pb-4">
			<div className="col-lg-6 col-md-8 left-test-w3pvt p-sm-5 p-4">
				<div className="my-4 py-xl-5 py-lg-3">
					<div className="feedback-info">
						<div className="feedback-top">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sedc dnmo eiusmod. sed do eiusmod tempor
								incididunt
								ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
							<h4 className="mt-4 text-wh font-weight-bold mb-4">Mary Jane</h4>
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-6 col-md-4"></div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Clients);
