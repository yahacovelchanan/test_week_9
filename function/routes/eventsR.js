import express from 'express'
import { addEvent } from '../ctrls/eventsC.js';
import { validByUser } from '../middlewares/middlewares.js';


const router = express.Router();


router.post("/",validByUser,addEvent)








export default router;