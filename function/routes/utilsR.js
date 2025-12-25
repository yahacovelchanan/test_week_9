import express from 'express'
import { getPurchaseSummary } from '../ctrls/utilsC.js';
import { validByUser } from '../middlewares/middlewares.js';


const router = express.Router();

router.get("/:username/summary",validByUser,getPurchaseSummary)


export default router;