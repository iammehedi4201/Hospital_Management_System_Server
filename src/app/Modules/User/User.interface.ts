export type TUserRole = 'admin' | 'doctor' | 'patient';

export type TUserStatus = 'active' | 'blocked';

export interface IUser {
  userId: number;
  email: string;
  password: string;
  role: TUserRole;
  needPasswordChange: boolean;
  status: TUserStatus;
  isDeleted: boolean;
}
