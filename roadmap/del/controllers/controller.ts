import { Request, Response, NextFunction } from "express"
import {delAllServce,delManyServce} from '../services/service'
const delAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let {msg,status} = await delAllServce()
        return res.status(status).json({msg})
    } catch (err) {
        next(err)
    }
}

const delMany = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {title} =  req.body
        let {msg,status} = await delManyServce(title)
        return res.status(status).json({msg})
    } catch (err) {
        next(err)
    }
}

export {delAll,delMany}