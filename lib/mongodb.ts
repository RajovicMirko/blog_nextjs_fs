import { MongoClient, MongoClientOptions } from "mongodb";

const URI = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

if (!URI) {
  throw new Error("Add MONGODB_URI variable to .env.local");
}

const client = new MongoClient(URI, options);
const clientPromise = client.connect();

export default clientPromise;
