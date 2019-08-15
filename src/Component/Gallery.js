import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';
import g1 from '../Images/g1.jpg';
import g2 from '../Images/g2.jpg';
import g3 from '../Images/g3.jpg';
import g4 from '../Images/g4.jpg';
import g5 from '../Images/g5.jpg';
import g6 from '../Images/g6.jpg';
class Gallery extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="GalleryDiv">
   				<div className="gallery py-5" id="gallery">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="text-bl text-center font-weight-bold mb-2">Our Gallery</h3>
			<h6 className="text-colors text-center let-spa mb-5">See More</h6>
			<div className="row no-gutters">
				<div className="col-md-4 gallery-grid1">
					<a href="#gal1">
						<img src={g1} alt=" " className="img-fluid" />
					</a>
				</div>
				<div className="col-md-4 gallery-grid1">
					<a href="#gal2">
						<img src={g2} alt=" " className="img-fluid" />
					</a>
				</div>
				<div className="col-md-4 gallery-grid1">
					<a href="#gal3">
						<img src={g3} alt=" " className="img-fluid" />
					</a>
				</div>
			</div>
			<div className="row no-gutters">
				<div className="col-md-4 gallery-grid1">
					<a href="#gal4">
						<img src={g4} alt=" " className="img-fluid" />
					</a>
				</div>
				<div className="col-md-4 gallery-grid1">
					<a href="#gal5">
						<img src={g5} alt=" " className="img-fluid" />
					</a>
				</div>
				<div className="col-md-4 gallery-grid1">
					<a href="#gal6">
						<img src={g6} alt=" " className="img-fluid" />
					</a>
				</div>
			</div>
		</div>
		<div id="gal1" className="pop-overlay animate">
			<div className="popup">
				<img src={g1} alt="Popup Image" className="img-fluid" />
				<p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
				<a className="close" href="#gallery">&times;</a>
			</div>
		</div>
		<div id="gal2" className="pop-overlay animate">
			<div className="popup">
				<img src={g2} alt="Popup Image" className="img-fluid" />
				<p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
				<a className="close" href="#gallery">&times;</a>
			</div>
		</div>
		<div id="gal3" className="pop-overlay animate">
			<div className="popup">
				<img src={g3} alt="Popup Image" className="img-fluid" />
				<p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
				<a className="close" href="#gallery">&times;</a>
			</div>
		</div>
		<div id="gal4" className="pop-overlay animate">
			<div className="popup">
				<img src={g4} alt="Popup Image" className="img-fluid" />
				<p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
				<a className="close" href="#gallery">&times;</a>
			</div>
		</div>
		<div id="gal5" className="pop-overlay animate">
			<div className="popup">
				<img src={g5} alt="Popup Image" className="img-fluid" />
				<p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
				<a className="close" href="#gallery">&times;</a>
			</div>
		</div>
		<div id="gal6" className="pop-overlay animate">
			<div className="popup">
				<img src={g6} alt="Popup Image" className="img-fluid" />
				<p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
				<a className="close" href="#gallery">&times;</a>
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
export default connect(mapStateToProps,mapDispatchToProps)(Gallery);
