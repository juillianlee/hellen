import { NextApiRequest, NextApiResponse } from "next";
import { UserHelper } from "../domain/helper/User";
import UserModel from "../models/User";

export class GetUsersController {
  async handle(_: NextApiRequest, res: NextApiResponse) {
    const users = await UserModel.find();

    const usersHelper = users.map((u) => {
      return new UserHelper(u);
    });
    res.json(usersHelper);
  }
}
