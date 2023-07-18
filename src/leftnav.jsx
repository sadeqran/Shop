import React from "react";

const Leftnav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light pink ">
        <a className="navbar-brand" href="/">
          <img
            src={"/assets/image/mark2.png"}
            width="30"
            height="30"
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

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-around ">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
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
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/">
                  girls
                </a>
                <a className="dropdown-item" href="/">
                  boys
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  minimal
                </a>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
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
              <a className="nav-link" href="/">
              <i className="bi bi-search"></i>
              <i className="bi bi-person-circle pl-2"></i>
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Leftnav;
