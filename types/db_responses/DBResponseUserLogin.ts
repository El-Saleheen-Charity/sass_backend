interface DBResponseUserLogin {
  id: number;
  name: string;
  username: string;
  roles: string[];
  is_active: boolean;
  organization_id: number;
}

export default DBResponseUserLogin;
