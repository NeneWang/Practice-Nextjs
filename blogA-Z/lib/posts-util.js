import fs from "fs";
import path from "path";
import React from "react";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostdata(fileName) {
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

function getAllPosts() {
  const postFiles = fs.readdyrSync(postsDirectory);

  for (const postFile of postFiles) {
    const postData = getPostdata(postFile); 
  }
}
