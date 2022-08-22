import React from 'react';

function Projects() {
  const project1 = <a href="https://attidack.github.io/weather-thoughts/"> Do You Need A Jacket?</a>
  const project2 = <a href="https://mirandas-scrunchies-240622.herokuapp.com/"> Miranda's Scrunchies</a>
  const project3 = <a href="https://pacific-anchorage-44756.herokuapp.com/"> What To Watch </a>





  return (
    <section>
      <h1 className='proHeader'>Projects:</h1>

      <div id='portfolio'>
        <div>
          <h3>{project1}</h3>
          {/* <img src={Quiz} alt='Quiz screenshot'></img> */}
          {/* <h5>{QuizRepo}</h5> */}
        </div>

        <div>
          <h3>{project2}</h3>
          {/* <img src={Schedule} alt=''></img>
      <h5>{ScheduleRepo}</h5> */}
        </div>

        <div>
          <h3>{project3}</h3>
          {/* <img src={Schedule} alt=''></img>
      <h5>{ScheduleRepo}</h5> */}
        </div>
      </div>
    </section>
  );
}
export default Projects;
