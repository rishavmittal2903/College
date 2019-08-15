import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';
import t1 from '../Images/t1.jpg';
import t2 from '../Images/t2.jpg';
import t3 from '../Images/t3.jpg';
import t4 from '../Images/t4.jpg';
class StaffDetails extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="StaffDetailDiv">
   		<section className="teams text-center py-5" id="professors">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="text-bl font-weight-bold mb-2">Our Professors</h3>
			<h6 className="text-colors let-spa mb-5">Brilliant</h6>
			<div className="row inner-sec-w3ls-w3pvt-aminfo pt-sm-4">
				<div className="col-md-3 col-sm-6 p-0">
					<div className="team-grid text-center">
						<div className="team-img">
							<img className="img-fluid rounded" src={t1} alt=""/>
						</div>
						<div className="team-info">
							<h4>Marian Dupre</h4>
							<ul className="d-flex justify-content-center py-3 social-icons">
								<li className="effect-soc-team1">
									<a href="#">
										<span className="fa fa-facebook-f"></span>
									</a>
								</li>
								<li className="effect-soc-team2">
									<a href="#">
										<span className="fa fa-twitter"></span>
									</a>
								</li>
								<li className="effect-soc-team3">
									<a href="#">
										<span className="fa fa-google-plus"></span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6 p-0 top-tem">
					<div className="team-grid text-center">
						<div className="team-img">
							<img className="img-fluid rounded" src={t2} alt=""/>
						</div>
						<div className="team-info">
							<h4>Ruth Chase</h4>
							<ul className="d-flex justify-content-center py-3 social-icons">
								<li className="effect-soc-team1">
									<a href="#">
										<span className="fa fa-facebook-f"></span>
									</a>
								</li>
								<li className="effect-soc-team2">
									<a href="#">
										<span className="fa fa-twitter"></span>
									</a>
								</li>
								<li className="effect-soc-team3">
									<a href="#">
										<span className="fa fa-google-plus"></span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6 p-0 mt-sm-0 mt-5">
					<div className="team-grid text-center">
						<div className="team-img">
							<img className="img-fluid rounded" src={t3} alt=""/>
						</div>
						<div className="team-info">
							<h4>Judy Crouse</h4>
							<ul className="d-flex justify-content-center py-3 social-icons">
								<li className="effect-soc-team1">
									<a href="#">
										<span className="fa fa-facebook-f"></span>
									</a>
								</li>
								<li className="effect-soc-team2">
									<a href="#">
										<span className="fa fa-twitter"></span>
									</a>
								</li>
								<li className="effect-soc-team3">
									<a href="#">
										<span className="fa fa-google-plus"></span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-6 p-0 top-tem">
					<div className="team-grid text-center">
						<div className="team-img">
							<img className="img-fluid rounded" src={t4} alt=""/>
						</div>
						<div className="team-info">
							<h4>Judy Crouse</h4>
							<ul className="d-flex justify-content-center py-3 social-icons">
								<li className="effect-soc-team1">
									<a href="#">
										<span className="fa fa-facebook-f"></span>
									</a>
								</li>
								<li className="effect-soc-team2">
									<a href="#">
										<span className="fa fa-twitter"></span>
									</a>
								</li>
								<li className="effect-soc-team3">
									<a href="#">
										<span className="fa fa-google-plus"></span>
									</a>
								</li>
							</ul>
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
export default connect(mapStateToProps,mapDispatchToProps)(StaffDetails);
