import express from "express";
import userController from "../controllers/userController";
import authMiddleware from "../middleware/authMiddleware";
const router = express.Router();

router.post('/');
router.post('/get/:id');
router.get('/delete');
router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check);


export default router;