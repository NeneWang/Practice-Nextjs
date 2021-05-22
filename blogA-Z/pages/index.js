import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

import { getFeaturedPosts } from "../lib/posts-util";


export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      {/* <FeaturedPosts  posts={props.posts} /> */}
    </Fragment>
  );
}

