import jwt from "jsonwebtoken";
import { IJwtToken } from "../types/IJwtToken";

export const decodeToken = (token: string): IJwtToken | null => {
  if (token) {
    try {
      return jwt.decode(token) as IJwtToken;
    } catch (error) {
      console.error("Token decoding failed:", error);
      return null;
    }
  }
  return null;
};
