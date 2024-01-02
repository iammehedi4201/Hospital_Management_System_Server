import { Router } from 'express';
import ValidateRequest from '../../Middleware/ValidationRequest';
import { PatientValidation } from '../Patient/Patient.validation';
import { UserController } from './User.controller';

const router = Router();

router.post(
  '/create-patient',
  ValidateRequest(PatientValidation.CreatePaitentSchema),
  UserController.CreatePatient,
);

export const UserRoutes = router;
