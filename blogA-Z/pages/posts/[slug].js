import React from "react";
import { getPostData } from "../../lib/posts-util";

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
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default PostDetailPage;
