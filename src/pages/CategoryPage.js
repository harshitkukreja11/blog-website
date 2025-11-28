import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";
import "./CategoryPage.css";

export default function CategoryPage() {
  const { category } = useParams();
  const filtered = blogs.filter((b) => b.category === category);

  const categories = [...new Set(blogs.map((b) => b.category))];

  return (
    <div className="container py-5">

      {/* ===== CATEGORY HEADER ===== */}
      <div className="category-header">
        <h1>{category}</h1>
        <p>{filtered.length} article(s) in this category</p>
      </div>

      <div className="row mt-4">

        {/* ========== BLOG GRID ========== */}
        <div className="col-lg-8">
          {filtered.length ? (
            <div className="row">
              {filtered.map((blog) => (
                <div className="col-md-6 mb-4" key={blog.id}>
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-data">
              <h4>🚫 No blogs found under “{category}”.</h4>
              <Link to="/" className="btn btn-primary mt-3">
                Go Back to All Blogs
              </Link>
            </div>
          )}
        </div>

        {/* ========== SIDEBAR ========== */}
        <div className="col-lg-4">
          <div className="sidebar-box">
            <h5>Categories</h5>
            <ul className="sidebar-list">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <Link to={`/category/${cat}`}>{cat}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-box">
            <h5>Popular Tags</h5>
            <div className="d-flex flex-wrap gap-2">
              {[...new Set(blogs.flatMap((b) => b.tags))].map((tag, i) => (
                <Link
                  key={i}
                  to={`/tag/${tag}`}
                  className="tag-pill"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
