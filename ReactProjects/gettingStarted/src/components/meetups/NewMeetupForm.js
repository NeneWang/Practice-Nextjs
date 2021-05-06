import React from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

export default function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address" />
        </div>
      </form>
      <div className={classes.control}>
        <label htmlFor="description">Meetup description</label>
        <textArea rows="5" required id="description"></textArea>
      </div>
      <div className={classes.action}>
        <button>Add Meetup</button>
      </div>
    </Card>
  );
}
