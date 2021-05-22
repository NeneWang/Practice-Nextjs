const DUMMY_POSTS = {
  slug: "getting-started-with-nextjs",
  title: "Getting Stated with NextJS",
  image: "getting-started-nextjs.png",
  excerpt:
    "NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
  date: "2022-02-10",
};
import React from "react";

export default function PostContent() {
  return (
    <article>
      <PostHeader title="" image="" />
      CONTENT
    </article>
  );
}
