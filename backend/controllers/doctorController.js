import doctorModel from "../models/doctorModel.js";


// Fetch all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(['-password', '-email'])
    res.json({ success: true, doctors });
  } catch (e) {
    console.log(e);
    res.josn({ success: false, message: e.message });
  }
};

const changeAvialability = async (req, res) => {
  try {
    const { docId } = req.body;

    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      avialable: !docData.avialable,
    });
    res.json({ success: true, message: "Availablility changes" });
  } catch (e) {
    console.log(e);
    res.josn({ success: false, message: e.message });
  }
};

// Fetch a single doctor by ID
// exports.getDoctorById = async (req, res) => {
//   try {
//     const doctor = await doctorModel.findById(req.params.id);
//     if (!doctor) {
//       return res.status(404).json({ message: 'Doctor not found' });
//     }
//     res.status(200).json(doctor);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching doctor', error });
//   }
// };


// Update an existing doctor
// const updateDoctor = async (req, res) => {
//   try {
//     const { name, email, phone, specialization, availability } = req.body;
//     const doctor = await doctorModel.findByIdAndUpdate(
//       req.params.id,
//       { name, email, phone, specialization, availability },
//       { new: true }
//     );
//     if (!doctor) {
//       return res.status(404).json({ message: 'Doctor not found' });
//     }
//     res.status(200).json({ message: 'Doctor updated successfully', doctor });
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating doctor', error });
//   }
// };

// Delete a doctor
// exports.deleteDoctor = async (req, res) => {
//   try {
//     const doctor = await doctorModel.findByIdAndDelete(req.params.id);
//     if (!doctor) {
//       return res.status(404).json({ message: 'Doctor not found' });
//     }
//     res.status(200).json({ message: 'Doctor deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting doctor', error });
//   }
// };

// Fetch all appointments for a specific doctor
// exports.getDoctorAppointments = async (req, res) => {
//   try {
//     const appointments = await appointmentModel.find({ doctorId: req.params.id });
//     res.status(200).json(appointments);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching appointments', error });
//   }
// };

export { changeAvialability, getAllDoctors }
