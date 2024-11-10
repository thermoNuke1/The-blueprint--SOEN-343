import React from 'react';

function CustomNavBar() {

    return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center" href="#">
      <img src="../../assets/deltra-logo.png" alt="Logo" width="100" height="50" class="d-inline-block align-top me-2"></img>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-3">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tracking</a>
        </li>
      </ul>

      <div class="ms-auto">
        <button class="btn btn-outline-primary me-2">Login</button>
      </div>
    </div>
  </div>
</nav>
    );
}

export default CustomNavBar;