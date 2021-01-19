import mongoose, { Document, Schema, Model } from "mongoose";
import crypto from "crypto";

export enum Gender {
  "M",
  "F",
  "T",
}

export type UserDocument = Document & {
  name: string;
  email: string;
  username: string;
  gender: Gender;
  password?: string;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
  getGender(): string;
};

const UserSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["M", "F", "T"],
    default: "T",
  },
  password: {
    type: String,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.methods.getGender = function () {
  return this.gender === Gender.T
    ? "Indefinido"
    : this.gender === Gender.M
    ? "Masculino"
    : "Feminino";
};

UserSchema.pre<UserDocument>("save", async function (next) {
  this.updatedAt = new Date();
  if (this.isNew) {
    this.password = crypto.randomBytes(8).toString("hex");
  }
  next();
});

UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

const UserModel: Model<UserDocument> =
  mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);

export default UserModel;
