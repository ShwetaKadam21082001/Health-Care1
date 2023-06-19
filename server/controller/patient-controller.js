import Patient from "../schema/patient-schema.js";


export const addPatient = async (request, response) => {
    const patient = request.body;

    const newPatient = new Patient(patient);
    try {
        await newPatient.save();
        response.status(201).json(newPatient);
    } catch (error) {
        response.status(409).json({ message: error.message});
    }
}

   export const getPatients = async (request, response) => {
    try {
      const patients =  await Patient.find({});
      response.status(200).json(patients);
    } catch (error) {
      response.status(404).json({ message: error.message});
    }
   }