import { getSession } from "next-auth/client";

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

}

export default handler;
