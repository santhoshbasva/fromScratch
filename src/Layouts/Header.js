import React from 'react'
import TextComponent from '../Components/TextComponent';
import './index.css';

const Header = () => {
  return (
    <div className='div-headerComp'>
        <div>
        <img src="https://i.ibb.co/mh20tKw/image-2.png" alt="Logo" className='clgLogo' />
        </div>
        <div className='div-hc1' >
          <TextComponent  label="SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY" className='text1' />
          <TextComponent label="Exam Scheduler" className='text2' />
        </div>
        <div className='div-hc2'>
          <img src="https://i.ibb.co/wgKdx86/healthicons-ui-user-profile.png" className='UserLogo'/>
          <TextComponent label = "Waseem" className='text3' />
        </div>
    </div>
  )
}

export default Header