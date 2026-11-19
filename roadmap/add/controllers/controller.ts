import { Request, Response, NextFunction } from "express"
import Service from '../services/service.js'
const controller = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const roadmap =  req.body
        let {msg,status} = await Service(roadmap)
        return res.status(status).json({msg})
    } catch (err) {
        next(err)
    }
}

export default controller