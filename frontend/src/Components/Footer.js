import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import {FormControl, VStack,Input, Button} from "@chakra-ui/react";
import axios from 'axios';

const Footer = () => {
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [mobile,setMobile]=useState();

  const submitHandler= async ()=>{
    if(!email||!name||!mobile){
      alert('Please fill all the fields')
      return;
  }

  try{
      const configuration={
          headers:{
              "Content-type":"application/json"
          }
      }
      await axios.post("/api/user/",
      {email,mobile,name},configuration);

      alert('Info stored successfully');
  }
  catch(err){
      alert('User already exits');
  }
  }

  return (
    <>
    <div style={{backgroundColor:'black',color:'white'}} className='footer p-3'>
      <div>
        <div style={{marginBottom:'5vh',borderColor:'white',borderWidth:'1px',padding:'10px',borderRadius:'10px',marginLeft:'10vw',marginRight:'10vw'}}>
          <div>Connect with us</div>
            <VStack spacing='10px'>
            <FormControl id='name'>
                <Input style={{color:'black'}} bg='white' placeholder='Enter your name' onChange={(e)=>{
                        setName(e.target.value); 
                }}>
                </Input>
              </FormControl>
              <FormControl id='email'>
                <Input style={{color:'black'}} bg='white' placeholder='Enter email' onChange={(e)=>{
                        setEmail(e.target.value); 
                }}>
                </Input>
              </FormControl>
              <FormControl id='mobile'>
                <Input style={{color:'black'}} bg='white' placeholder='Enter mobile' onChange={(e)=>{
                        setMobile(e.target.value); 
                }}>
                </Input>
              </FormControl>
              <Button colorScheme='blue' onClick={submitHandler} width='100%'>
                SUBMIT
            </Button>
          </VStack>
        </div>
        <div style={{fontSize:'30px',marginTop:'10vh'}}>@N-Tech holds all the rights</div>
        <div style={{display:'flex',marginRight:'30vw',marginLeft:'30vw'}}>
          <Link style={{color:'white',fontSize:'25px',margin:'auto'}} to='#'><FaInstagram/></Link>
          <Link style={{color:'white',fontSize:'25px',margin:'auto'}} to='#'><FaFacebook/></Link>
          <Link style={{color:'white',fontSize:'25px',margin:'auto'}} to='#'><FaLinkedin/></Link>
          <Link style={{color:'white',fontSize:'25px',margin:'auto'}} to='#'><FaWhatsapp/></Link>
        </div>
      </div>
      <div style={{fontSize:'15px'}}className='text-center mt-3'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/services'>Services</Link>
      </div>
    </div>
    </>
  )
}

export default Footer
