import React from 'react';
import Jacket from '../../assets/imgs/weather-thoughts.jpg'
import Scrunchies from '../../assets/imgs/mirandas-scrunchies-dashboard.jpg'
import Watch from '../../assets/imgs/what-to-watch.png'

function Projects() {
  const project1 = <a href="https://attidack.github.io/weather-thoughts/"> Do You Need A Jacket?</a>
  const project2 = <a href="https://mirandas-scrunchies-240622.herokuapp.com/"> Miranda's Scrunchies</a>
  const project3 = <a href="https://pacific-anchorage-44756.herokuapp.com/"> What To Watch </a>





  return (
    <section>
      <h1 className='proHeader'>Projects:</h1>

      <div id='projects'>
        <div className='card'>
          <h3>{project1}</h3>
          <img src={Jacket} alt=''></img>
        </div> 

        <div className='card'>
          <h3>{project2}</h3>
          <img src={Scrunchies} alt=''></img>
        </div>

        <div className='card'>
          <h3>{project3}</h3>
          <img src={Watch} alt=''></img>
        </div>
      </div>
    </section>
  );
}
export default Projects;
