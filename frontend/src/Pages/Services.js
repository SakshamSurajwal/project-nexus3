import React from 'react'
import Cards from '../Components/Card'

const Contact = () => {

  return (
    <div>
      <img className='conImg'
      alt='services' src={'https://thumbs.dreamstime.com/b/automation-business-industrial-process-workflow-optimisation-software-development-concept-virtual-screen-141548980.jpg'}></img> 
      <div className='conM'>
        <div className='serText'><b>Services</b></div>
          <Cards imgurl='https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg=' 
          heading='Helps in increasing your business reach' 
          bodyText='
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim sed faucibus. E
          nim ut sem viverra aliquet. Ultricies mi eget mauris phar
          etra et. Tortor condimentum lacinia quis vel eros donec ac.'/>
          <Cards imgurl='https://www.hostgator.com/blog/wp-content/uploads/2021/03/How-to-Make-a-Website-Quickly.jpg' 
          heading='Beautiful designs' 
          bodyText='
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim sed faucibus. E
          nim ut sem viverra aliquet. Ultricies mi eget mauris phar
          etra et. Tortor condimentum lacinia quis vel eros donec ac.'/>
          <Cards imgurl='https://cdn0.iconfinder.com/data/icons/finance-flat-pixel-perfect/64/finance-02-512.png' 
          heading='Website within budget' 
          bodyText='
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim sed faucibus. E
          nim ut sem viverra aliquet. Ultricies mi eget mauris phar
          etra et. Tortor condimentum lacinia quis vel eros donec ac.'/>
          <Cards imgurl='https://images.ctfassets.net/jicu8fwm4fvs/5386jOfXlgzFuVkJ4EGrPv/b8783497b12a884dd4dc899910d56620/topics-what-is-a-tech-stack-hero__1_.png' 
          heading='Thoughful selection of the tech stack' 
          bodyText='
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim sed faucibus. E
          nim ut sem viverra aliquet. Ultricies mi eget mauris phar
          etra et. Tortor condimentum lacinia quis vel eros donec ac.'/>
      </div>
    </div>
  )
}

export default Contact
