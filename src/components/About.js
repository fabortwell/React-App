
import React from 'react'
import john from './images/john-doe.png'
import './About.css'


const About = () => {
  return (
    <div className='about'>
        <div className='container'>
            <img src={john} alt='john' />
            <div className='col-2'>
                <h2>About</h2>
       <span className='line'></span>
       <p>Intense is an International software engineering company with offices in multiple jurisdictions over the world. Working with Intense gives me the ability to advise international expatriates living in the middle east from where I live in USA.</p>
       <p>I am Brian Sitati, a senior advisor for an independently owned software development company called BrinTech.</p>
<button className='button'>Explore More</button>
            </div>
        </div>
    </div>
  )
}

export default About