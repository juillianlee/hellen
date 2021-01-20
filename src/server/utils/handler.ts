import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import dbMiddleware from "./database";

const handler = nextConnect({
  onError: function (err, _: NextApiRequest, res: NextApiResponse) {
    if ("statusCode" in err) {
      return res.status(err.statusCode).json({
        message: err.message,
        statusCode: err.statusCode,
        error: err.name,
      });
    }
    res.status(500).end(err.toString());
  }
});
handler.use(dbMiddleware);

export default handler;
