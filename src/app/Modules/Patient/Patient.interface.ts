import { Types } from 'mongoose';

export interface IPatientName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export type IPatientGender = 'Male' | 'Female' | 'Other';

export type IPatientBloodGroup =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';

export interface IPatientAddress {
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: number;
}

export interface IPatient {
  userId: number;
  email: string;
  User: Types.ObjectId;
  name: IPatientName;
  gender: IPatientGender;
  dateOfBirth: string;
  bloodGroup: IPatientBloodGroup;
  age: number;
  contactNo: number;
  emergencyContactNo: number;
  address: IPatientAddress;
  profileImage: string;
  isDeleted: boolean;
}
