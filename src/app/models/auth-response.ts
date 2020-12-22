export interface AuthResponse {
  User_sFirstname: string,
  User_sLastname: string,
  User_sToken: string;
  User_iScadenza: number;
  error?: number;
  msg?: string;
}
