import React from "react";
import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <div>React Meeetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Some Link</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
