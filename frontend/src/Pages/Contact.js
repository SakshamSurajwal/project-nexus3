import { Button, FormControl, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import axios from 'axios';

const Contact = () => {
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [mobile,setMobile]=useState();
  const [services,setServices]=useState();
  const [bus,setBus]=useState();
  const [cus,setCus]=useState();
  const [sug,setSug]=useState("");

  const submitHandler= async ()=>{
    if(!email||!name||!mobile){
      alert('Please fill all the required fields the fields(email,name and phone number)')
      return;
  }

  if(!bus&&!services&&!cus){
    alert('Please provide rating for atleast one field')
    return;
}

  if((bus&&(isNaN(bus)))||(cus&&(isNaN(cus)))||(services&&(isNaN(services)))){
    alert('rating should be a number between 1-10')
    return;
  }

  if((bus&&(bus>10||bus<0))||(cus&&(cus>10||cus<0))||(services&&(services>10||services<0))){
    alert('Rating should be a number between 1-10')
    return;
  }

  try{
      const configuration={
          headers:{
              "Content-type":"application/json"
          }
      }
      await axios.post("/api/user/feedback",
      {email,mobile,name,web_ser_rat:services,bus_rat:bus,cus_ser_rat:cus,sugg:sug},configuration);

      alert('Thanks for the feedback');
  }
  catch(err){
      alert('You can provide feed back only once');
  }
  }
  return (
    <div>
      <img className='conImg'
      alt='contactUs' src='https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg='></img> 
      <div className='conM'>
        <div className='conText'><b>Contact Us</b></div>
      <div>
        <p style={{textAlign:'center',fontSize:'20px',color:'brown',fontFamily:'monospace'}}>Phone: +91 9xxxxxxxxx</p>
        <p style={{textAlign:'center',fontSize:'20px',color:'brown',fontFamily:'monospace'}}>Email: ntech@gmail.com</p>
      </div>
      <div style={{marginBottom:'5vh',borderColor:'white',borderWidth:'1px',padding:'10px',borderRadius:'10px',
      marginLeft:'10vw',marginRight:'10vw',textAlign:'center'}}>
          <div style={{fontSize:'20px',color:'black',fontFamily:'monospace'}}>Feedback</div>
      <VStack spacing='10px'>
        <FormControl id='name'>
          <Input required='true' bg='white' placeholder='Enter your name' onChange={(e)=>{
                    setName(e.target.value); 
          }}>
          </Input>
        </FormControl>
        <FormControl id='email'>
          <Input bg='white' placeholder='Enter your email' onChange={(e)=>{
                    setEmail(e.target.value); 
          }}>
          </Input>
        </FormControl>
        <FormControl id='mobile'>
          <Input bg='white' placeholder='Enter your phone number' onChange={(e)=>{
                    setMobile(e.target.value); 
          }}>
          </Input>
        </FormControl>
        <FormControl id='ser'>
          <Input bg='white' placeholder='Enter rating for web service' onChange={(e)=>{
                    setServices(e.target.value); 
          }}>
          </Input>
        </FormControl>
        <FormControl id='cusSer'>
          <Input bg='white' placeholder='Enter rating for customer service' onChange={(e)=>{
                    setCus(e.target.value); 
          }}>
          </Input>
        </FormControl>
        <FormControl id='busSer'>
          <Input bg='white' placeholder='Enter rating for business ideas' onChange={(e)=>{
                    setBus(e.target.value); 
          }}>
          </Input>
        </FormControl>
        <FormControl id='sug'>
          <Input bg='white' placeholder='Any suggestion' onChange={(e)=>{
                    setSug(e.target.value); 
          }}>
          </Input>
        </FormControl>
        <Button colorScheme='orange' onClick={submitHandler} width='100%'>
            SUBMIT
        </Button>
      </VStack>
      <div style={{textAlign:'right',fontSize:'15px',color:'black',fontFamily:'monospace'}}>Please give rating out of 10</div>
      </div>
      </div>
    </div>
  )
}

export default Contact
