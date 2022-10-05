import express from "express";
import cardController from "../controllers/cardController";
const router = express.Router();

router.post('/', cardController.getAllCard);
router.post('/add', cardController.addCard);
router.post('/update', cardController.updateCard);
router.post('/get/:id', cardController.addCard);
router.get('/delete', cardController.addCard);


export default router;