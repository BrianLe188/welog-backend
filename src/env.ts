import { type Algorithm } from "jsonwebtoken";

export const JWT_SECRET = process.env.JWT_SECRET || "nguyenthuyhang";
export const JWT_ALGORITHM = (process.env.JWT_ALGORITHM ||
    "RS256") as Algorithm;
