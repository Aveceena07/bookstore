import React from "react";
import { Link } from "react-router-dom";

export default function NavbarTop() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand" href="#">
            BookStore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item text-white">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Daftar Buku
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/Novel" className="dropdown-item" href="#">
                        Novel
                      </Link>
                    </li>
                    <li>
                      <Link to="/Komik" className="dropdown-item" href="#">
                        Komik
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Ensiklopedia"
                        className="dropdown-item"
                        href="#"
                      >
                        Ensiklopedia
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Lihat Lebih Banyak
                      </a>
                    </li>
                  </ul>
                </li>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item text-white">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Genre
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/Horror" className="dropdown-item" href="#">
                        Horror
                      </Link>
                    </li>
                    <li>
                      <Link to="/Fantasi" className="dropdown-item" href="#">
                        Fantasi
                      </Link>
                    </li>
                    <li>
                      <Link to="/Komedi" className="dropdown-item" href="#">
                        Komedi
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Lihat Lebih Banyak
                      </a>
                    </li>
                  </ul>
                </li>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
