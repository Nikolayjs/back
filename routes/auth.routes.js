import express from "express";

import {checkAuth, handleValidation, registerValidation, loginValidation} from "../middleware/index.js";
import {UserController} from '../controllers/index.js';

const router = express.Router({mergeParams: true});

router.post('/auth/login', loginValidation, handleValidation, UserController.login);
router.post('/auth/register', registerValidation, handleValidation, UserController.register);
router.get('/auth/me', checkAuth, UserController.getMe);
router.get('/auth/admin', checkAuth, UserController.getAdmin)
router.patch('/user/:id', UserController.update);

export default router;