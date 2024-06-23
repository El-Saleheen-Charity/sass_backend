import { executeQuery } from "../startup/db";
import IQR_GetAllIndigents from "../types/query_results/IQR_GetAllIndigents";

export const getIndigentList = async (): Promise<IQR_GetAllIndigents[] | null> => {
  const query = `select * from get_indigents_with_details();`;
  const result: IQR_GetAllIndigents[] = await executeQuery(query);
  return result;
};
