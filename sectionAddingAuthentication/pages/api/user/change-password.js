import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection('users');

  usersCollection.findOne({email: userEmail});

}

export default handler;
