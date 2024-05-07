import React from 'react'

export default function AboutUs(props) {
  return (
    
    <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>
      <h1>{props.heading}</h1>
      <p>This website halps you analyze the text you enter.It will show you the word count and character count of your entered text also display the minimum time to in which the entered text can be read. the website has other functionalities like converting the text into upper and lower case as per reqirement.This is a extremely useful website with useful functionalities. </p>
    </div>
    
  )
}
