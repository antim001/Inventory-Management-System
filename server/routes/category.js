import express from 'express'
import {addCategory,getCategory,updateCategory} from '../controllers/categoryController.js'
import authMiddleware from '../middleware/authMiddleware.js'
const router =express.Router();

router.post('/add',authMiddleware,addCategory)
router.get('/',authMiddleware,getCategory)
router.put('/:id',authMiddleware,updateCategory)
export default router