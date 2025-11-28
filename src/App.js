import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";
import CategoryPage from "./pages/CategoryPage";
import TagsPage from "./pages/TagsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/tag/:tag" element={<TagsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
