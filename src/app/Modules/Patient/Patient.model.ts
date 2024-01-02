import { Schema, model } from 'mongoose';
import { IPatient, IPatientAddress, IPatientName } from './Patient.interface';
import { bloodGroup, gender } from './Patient.constant';

const PatientNameSchema = new Schema<IPatientName>(
  {
    firstName: {
      type: String,
      required: [true, 'First Name is required'],
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last Name is required'],
      trim: true,
    },
  },
  {
    _id: false,
    versionKey: false,
  },
);

const PatientAddressSchema = new Schema<IPatientAddress>(
  {
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
    state: {
      type: String,
      required: [true, 'State is required'],
      trim: true,
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
      trim: true,
    },
    zipCode: {
      type: Number,
      required: [true, 'Zip Code is required'],
      trim: true,
    },
  },
  {
    _id: false,
    versionKey: false,
  },
);

const PatientSchema = new Schema<IPatient>(
  {
    userId: {
      type: Number,
      required: [true, 'User Id is required'],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
    },
    User: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
    },
    name: {
      type: PatientNameSchema,
      required: [true, 'Name is required'],
    },
    gender: {
      type: String,
      enum: {
        values: gender,
        message: 'Gender must be Male,Female or Other',
      },
      required: [true, 'gender is required'],
      trim: true,
    },
    dateOfBirth: {
      type: String,
      required: [true, 'Date of birth is required'],
      trim: true,
    },
    bloodGroup: {
      type: String,
      enum: {
        values: bloodGroup,
        message: 'Blood Group must be A+,A-,B+,B-,AB+,AB-,O+,O-',
      },
      required: [true, 'Blood Group is required'],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, 'Age is required'],
      trim: true,
    },
    contactNo: {
      type: Number,
      required: [true, 'Contact No is required'],
      trim: true,
    },
    emergencyContactNo: {
      type: Number,
      required: [true, 'Emergency Contact No is required'],
      trim: true,
    },
    address: {
      type: PatientAddressSchema,
      required: [true, 'Address is required'],
      trim: true,
    },
    profileImage: {
      type: String,
      required: [true, 'Profile Image is required'],
      trim: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

//define the model
export const Patient = model<IPatient>('Patient', PatientSchema);
