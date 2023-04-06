//@ts-nocheck
import { generatePaginationData, generateResponse } from "lib/helpers";
import clientPromise from "lib/mongodb";
import { Collection } from "mongodb";
import { NextApiRequest } from "next";
import { User } from "./types";

const DATABASE = "blog";
const COLLECTION = "users";

let client;
let db;
let collection: Collection;

const init = async () => {
  if (db) return;

  try {
    client = await clientPromise;
    db = await client.db(DATABASE);
    collection = await db.collection(COLLECTION);
  } catch (error) {
    throw new Error("Connection to Database failed");
  }
};

(async () => {
  await init();
})();

export const getHttpUsers = async (request: NextApiRequest) => {
  try {
    if (!collection) await init();

    const pagination = await generatePaginationData(request, collection);

    const result = await collection
      .find({})
      .limit(pagination.perPage)
      .map((item: User) => ({ ...item, _id: item._id.toString() }))
      .toArray();

    return generateResponse(result, pagination);
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
