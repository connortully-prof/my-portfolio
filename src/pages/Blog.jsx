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

      <article className="blog-post">
        <h3>Garden Feb-May 2026</h3>
        <p>
            This season I have 3 plots in total in my garden as opposed to the 1 I had last season. In the first garden plot I currently have carrots, lettuce, onions, and marigolds planted. I am planning on adding some tomatoes to the garden when they grow enough.
            In the second plot I have broccoli, beets, dill, cucumbers, nasturiums, chamomile, and sunflowers. In my third garden bed I have strawberries and one lone potato plant. 
        </p>

        <motion.div
          className="blog-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/my-portfolio/gardenplots.jpg" alt="Image of garden plots" />
          <h3>Picture of my whole garden</h3>
          <p>
            This is a picture of the garden plots as of today with all my crops in it,
            The far one is the one with the carrots, the one to the left of that is the one with the beets,
            and the one closest to me is the strawberry bed.
          </p>
        </motion.div>

        <motion.div
          className="blog-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/my-portfolio/basket.jpg" alt="Image of carrots and beets" />
          <h3>Crops Harvested</h3>
          <p>
            This is a picture of the crops that I picked from my first harvest with my tortoise in the background grabbing a bite.
            The carrots and beets are the first things I planted and they took the least time to grow so im harvesting some of them first.
          </p>
        </motion.div>
      </article>
    </main>
  );
}

export default Blog;
