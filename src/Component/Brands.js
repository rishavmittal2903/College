import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';

class Brands extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="BrandsDiv">
   				<section className="brands pt-5">
		<div className="container-fluid">
			<div className="row text-center">
				<div className="col-md-2 col-4 main-brand bg-grey">
					<span className="fa fa-500px mb-3" aria-hidden="true"></span>
					<h5>500px</h5>
				</div>
				<div className="col-md-2 col-4 main-brand bg-black">
					<span className="fa fa-gg mb-3" aria-hidden="true"></span>
					<h5>gg varius</h5>
				</div>
				<div className="col-md-2 col-4 main-brand bg-dark2">
					<span className="fa fa-lastfm mb-3" aria-hidden="true"></span>
					<h5>lastfm</h5>
				</div>
				<div className="col-md-2 col-4 main-brand bg-grey">
					<span className="fa fa-openid mb-3" aria-hidden="true"></span>
					<h5>openid</h5>
				</div>
				<div className="col-md-2 col-4 main-brand bg-black">
					<span className="fa fa-ravelry mb-3" aria-hidden="true"></span>
					<h5>ravelry</h5>
				</div>
				<div className="col-md-2 col-4 main-brand bg-dark2">
					<span className="fa fa-angellist mb-3" aria-hidden="true"></span>
					<h5>angellist</h5>
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
export default connect(mapStateToProps,mapDispatchToProps)(Brands);
