import express from 'express'
import { buyTickets } from '../ctrls/receipstC.js';
import { validByUser } from '../middlewares/middlewares.js';

const router = express.Router();

router.post("/",validByUser,buyTickets)

export default router