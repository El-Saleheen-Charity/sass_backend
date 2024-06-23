import { Request, Response } from "express";
import { getIndigentList } from "../database/IndigentQueries";
import IApiRes_GetAllIndigents from "../types/api_responses/IApiRes_GetAllIndigents";
import IApiRes_Global from "../types/api_responses/IApiRes_Global";
import IQR_GetAllIndigents from "../types/query_results/IQR_GetAllIndigents";

export async function getAllIndigent(req: Request, res: Response) {
  let response: IApiRes_Global<IApiRes_GetAllIndigents> = {
    success: false,
  };

  // Getting the indigentList from the database.
  const indigentList: IQR_GetAllIndigents[] | null = await getIndigentList();

  response.success = true;
  response.data = {
    indigents: indigentList ?? [],
  };

  return res.status(200).send(response);
}
