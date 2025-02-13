import { Request, Response } from 'express';
import { DoctorService } from '../services/doctorService';

class DoctorController {
    private doctorService: DoctorService;

    constructor() {
        this.doctorService = new DoctorService();
    }

    public async getPatients(req: Request, res: Response): Promise<void> {
        try {
            const doctorId = req.params.id;
            const patients = await this.doctorService.getPatients(doctorId);
            res.status(200).json(patients);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving patients', error });
        }
    }

    public async assignPatient(req: Request, res: Response): Promise<void> {
        try {
            const { doctorId, patientId } = req.body;
            const result = await this.doctorService.assignPatient(doctorId, patientId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error assigning patient', error });
        }
    }
}

export default DoctorController;