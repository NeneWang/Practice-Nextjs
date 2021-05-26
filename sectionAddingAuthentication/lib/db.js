import { MongoClient } from "mongodb";

function connectToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://nelson: @cluster0.kzhr5.mongodb.net/auth-demo?retryWrites=true&w=majority');

    return client;
}