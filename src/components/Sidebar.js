import { Link } from "react-router-dom";

export default function Sidebar({ blogs }) {
  const categories = [...new Set(blogs.map(b => b.category))];
  const recentPosts = blogs.slice(0, 5);

  return (
    <div className="sidebar">

      {/* Search */}
      <div className="sidebar-box">
        <h5>Search</h5>
        <input className="form-control" placeholder="Search..." />
      </div>

      {/* Categories */}
      <div className="sidebar-box">
        
        <h5>Categories</h5>
        <ul className="list-unstyled">
          {categories.map((cat) => (
            <li key={cat}>
              <Link to={`/category/${cat}`}>{cat}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="sidebar-box">
        <h5>Recent Posts</h5>
        <ul className="list-unstyled">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="sidebar-box">
        <h5>Tags</h5>
        <div>
          {blogs[0].tags.map((tag) => (
            <Link key={tag} to={`/tag/${tag}`} className="badge bg-light text-dark me-2 mb-2">
              {tag}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
