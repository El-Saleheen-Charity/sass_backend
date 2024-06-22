import { executeQuery } from "../startup/db";
import DBResponseUserLogin from "../types/db_responses/DBResponseUserLogin";

export const getUserLogin = async (
  username: string,
  password: string
): Promise<DBResponseUserLogin | null> => {
  const query = `SELECT * FROM login_user('${username}', '${password}');`;
  const result: DBResponseUserLogin[] = await executeQuery(query);

  if (result.length > 0) {
    return result[0];
  }

  return null;
};
