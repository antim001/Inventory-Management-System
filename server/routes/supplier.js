import express from 'express'
import {addSupplier,getSuppliers} from '../controllers/supplierController.js'
import authMiddleware from '../middleware/authMiddleware.js'
const router =express.Router();

router.post('/add',authMiddleware,addSupplier);
router.get('/',authMiddleware,getSuppliers)
export default router