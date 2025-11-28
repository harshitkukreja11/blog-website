import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs";
import BlogCard from "../components/BlogCard";
import "./TagsPage.css";

export default function TagsPage() {
  const { tag } = useParams();
  const filtered = blogs.filter((b) => b.tags.includes(tag));

  const allTags = [...new Set(blogs.flatMap((b) => b.tags))];

  return (
    <div className="container py-5">

      {/* ===== TAG HEADER ===== */}
      <div className="tag-header">
        <h1>#{tag}</h1>
        <p>{filtered.length} article(s) tagged with "{tag}"</p>
      </div>

      <div className="row mt-4">

        {/* ===== MAIN BLOG LIST ===== */}
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
              <h4>🚫 No blogs found for tag “{tag}”</h4>
              <Link to="/" className="btn btn-primary mt-3">
                Back to All Blogs
              </Link>
            </div>
          )}
        </div>

        {/* ===== SIDEBAR ===== */}
        <div className="col-lg-4">
          <div className="sidebar-box">
            <h5>Popular Tags</h5>
            <div className="d-flex flex-wrap gap-2">
              {allTags.map((t, i) => (
                <Link key={i} to={`/tag/${t}`} className="tag-pill">
                  #{t}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
