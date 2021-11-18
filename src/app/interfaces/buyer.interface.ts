export interface Buyer {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  "session_code"?: string;
}
