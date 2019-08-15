import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction';
class BannerSlider extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div className="BannerDiv">
   <div className="banner_w3lspvt">
  <div className="csslider infinity" id="slider1">
    <input type="radio" name="slides" checked="checked" id="slides_1" />
    <input type="radio" name="slides" id="slides_2" />
    <input type="radio" name="slides" id="slides_3" />
    <ul className="banner banner2">
      <li className="banner-top1">
        <div className="container">
          <div className="banner-info_w3ls">
            <h5 className="text-li">Your Education, Your Way! </h5>
            <h3 className="text-wh font-weight-bold mt-2 mb-5">Our Campus <br/>Student Friendly<br/>University </h3>
            <p> A Building With Four Walls And Tomorrow Inside </p>
          </div>
        </div>
      </li>
      <li className="banner banner1">
        <div className="container">
          <div className="banner-info_w3ls">
            <h5 className="text-li">DISCOVER! </h5>
            <h3 className="text-wh font-weight-bold mt-2 mb-5">Experimental Learning <br/>Approach</h3>
            <p> With Enlightenment From Laureates & Global Leaders </p>
          </div>
        </div>
      </li>
      <li className="banner banner3">
        <div className="container">
          <div className="banner-info_w3ls">
            <h5 className="text-li">LEARN! </h5>
            <h3 className="text-wh font-weight-bold mt-2 mb-5">With Right Apptitude To <br/>Innovate And Lead </h3>
            <p> From The Visionary Leaders & Dynamic Personalities </p>
          </div>
        </div>
      </li>
    </ul>
    <div className="navigation">
      <div>
        <label for="slides_1"></label>
        <label for="slides_2"></label>
        <label for="slides_3"></label>
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
export default connect(mapStateToProps,mapDispatchToProps)(BannerSlider);
