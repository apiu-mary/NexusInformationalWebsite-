import {React} from 'react';
import './style.css'

const About = ()=> {
  return (
    <div className='body'>
      <div className='body'>
          <h2 className='title'>Why Nexus?</h2>
    <div className='about'>
      
      <p className='text' data-testid= "text">
      Welcome to the future of energy management with the <strong>Nexus Interface Unit.</strong>
      <br/>
      This innovative device offers real-time power monitoring, providing you with <br/> constant updates on your power capacity and insights to enhance your energy management.<br/> It introduces a groundbreaking power-sharing feature, addressing situations where electricity<br/>
      resources are limited and enabling seamless collaboration with neighboring users. <br/>
      Our mission is clear: to empower hydro mini-grid users in rural Kenya,<br/> revolutionizing the way they plan and monitor their power consumption. <br/>
      <br/>

      </p>
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
