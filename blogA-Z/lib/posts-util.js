import fs from "fs";
import path from "path";
import React from "react";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFieSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = filename.replace(/\.md$/, ""); //Removes the file extension
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
}

export function getAllPosts() {
  const postFiles = fs.readdyrSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
