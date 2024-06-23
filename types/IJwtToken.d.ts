export type IUserRole = "root" | "admin" | "charityAdmin" | "charrityUser";

export interface IJwtToken {
  id: number;
  name: string;
  username: string;
  roles: IUserRole;
  organization_id: number;
  iat: number;
  exp: number;
}
