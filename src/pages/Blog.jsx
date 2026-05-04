import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Blog() {
  return (
    <main className="section">
      <h2>My Blog</h2>
      <p>Welcome to my blog! This is where I'll document my spring break adventures!</p>

      <article className="blog-post">
        <h3>Spring Break 2026</h3>
        <p>
          I went to a beach in long beach called flat rock point with my girlfriend over spring break.
          The main purpose of going to this beach specifically because I heard it was a good place to rock hound.
          When we got there we had to park on the side of the street on a cliff and walk down a trail to the beach.
          It was very pretty and the hike wasnt that hard. Once we got to the bottom we put down a towel so my girlfriend could chill while I looked for rocks.
          However, my girlfriend started feeling sick from the lack of sleep and the smell so she ended up going back up to the car while I looked for rocks.
          I spent about 5 hours combing the beach for crystals and I got quite a phew. I was very happy with the trip and plan on going again to this beach to get more crystals!
        </p>
      </article>

      <div className="blog-items">

        <motion.div
          className="blog-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="/my-portfolio/beach.jpg" alt="Image of Flat Rock Point" />
          <h3>Flat Rock Point</h3>
          <p>This is a picture I took on top of the trail to get down to the beach.</p>
        </motion.div>

        <motion.div
          className="blog-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/my-portfolio/crystal.jpg" alt="Image of crystals collected" />
          <h3>Crystals Collected</h3>
          <p>
            This is a picture of the crystals I was able to find on the beach.
            There is an assortment of different kinds but the majority of the crystals found were barite.
            There were also different kinds of agates and a few rough geodes.
          </p>
        </motion.div>

      </div>
    </main>
  );
}

export default Blog;
