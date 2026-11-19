import { Request, Response, NextFunction } from "express"
import { getAllService, getManyService } from '../services/service.js'
const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let { roadmaps, msg, status } = await getAllService()
        return res.status(status).json({ roadmaps, msg })
    } catch (err) {
        next(err)
    }
}

const getMany = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title } = req.body
        let { roadmaps, msg, status } = await getManyService(title)
        return res.status(status).json({ roadmaps, msg })
    } catch (err) {
        next(err)
    }
}

export { getAll, getMany }