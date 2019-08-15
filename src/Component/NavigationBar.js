import React from 'react';
import {connect} from 'react-redux';
import{changeName} from '../Actions/SampleAction'
import Header from './Header';
import BannerSlider from './BannerSlider';
import Courses from './Courses';
import Notification from './Notification';
import StaffDetails from './StaffDetail';
import AboutUs from './AboutUs';
import NewsLetter from './NewsLetter';
import Clients from './Clients';
import Gallery from './Gallery';
import Blogs from './Blogs';
import ContactUs from './Contact';
import Brands from './Brands';
import Footer from './Footer';
import Copyright from './Copyright';
import '../Css/bootstrap.css';
import '../Css/css_slider.css';
import '../Css/Site.css';
import '../Css/font-awesome.min.css';


class NavigationBar extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
          <div>
			  <Header/>
	          <BannerSlider/>
			  <Courses/>
			  <Notification/>
			  <StaffDetails/>
			  <AboutUs/>
			  <NewsLetter/>
			  <Blogs/>
			  <Clients/>
			  <Gallery/>
			  <ContactUs/>
			  <Brands/>
			  <Footer/>
			  <Copyright/>
	<a href="#home" className="move-top text-center"></a>
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
export default connect(mapStateToProps,mapDispatchToProps)(NavigationBar);
