import { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

import FavoritesContext from "../../store/favorites-context";

export default function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite;

  function toggleFavoritesStatusHandler() {}
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorites</button>
        </div>
      </li>
    </Card>
  );
}
