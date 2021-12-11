export interface Buyer {
  _id: string;
  name: string;
  email: string;
  active: boolean;
  password: string;
  token: string;
  img: string;
}

export interface AuthResponse {
  "session_code"?: string;
}

export interface LoginResponse {
  "token"?:string;

}
