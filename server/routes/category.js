import express from 'express'
import {addCategory,getCategory} from '../controllers/categoryController.js'
import authMiddleware from '../middleware/authMiddleware.js'
const router =express.Router();

router.post('/add',authMiddleware,addCategory)
router.get('/',authMiddleware,getCategory)
export default router