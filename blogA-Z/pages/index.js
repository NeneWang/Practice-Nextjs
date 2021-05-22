import { Fragment } from "react";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {}
];

export default function index() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={} />
    </Fragment>
  );
}
