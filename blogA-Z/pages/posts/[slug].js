import React from "react";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

import PostContent from "./post-detail/post-content";
import { getPostData } from "../../lib/posts-util";

function PostDetailPage() {
  return <PostContent />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: "blocking",
  };
}

export default PostDetailPage;
