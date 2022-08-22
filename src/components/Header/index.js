import React from 'react';
import Selfie from '../../assets/imgs/selfie.jpeg'
import '../../index.css'

function Header() {

  return (
    <>
      <section class="hero" id="About-Me">
        <div class="selfie">
          <img src={Selfie} alt="a normal selfie of myself" />
        </div>

        <div class="hero-cta">
          <h2>About Me</h2>
          <p>
            Hi! My name is Cody Eddie. I am 26 years old and I am from New Mexico. I've lived in Utah since 2015 and
            have spent most of my time here working in call center and customer service jobs. Outside of work, I
            like watching tv, listening to music, and spending time with the people I care about. I also love
            writing poetry in my spare time. You can find most of my poetry on my Instagram page. I chose to start a
            career in web development because I have always found the field to be very interesting and rewarding
            when I watched my friends enter it. My goal is to become a web developer and continue to learn more and
            hopefully use my skills to better myself and help others out when applicable.
          </p>
        </div>
      </section>
      {/* <h1 id='intro'>About Me</h1> */}

    </>

  )
}

export default Header