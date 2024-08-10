"use client";
import Link from 'next/link';
import '../components/navbar.css';
import Image from 'next/image';


const Navbar = () => {

 

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top py-2">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <h1 className="display-4">E<span className="text-warning">learn</span></h1>
        </Link>
        <button className="navbar-toggler icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon icon-btn"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav aria-expanded ms-auto navigation">
            <li className="nav-item">
              <Link className="nav-link active head-link" aria-current="page" href="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active head-link" aria-current="page" href="/about">ABOUT</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active head-link" aria-current="page" href="/pricing">PRICING</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active head-link" aria-current="page" href="/courses">COURSES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active head-link" aria-current="page" href="/contact">CONTACT</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link active btn bg-danger btn-lg mx-auto px-4 py-2 fw-bolder" aria-current="page" href="/enroll">ENROLL NOW</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>



  )
}

export default Navbar