import React, { useEffect } from "react";
import { useLocation, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import { HashLink } from "react-router-hash-link";

function App() {
  return (
    <>
      <ScrollToHash />

      <div className="app">
        <nav className="navbar">
          <Link to="/" className="nav-logo">MyPortfolio</Link>

          <div className="nav-links">
            <HashLink smooth to="/#about">About</HashLink>
            <HashLink smooth to="/#projects">Projects</HashLink>
            <HashLink smooth to="/#contact">Contact</HashLink>
            <Link to="/blog">Blog</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default App;
