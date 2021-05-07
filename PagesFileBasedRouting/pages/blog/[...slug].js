import React from "react";
import { useRouter } from "next/router";

export default function BlogPostPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
