import express from 'express'
import addRoadmaps from '../roadmap/add/controllers/controller.js'
import { getAll, getMany } from '../roadmap/get/controllers/controller.js'
import { delMany,delAll } from '../roadmap/del/controllers/controller.js'

const router = express.Router()

router.get('/', getAll)
router.post('/get', getMany)
router.post('/add', addRoadmaps)
router.post('/delAll', delAll)
router.post('/del', delMany)

export default router

