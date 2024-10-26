import express from 'express'
import { questionController } from './question.controller'
import { asyncErrorHandling } from '../../middleware/asyncErrorHandling'

const router = express.Router()

router.post('/create',  asyncErrorHandling(questionController.createQuestionForRegion))

export default router