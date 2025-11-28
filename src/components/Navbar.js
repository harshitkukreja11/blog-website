import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/tag/${search.toLowerCase()}`);
      setSearch("");
    }
  };

  return (
    <nav className="blog-navbar sticky-top navbar navbar-expand-lg px-4">
      {/* Logo */}
      <NavLink className="navbar-brand fw-bold" to="/">
        MyBlog
      </NavLink>

      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto align-items-lg-center gap-3">

          {/* Home */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/">All Blogs</NavLink>
          </li>

          {/* Categories Dropdown */}
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Categories
            </span>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/category/React">React</NavLink></li>
              <li><NavLink className="dropdown-item" to="/category/JavaScript">JavaScript</NavLink></li>
              <li><NavLink className="dropdown-item" to="/category/Frontend">Frontend</NavLink></li>
            </ul>
          </li>

          {/* Tags Dropdown */}
          <li className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Tags
            </span>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/tag/react">React</NavLink></li>
              <li><NavLink className="dropdown-item" to="/tag/javascript">JavaScript</NavLink></li>
              <li><NavLink className="dropdown-item" to="/tag/frontend">Frontend</NavLink></li>
            </ul>
          </li>

          {/* Search Bar */}
          <li>
            <form className="nav-search" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search tags..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                🔍
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}
