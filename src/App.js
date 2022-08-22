import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects ';

function App() {
  const [currentPage, setCurrentPage] = useState(0)

  function displayPage() {
    if (currentPage === 0) {
      return <Header></Header>;
    } else if (currentPage === 1) {
      return <Projects></Projects>
    } else {
      return <Projects></Projects>
    }
  }

  return (
    <>
      <Nav setCurrentPage={setCurrentPage} />
      {displayPage()}
      <main>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App;


