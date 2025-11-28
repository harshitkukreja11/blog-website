import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

export default function BlogNavbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar on clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest(".mobile-menu-btn")
      ) {
        setOpenSidebar(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="blog-navbar d-flex justify-content-between align-items-center">
        <h2 className="navbar-brand">My Blog</h2>

        {/* Mobile menu button */}
        <button className="mobile-menu-btn" onClick={() => setOpenSidebar(true)}>
          ☰
        </button>
      </nav>

      {/* LEFT SLIDE SIDEBAR */}
      <div
        ref={sidebarRef}
        className={`mobile-slide-sidebar ${openSidebar ? "open" : ""}`}
      >
        <h3 className="sidebar-title">Browse</h3>
        <ul className="sidebar-list">
          <li><a href="/blogs">All Blogs</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/tags">Tags</a></li>
          <li><a href="/latest">Latest Posts</a></li>
        </ul>
      </div>

      {/* OVERLAY */}
      {openSidebar && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}
    </>
  );
}
