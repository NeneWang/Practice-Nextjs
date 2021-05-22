import Link from "next/link";
import classes from "./posts-item.module.css";

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formatedDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
  });

  return (
    <li className={classes.post}>
      <Link>
        <a href="">
          <div className={classes.image}>
            <Image src="" alt={title} width={3000} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
