function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    console.log(email, name, text);
    const newComment = {
      id: new Date().isISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    res.status(201).json({ message: "Added comment.", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      {
        id: "c1",
        name: "Max",
        email: "test@test.com",
        comments: "A first comment!",
      },
      {
        id: "c2",
        name: "Manuel",
        email: "test@test.com",
        comments: "A second comment!",
      },
    ];

    res.status(200).json({ comments: dummyList });
  }
}

export default handler;
