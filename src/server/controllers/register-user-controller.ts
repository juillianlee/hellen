import { NextApiRequest, NextApiResponse } from "next";
import { EmailAlreadyInUseError } from "../errors/email-already-in-use";
import UserModel from "../models/User";

const Joi = require("joi").extend(require("@joi/date"));

export class RegisterUserController {
  async handle(req: NextApiRequest, res: NextApiResponse) {
    const schema = Joi.object({
      name: Joi.string().required().trim(),
      username: Joi.string().required().trim(),
      email: Joi.string().required().trim(),
      birthDate: Joi.date()
        .format(["DD/MM/YYYY", "YYYY-MM-DD", "DD-MM-YYYY"])
        .required(),
    });

    const value = await schema.validateAsync(req.body);

    const userExists = await UserModel.findOne({ email: value.email });
    if (userExists) {
      throw new EmailAlreadyInUseError(value.email);
    }

    const user = await UserModel.create(value);

    res.json({
      user,
    });
  }
}
