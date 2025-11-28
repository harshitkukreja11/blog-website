import { Link } from "react-router-dom";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <div className="blog-card card shadow-sm">
      <div className="blog-img-container">
        <img src={blog.image} className="card-img-top blog-img" alt={blog.title} />

        {/* Category Badge */}
        <span className="blog-category">{blog.category}</span>
      </div>

      <div className="card-body">
        <h5 className="blog-title">{blog.title}</h5>

        <p className="blog-date">{blog.date}</p>

        <p className="blog-excerpt">
          {blog.content.substring(0, 120)}...
        </p>

        {/* Tags */}
        <div className="blog-tags mb-3">
          {blog.tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
        </div>

        <Link to={`/blog/${blog.id}`} className="btn-primary btn-read">
          Read More →
        </Link>
      </div>
    </div>
  );
}
