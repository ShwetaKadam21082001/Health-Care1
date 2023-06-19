import mongoose from 'mongoose';

import autoIncrement from 'mongoose-auto-increment';

 const patientSchema = mongoose.Schema({
    patientname: String,
    mobileno: String,
    entrydate: String,
    timing: String,
    doctor: String,
    doctorservice: String
})

autoIncrement.initialize(mongoose.connection);

// patientSchema.plugin(autoIncrement.plugin, 'patient');

const patient = mongoose.model('patient', patientSchema);

export default patient; 
