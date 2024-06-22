// ApiResponse.ts
interface GlobalResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}

export default GlobalResponse;
