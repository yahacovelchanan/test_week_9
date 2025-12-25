import express from 'express'
import { addUser } from '../ctrls/usersC.js';



const router = express.Router();
router.post("/",addUser)



export default router