import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Gallery from "./components/gallery/Gallery";
import SideMenu from "./components/sideMenu/SideMenu";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
//Styles
import "./core-ui/index.css";
import BlogPost from "./components/blog-post/BlogPost";
import NotFound from "./components/not-found/NotFound";

const App: FC = () => {
  return (
    <Router>
      <SideMenu />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:title" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
