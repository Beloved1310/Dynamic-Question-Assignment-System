import express from 'express'
import { userController } from './user.controller'
import { asyncErrorHandling } from '../../middleware/asyncErrorHandling'

const router = express.Router()

router.post('/create',  asyncErrorHandling(userController.createAccount))

export default router