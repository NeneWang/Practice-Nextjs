import PostGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid key={post.slug} posts={post} />
    </section>
  );
}
export default FeaturedPosts;
