import jwt from "jsonwebtoken";
import crypto from "crypto";
import { addDays, addSeconds } from "date-fns";

export class Token {

  accessToken(payload: any) {
    const expiresIn = addSeconds(
      new Date(),
      process.env.JWT_EXPIRES_IN_SECOUNDS
    );
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN_SECOUNDS,
    });
    return {
      expiresIn,
      accessToken,
    };
  }
  refreshToken(id: string) {
    const refreshToken = crypto.randomBytes(32).toString("hex");
    const expiresIn = addDays(new Date(), 5).getTime();
    return {
      refreshToken,
      expiresIn,
    };
  }
}
