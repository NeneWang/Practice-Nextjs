import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://nelson:1223@cluster0.kzhr5.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );
  return client;
}
