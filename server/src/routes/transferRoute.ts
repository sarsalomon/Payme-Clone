import express from "express";
import transferController from "../controllers/transferController";
const router = express.Router();

router.post('/', transferController.getAllTransfer);
router.post('/add', transferController.createTransfer);
router.post('/update', transferController.updateTransfer);
router.post('/get/:id', transferController.getByIdTransfer);
router.get('/delete', transferController.deleteTransfer);
router.get('/checkTrnasfer/:id', transferController.checkTransfer);
router.get('/cancelTrnasfer/:id', transferController.cancelTrnasfer);


export default router;