import jwt from "jsonwebtoken";
import config from "config";
import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils/jwt";
import { IUserRole } from "../types/IJwtToken";

export const rolesHierarchy: Record<string, string[]> = {
  root: ["admin", "charityAdmin", "charityUser"],
  admin: ["charityAdmin", "charityUser"],
  charityAdmin: ["charityUser"],
  charityUser: [],
};

function hasRole(userRole: string, requiredRole: string): boolean {
  if (userRole === requiredRole) return true;
  if (!rolesHierarchy[userRole]) return false;
  return rolesHierarchy[userRole].includes(requiredRole);
}

export function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;

  if (!token) return res.status(401).send("Access denied. No token provided.");

  const bearerToken = token.split(" ")[1];

  try {
    jwt.verify(bearerToken, config.get("jwtPrivateKey"));
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}

export function authorize(requiredRole: IUserRole) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      const decodedToken = decodeToken(token ?? "");

      if (!decodedToken) return res.status(401).send("Access denied. No token provided.");

      const userRole = decodedToken.roles;

      if (!userRole || !hasRole(userRole, requiredRole)) {
        return res.status(403).send("Access denied. Insufficient permissions.");
      }

      next();
    } catch (ex) {
      res.status(400).send("Invalid token.");
    }
  };
}
