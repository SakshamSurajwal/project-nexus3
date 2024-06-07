import React from 'react'
import Cards from '../Components/Card'

const HomePage = () => {

  return (
    <div>
      <img className='conImg'
      alt='services' src={'https://media.istockphoto.com/id/1460853312/photo/abstract-connected-dots-and-lines-concept-of-ai-technology-motion-of-digital-data-flow.jpg?s=612x612&w=0&k=20&c=bR6oXBoagK2Yagty_At67Dx_wiYRuKJY3hM_ZHCuIxo='}></img> 
      <div className='conM'>
        <div className='hmText'><b>Welcome to N-Tech</b></div>
        <div><b>About Us...</b></div>
        <p className='abT' style={{textAlign:'center',color:'black',fontFamily:'monospace',marginLeft:'10vw',marginRight:'10vw',
        marginBottom:'5vh'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita
        tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in v
        oluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
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

export default HomePage
