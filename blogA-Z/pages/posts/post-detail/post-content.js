import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

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

export default function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
