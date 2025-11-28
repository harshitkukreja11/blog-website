import { useState } from "react";
import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";
import Sidebar from "../components/Sidebar";  // <-- Add this
import "./BlogList.css";

export default function BlogList() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-5 blog-list-page">

      {/* Title */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Latest Blog Posts</h1>
        <p className="text-muted">Explore tutorials, guides, and trending topics.</p>
      </div>

      {/* Search + Category Filter */}
      <div className="row mb-4 justify-content-center">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            placeholder="Search blogs..."
            className="form-control blog-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3 mb-2">
          <select
            className="form-select blog-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* ---------- MAIN LAYOUT ROW ---------- */}
      <div className="row">

        {/* LEFT SIDE — BLOGS */}
        <div className="col-md-8">
          <div className="row g-4">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div className="col-md-6" key={blog.id}>
                  <BlogCard blog={blog} />
                </div>
              ))
            ) : (
              <h4 className="text-center mt-4 text-danger">No blogs found.</h4>
            )}
          </div>
        </div>

        {/* RIGHT SIDE — SIDEBAR */}
        <div className="col-md-4">
          <Sidebar blogs={blogs} />
        </div>

      </div>
    </div>
  );
}
