import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click); /* on clicking hamburger will show the menu  */
    setExpanded(!expanded);
  };
  const [color, setColor] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const changeColor = () => {
    if (window.scrolly >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xxl ">
          <div className="row nav_row">
            <div className="logo">
              <div className="menu-bottom d-flex  align-items-center gap-30">
                <a className="navbar-brand d-flex" href="/">
                  <img
                    src="/images/alumni-logo.png"
                    className="img-nitp d-flex "
                    alt=""
                  />
                  <p>
                    <span className="text-white texts fw-bold">
                      {" "}
                      Alumni Association
                    </span>
                    <br />
                    <span className="text-white texts"> NIT PATNA</span>
                  </p>
                </a>
              </div>
            </div>

            <div className={`mobile_nav ${expanded ? "expanded" : ""}`}>
              <div className="nav d-flex d-block me-auto gap-15">
                {/* <li className="nav-item active">
                  <a className="nav-link text-white" href="/">
                    Home
                  </a>
                </li> */}

                <div className="dropdown  ">
                  {/* <button
                    type="button"
                    className="btn btn-warning "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  > */}
                  <li>
                    <a href="/" className="text-white ">
                      HOME
                    </a>
                  </li>
                  {/* </button> */}
                </div>

                <div className="dropdown ">
                  {/* <button
                    type="button"
                    className="btn btn-warning "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  > */}
                  <li>
                    <Link className=" text-white" to="#">
                      ABOUT US
                    </Link>
                  </li>
                  {/* </button> */}
                </div>

                <div className="dropdown ">
                  {/* <button
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  > */}
                  <li
                    className="dropdown-toggle text-white"
                    data-bs-toggle="dropdown"
                  >
                    ALUMNI
                  </li>
                  {/* </button> */}
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Log In
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Sign Up
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        News
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown ">
                  {/* <button
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  > */}
                  <li
                    className="dropdown-toggle text-white"
                    data-bs-toggle="dropdown"
                  >
                    REUNION
                  </li>
                  {/* </button> */}
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item text-white " href="#">
                        Upcoming Reunions
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Reunion 22-23
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Past Reunion
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown ">
                  {/* <button
                    type="button"
                    className="btn btn-warning dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  > */}
                  <li
                    className="dropdown-toggle text-white"
                    data-bs-toggle="dropdown"
                  >
                    DONATE
                  </li>
                  {/* </button> */}
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item text-white " href="#">
                        Why Give
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Causes to Donate
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Ways of Giving
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Power of Your Gifts
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="hamburger" onClick={handleClick}>
              {click ? (
                <FaTimes size={20} style={{ color: "#fff" }} />
              ) : (
                <FaBars size={20} style={{ color: "#fff" }} />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12 ">
              <div className="menu-bottom d-flex  align-items-center gap-30">
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Alumni</NavLink>
                    <NavLink to="/">Gallery</NavLink>
                    <NavLink to="/">Donate</NavLink>
                  </div>
                </div>
                <div class="dropdown d-flex d-block ms-auto align-items-center">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="images/user.svg" className="image-user" alt="" />
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item text-white" href="#">
                        Log In
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item text-white" href="#">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
