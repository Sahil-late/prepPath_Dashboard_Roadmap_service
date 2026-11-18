import express from 'express'
import addRoadmaps from '../roadmap/add/controllers/controller.ts'
import { getAll, getMany } from '../roadmap/get/controllers/controller.ts'
import { delMany,delAll } from '../roadmap/del/controllers/controller.ts'

const router = express.Router()

router.get('/', getAll)
router.post('/get', getMany)
router.post('/add', addRoadmaps)
router.post('/delAll', delAll)
router.post('/del', delMany)

export default router

