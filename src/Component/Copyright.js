import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';

class Copyright extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="CopyrightDiv">
   					
	<div className="copyright-w3ls py-4">
		<div className="container">
			<div className="row">
				<p className="col-lg-8 copy-right-grids text-bl text-lg-left text-center mt-lg-2">© 2019 Studies. All
					Rights Reserved | Design by
					<a href="https://www.linkedin.com/in/rishav-mittal-aa5b95134/" target="_blank" title="LinkedIn" className="text-colors"> Rishav Mittal</a>
				</p>
				<div className="col-lg-4 w3social-icons text-lg-right text-center mt-lg-0 mt-3">
					<ul>
						<li>
							<a href="https://www.facebook.com/rishav.mittal.3" target="_blank" className="rounded-circle" title="facebook">
								<span className="fa fa-facebook-f"></span>
							</a>
						</li>
						<li className="px-2">
							<a href="mailto:rishavmittal2903@gmail.com" className="rounded-circle">
								<span className="fa fa-envelope"></span>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/hashtag/login?lang=en" target="_blank" className="rounded-circle" title="twitter">
								<span className="fa fa-twitter"></span>
							</a>
						</li>
						<li className="pl-2">
							<a href="https://www.linkedin.com/in/rishav-mittal-aa5b95134/" target="_blank" className="rounded-circle">
								<span className="fa fa-linkedin"></span>
							</a>
						</li>
					</ul>
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
export default connect(mapStateToProps,mapDispatchToProps)(Copyright);
