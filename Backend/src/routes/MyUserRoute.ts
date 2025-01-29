import express from 'express';
import MyUserController from '../controller/MyUserController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyUserRequest } from '../middleware/validation';

const router = express.Router();

router.post("/",jwtCheck,MyUserController.createCurrentUser);

router.put("/",jwtCheck,jwtParse,MyUserController.updateCurrentUser);

export default router;