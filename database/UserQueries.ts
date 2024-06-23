import { executeQuery } from "../startup/db";
import IQR_UserLogin from "../types/query_results/IQR_UserLogin";

export const getUserLogin = async (
  username: string,
  password: string
): Promise<IQR_UserLogin | null> => {
  const query = `SELECT * FROM login_user('${username}', '${password}');`;
  const result: IQR_UserLogin[] = await executeQuery(query);

  if (result.length > 0) {
    return result[0];
  }

  return null;
};
