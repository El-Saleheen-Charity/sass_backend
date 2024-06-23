// ApiResponse.ts
interface IApiRes_Global<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export default IApiRes_Global;
