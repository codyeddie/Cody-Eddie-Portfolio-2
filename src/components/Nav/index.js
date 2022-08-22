import React from 'react'
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function Nav(props) {
  return (
    <>
      <nav id='navbar'>
        <div className='buttons'>
          <Button
            color="info"
            outline
            onClick={() => props.setCurrentPage(0)}>About Me</Button>
          <Button
            color="info"
            outline
            onClick={() => props.setCurrentPage(2)}>My Projects</Button>
        </div>
      </nav>
    </>
  )
}

export default Nav

