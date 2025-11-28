import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";
import "./BlogDetails.css";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return <h2 className="text-center py-5">Blog not found</h2>;

  // Sidebar suggestions
  const recentPosts = blogs.slice(0, 5);
  const categories = [...new Set(blogs.map((b) => b.category))];

  return (
    <div className="blog-details-container container py-5">

      {/* ============= HERO HEADER ============= */}
      <div className="blog-hero">
        <img src={blog.image} alt={blog.title} className="hero-img" />
        <div className="hero-overlay">
          <h1>{blog.title}</h1>
          <p className="text-light">{blog.date}</p>
        </div>
      </div>

      <div className="row mt-5">

        {/* ============= LEFT CONTENT ============= */}
        <div className="col-lg-8">

          {/* Category */}
          <span className="badge bg-primary px-3 py-2 mb-3">
            {blog.category}
          </span>

          {/* Content */}
          <p className="blog-content mt-3">{blog.content}</p>

          {/* Tags */}
          <h5 className="mt-5">Tags</h5>
          <div className="d-flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <Link
                key={index}
                to={`/tag/${tag}`}
                className="tag-pill"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* ============= RIGHT SIDEBAR ============= */}
        <div className="col-lg-4">

          {/* Search */}
          <div className="sidebar-box">
            <h5>Search</h5>
            <input
              type="text"
              className="form-control"
              placeholder="Search articles..."
            />
          </div>

          {/* Categories */}
          <div className="sidebar-box">
            <h5>Categories</h5>
            <ul className="sidebar-list">
              {categories.map((cat, i) => (
                <li key={i}>
                  <Link to={`/category/${cat}`}>{cat}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="sidebar-box">
            <h5>Recent Posts</h5>
            <ul className="sidebar-list">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
