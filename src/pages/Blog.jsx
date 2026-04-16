import React from "react";
import { Link } from "react-router-dom";
function Blog(){
    return(
        <main className="section">
            <h2>My Blog</h2>
            <p>Welcome to my blog! This is where I'll document my spring break adventures!</p>
            <article className="blog-post">
                <h3>Spring Break 2026</h3>
                <p>I went to a beach in long beach called flat rock point.</p>
                <p>The purpose of this visit was to specifically find crystals</p>
                <p>The goal was accomplished here is a pic of the crystals I got</p>
            </article>
        </main>
    );
}

export default Blog;