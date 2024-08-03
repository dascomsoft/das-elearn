"use client";
import Link from 'next/link';
import '../components/navbar.css';
import Image from 'next/image';
import logo from '../images/logos.jpg'


const Navbar = () => {

 

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top py-2">
      <div className="container">
        <a className="navbar-brand" href="/">
          <h1 className="display-4">E<span className="text-warning">learn</span></h1>
        </a>
        <button className="navbar-toggler icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon icon-btn"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav aria-expanded ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">ABOUT</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/pricing">PRICING</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/courses">COURSES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/contact">CONTACT</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link active btn bg-danger btn-lg ms-5" aria-current="page" href="/enroll">ENROLL NOW</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>



  )
}

export default Navbar