import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';
import te1 from '../Images/te1.jpg';
import te2 from '../Images/te2.jpg';
import blog1 from '../Images/blog1.jpg';
import blog2 from '../Images/blog2.jpg';
import blog3 from '../Images/blog3.jpg';
import te3 from '../Images/te3.jpg';
class Blogs extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="BlogsDiv">
   			
	<section className="blog py-5" id="blog">
		<div className="container py-xl-5 py-lg-3">
			<h3 className="text-bl text-center font-weight-bold mb-2">Latest Blog</h3>
			<h6 className="text-colors text-center let-spa mb-5">Something More</h6>
			<div className="row">
				<div className="col-lg-4 col-md-6 px-2 mt-sm-0 mt-4">
					<div className="card">
						<div className="card-header p-0 position-relative">
							<a href="#">
								<img className="card-img-bottom" src={blog2} alt="Card image cap"/>
								<span className="fa fa-user post-icon" aria-hidden="true"></span>
							</a>
						</div>
						<div className="card-body">
							<h6 className="text-colors let-spa mb-3">05 November 2018</h6>
							<h5 className="blog-title card-title font-weight-bold">
								<a href="#" className="text-bl">At vero eos et accusam et
									justo duo dolores et ea rebum</a>
							</h5>
							<div className="row mt-5">
								<div className="col-3 testi-img-res px-2">
									<img src={te1} alt=" " className="img-fluid rounded-circle" />
								</div>
								<div className="col-9 w3_testi_grid mt-xl-2 mt-lg-0 mt-md-2 mt-4">
									<h5 className="text-colors mb-1">Adam Ster</h5>
									<p>Sed do eiusmod</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 px-2 mt-md-0 mt-4">
					<div className="card">
						<div className="card-header p-0 position-relative">
							<a href="#">
								<img className="card-img-bottom" src={blog1} alt="Card image cap"/>
								<span className="fa fa-user post-icon" aria-hidden="true"></span>
							</a>
						</div>
						<div className="card-body">
							<h6 className="text-colors let-spa mb-3">08 November 2018</h6>
							<h5 className="blog-title card-title font-weight-bold">
								<a href="#" className="text-bl">At vero eos et accusam et
									justo duo dolores et ea rebum</a>
							</h5>
							<div className="row mt-5">
								<div className="col-3 testi-img-res px-2">
									<img src={te2} alt=" " className="img-fluid rounded-circle" />
								</div>
								<div className="col-9 w3_testi_grid mt-xl-2 mt-lg-0 mt-md-2 mt-4">
									<h5 className="text-colors mb-1">Anna Mull</h5>
									<p>Sed do eiusmod</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 px-2 mt-lg-0 mt-4">
					<div className="card">
						<div className="card-header p-0 position-relative">
							<a href="#">
								<img className="card-img-bottom" src={blog3} alt="Card image cap"/>
								<span className="fa fa-user post-icon" aria-hidden="true"></span>
							</a>
						</div>
						<div className="card-body">
							<h6 className="text-colors let-spa mb-3">10 November 2018</h6>
							<h5 className="blog-title card-title font-weight-bold">
								<a href="#" className="text-bl">At vero eos et accusam et
									justo duo dolores et ea rebum</a>
							</h5>
							<div className="row mt-5">
								<div className="col-3 testi-img-res px-2">
									<img src={te3} alt=" " className="img-fluid rounded-circle" />
								</div>
								<div className="col-9 w3_testi_grid mt-xl-2 mt-lg-0 mt-md-2 mt-4">
									<h5 className="text-colors mb-1">Petey Cruiser</h5>
									<p>Sed do eiusmod</p>
								</div>
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
export default connect(mapStateToProps,mapDispatchToProps)(Blogs);
