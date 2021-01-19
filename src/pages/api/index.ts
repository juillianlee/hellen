import { NextApiRequest, NextApiResponse } from "next";
const Joi = require("joi").extend(require("@joi/date"));
import handler from "../../server/utils/handler";

import { EmailAlreadyInUseError } from "../../server/errors/email-already-in-use";

import UserModel from "../../server/models/User";
import { UserHelper } from "../../server/domain/helper/User";

handler.get(async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await UserModel.find();

    const usersHelper = users.map((u) => {
      return new UserHelper(u)
    });
    res.json(usersHelper);
  } catch(err) {
    res.json({
      err: err.message
    })
  }
  
});

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
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
});

export default handler;
