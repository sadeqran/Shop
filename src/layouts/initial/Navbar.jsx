import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-p">
      <a className="navbar-brand" href="/">
        <img
          src={"/assets/image/mark2.png"}
          width="30"
          height="27"
          className="d-inline-block align-top"
          alt=""
        />
        MARS
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent" style={{textAlign:"right"}}>
        <ul className="navbar-nav f-1 justify-content-around ">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              صفحه اصلی <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              محصولات
            </a>
            <div className="dropdown-menu bxshadow">
              <a className="dropdown-item" href="/">
                دخترانه
              </a>
              <a className="dropdown-item" href="/">
                پسرانه
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                مینیمال
              </a>
            </div>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/#discount">
              تخفیفات
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="tel:09358676598">
              <i className="bi bi-telephone pr-1"></i>
              09358676598
            </a>
          </li>

          <li className="nav-item">
            <div className="nav-link">
              <input className="searchInput" />
              <button className="btn-search" type="submit">
                <i className="fas fa-search "></i>
              </button>
              <NavLink to="/sign">
                <button className="btn-sign ml-2" type="submit">
                  <i className="bi bi-person-circle "></i>
                </button>
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
