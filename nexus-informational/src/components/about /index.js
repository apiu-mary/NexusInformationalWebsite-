import {React} from 'react';
import './style.css'

const About = ()=> {
  return (
    <div>
      <div className='body'>
    <div className='about'>
      <div>
      <h2 className='title'>Why Nexus?</h2>
      <p className='text' data-testid= "text">
      Welcome to the future of energy management with the Nexus Interface Unit.
      This innovative device offers real-time power monitoring,providing you with constant updates on your power capacity 
      and insights to enhance your energy management.It introduces a groundbreaking power-sharing feature, addressing situations 
      where electricity resources are limited and enabling seamless collaboration with neighboring users. 
      Our mission is to empower hydro mini-grid users in rural Kenya, revolutionizing the way they plan and monitor their power consumption. 
      </p>
      </div>
      <div className='shapes'>
      <div className="square1" data-testid = "square1"></div><br/>
      <div className="square2" data-testid = "square2"></div><br/>
     <div className="circle" data-testid = "circle">    
      <img className="pic" src="img/images/ciu.png" alt='Customer Interface Unit'/></div>
     </div>
     </div>
    </div>
    </div>
  )
};

export default About;
