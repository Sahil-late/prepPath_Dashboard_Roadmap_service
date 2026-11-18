import Roadmaps from '../../../models/roadmaps'
import connectDB from '../../../lib/connectDB'
import { redisClient } from '../../../config/redis'

const getManyService = async (title: any): Promise<{ msg: string, roadmaps?: any, status: number }> => {
    try {
        await connectDB()

        const roadmaps = await Roadmaps.find({ title: { $in: title } })
        if (roadmaps.length === 0) {
            return { msg: 'failed to extract roadmaps', roadmaps, status: 404 }
        }
        return { msg: 'successfully extracted all roadmaps', roadmaps, status: 200 }
    } catch (err: any) {
        return { msg: err?.message, status: 500 }
    }
}

const getAllService = async (): Promise<{ msg: string, roadmaps?: any, status: number }> => {
    try {
        await connectDB()
        const cacheKey = 'allRoadmaps'

        // check in redis
        const cacheRoadmaps = await redisClient.get(cacheKey)
        if (cacheRoadmaps) {
            console.log('cache hit');
            return { msg: 'successfully extracted all roadmaps', roadmaps: JSON.parse(cacheRoadmaps), status: 200 }
        }

        console.log('cache missed');

        const roadmaps = await Roadmaps.find({})
        if (roadmaps.length === 0) {
            return { msg: 'failed to extract roadmaps', roadmaps, status: 404 }
        } 

        // add roadmaps to catche for next frequent request
        await redisClient.set(cacheKey, JSON.stringify(roadmaps), { EX: 60 * 30 })
        return { msg: 'successfully extracted all roadmaps', roadmaps, status: 200 }
    } catch (err: any) {
        return { msg: err?.message, status: 500 }
    }
}

export { getAllService, getManyService }