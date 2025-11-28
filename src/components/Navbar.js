import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/tag/${search.toLowerCase()}`);
      setSearch("");
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="blog-navbar navbar navbar-expand-lg px-4">
        <NavLink className="navbar-brand fw-bold" to="/">
          MyBlog
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn d-lg-none"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>

        {/* Desktop Navbar */}
        <div className="collapse navbar-collapse d-none d-lg-flex" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-3">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">
                All Blogs
              </NavLink>
            </li>

            {/* Categories Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" data-bs-toggle="dropdown">
                Categories
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/category/React">React</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/JavaScript">JavaScript</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/Frontend">Frontend</NavLink></li>
              </ul>
            </li>

            {/* Tags Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" data-bs-toggle="dropdown">
                Tags
              </a>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/tag/react">React</NavLink></li>
                <li><NavLink className="dropdown-item" to="/tag/javascript">JavaScript</NavLink></li>
                <li><NavLink className="dropdown-item" to="/tag/frontend">Frontend</NavLink></li>
              </ul>
            </li>

            {/* Search Bar */}
            <li className="nav-item">
              <form className="nav-search" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search tags..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">🔍</button>
              </form>
            </li>
          </ul>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div className={`mobile-slide-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-title">Menu</div>
        <ul className="sidebar-list">
          <li><NavLink to="/" onClick={() => setSidebarOpen(false)}>All Blogs</NavLink></li>
          <li><NavLink to="/category/React" onClick={() => setSidebarOpen(false)}>React</NavLink></li>
          <li><NavLink to="/category/JavaScript" onClick={() => setSidebarOpen(false)}>JavaScript</NavLink></li>
          <li><NavLink to="/category/Frontend" onClick={() => setSidebarOpen(false)}>Frontend</NavLink></li>
          <li><NavLink to="/tag/react" onClick={() => setSidebarOpen(false)}>React Tag</NavLink></li>
          <li><NavLink to="/tag/javascript" onClick={() => setSidebarOpen(false)}>JavaScript Tag</NavLink></li>
          <li><NavLink to="/tag/frontend" onClick={() => setSidebarOpen(false)}>Frontend Tag</NavLink></li>
        </ul>

        {/* Search inside sidebar */}
        <form className="nav-search mt-3" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}
    </>
  );
}
