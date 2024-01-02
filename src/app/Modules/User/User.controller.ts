import CatchAsync from '../../Utils/CatchAsync';
import sendResponse from '../../Utils/SendResponse';
import { PatientService } from './User.service';

const CreatePatient = CatchAsync(async (req, res) => {
  const result = await PatientService.CreatePatientToDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Patient created successfully',
    data: result,
  });
});

export const UserController = {
  CreatePatient,
};
