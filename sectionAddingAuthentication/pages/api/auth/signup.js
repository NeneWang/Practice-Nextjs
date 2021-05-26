import React from "react";

import { connectToDatabase } from "../../../lib/db";

export default async function handler(req, res) {
  const client = await connectToDatabase();
  const db = client.db();
  db.collection("users");
}
