import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getUserLogin } from "../database/UserQueries";
import Logger from "../startup/logging";
import IApiRes_Global from "../types/api_responses/IApiRes_Global";
import IApiRes_UserLogin from "../types/api_responses/IApiRes_UserLogin";
import IQR_UserLogin from "../types/query_results/IQR_UserLogin";
import config from "config";

export async function userLoginHandler(req: Request, res: Response) {
  let response: IApiRes_Global<IApiRes_UserLogin> = {
    success: false,
  };

  // Getting the user from the database.
  const user: IQR_UserLogin | null = await getUserLogin(req.body.username, req.body.password);

  // If the user is not found, return an error message.
  if (!user) {
    Logger.info("Authentication failed for user: " + req.body.username);
    response.message = "Invalid username or password";
    return res.status(400).send(response);
  }

  // If the user is found, generate a token and return it to the user.
  Logger.info("Authentication successful for user: " + req.body.username);
  response.success = true;
  response.data = {
    token: generateToken(user),
  };
  return res.status(200).send(response);
}

function generateToken(user: IQR_UserLogin) {
  const KEY: string = config.get("jwtPrivateKey");

  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      username: user.username,
      roles: user.roles,
      organization_id: user.organization_id,
    },
    KEY,
    {
      expiresIn: "1h",
    }
  );
}
