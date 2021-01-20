import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import { Token } from "../utils/token";

export class SignInController {
  _token: Token;
  constructor() {
    this._token = new Token();
  }

  async handle(req: NextApiRequest, res: NextApiResponse) {
    const schema = Joi.object({
      username: Joi.string().required().trim(),
      password: Joi.string().required().trim(),
    });

    const value = await schema.validateAsync(req.body);
    const { accessToken, expiresIn } = this._token.accessToken(value);
    const { refreshToken } = this._token.refreshToken("1");

    res.json({
      accessToken,
      refreshToken,
      expiresIn,
    });
  }
}
