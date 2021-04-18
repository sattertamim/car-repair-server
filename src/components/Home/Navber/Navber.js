import React from 'react';
import logo from '../../../Images/logo.png';
const Navber = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="160" height="54"/>
    </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
              <li class="ms-5 ms-5">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="ms-5">
                <a class="nav-link" href="#">About-Us</a>
              </li>
              <li class="ms-5">
                <a class="nav-link" href="/service">Services</a>
              </li>
              <li class="ms-5">
                <a class="nav-link" href="/admin">Admin</a>
              </li>
              <li class="ms-5">
                <a class="nav-link" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navber;