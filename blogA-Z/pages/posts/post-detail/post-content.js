import PostHeader from './post-header'

const DUMMY_POSTS = {
  slug: "getting-started-with-nextjs",
  title: "Getting Stated with NextJS",
  image: "getting-started-nextjs.png",
  excerpt:
    "NextJS is the React framework for production, it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
  date: "2022-02-10",
  content: "# This is a first post",
};
import React from "react";

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      {DUMMY_POSTS.content}
    </article>
  );
}
