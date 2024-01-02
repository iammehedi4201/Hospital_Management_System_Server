import z from 'zod';
import { bloodGroup, gender } from './Patient.constant';

const PaitentNameSchema = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
});

const PaitentAddressSchema = z.object({
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zipCode: z.number(),
});

const CreatePaitentSchema = z.object({
  body: z.object({
    email: z.string().email(),
    name: PaitentNameSchema,
    gender: z.enum([...gender] as [string, ...string[]]),
    dateOfBirth: z.string(),
    bloodGroup: z.enum([...bloodGroup] as [string, ...string[]]),
    age: z.number(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    address: PaitentAddressSchema,
    profileImage: z.string(),
  }),
});

export const PatientValidation = {
  CreatePaitentSchema,
};
