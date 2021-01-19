import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";

async function database(_: NextApiRequest, res: NextApiResponse, next: any) {
  try {
    await mongoose.connect("mongodb+srv://hellen:hellen@cluster0.jfq3j.mongodb.net/hellen", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    next();
  } catch(ex) {
    res.json({
      error: 'INTERNAL_SERVER_ERROR'
    })
  }
  
};

const middleware = nextConnect();
middleware.use(database);
export default middleware;