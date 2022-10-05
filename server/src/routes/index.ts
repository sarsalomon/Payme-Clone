import express from "express";
const router = express.Router();

import cardRouter from './cardRoute';
import transferRouter from './transferRoute';
import userRouter from './userRoute';

router.use('/card', cardRouter);
router.use('/transfer', transferRouter);
router.use('/user', userRouter);

export default router;