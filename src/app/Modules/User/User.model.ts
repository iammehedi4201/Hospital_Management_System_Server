import { Schema, model } from 'mongoose';
import { IUser } from './User.interface';
import { UserRole, UserStatus } from './User.constant';

const UserSchema = new Schema<IUser>(
  {
    userId: {
      type: Number,
      required: [true, 'User Id is required'],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      trim: true,
    },
    role: {
      type: String,
      enum: {
        values: UserRole,
        message: "Role must be either 'admin', 'doctor' or 'patient'",
      },
      required: [true, 'Role is required'],
      trim: true,
    },
    needPasswordChange: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: {
        values: UserStatus,
        message: "Status must be either 'active' or 'blocked'",
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

//define the model
export const User = model<IUser>('User', UserSchema);
