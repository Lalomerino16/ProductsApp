type Gender = 'male' | 'female';

export interface AuthResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender:Gender
  image: string;
  token: string;
  accessToken: string;
  refreshToken: string;
}


