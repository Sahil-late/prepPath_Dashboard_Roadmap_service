import Roadmaps from '../../../models/roadmaps'
import connectDB from '../../../lib/connectDB'

export default async (roadmaps: any): Promise<{ msg: string, status: number }> => {
    try {
        await connectDB()
        let maps = await Roadmaps.insertMany(roadmaps)
        if(maps.length !== 0){
            return { msg: 'roadmaps successfully added', status: 201 }
        }
        return { msg: 'roadmaps failed to add', status: 400 }
    } catch (err: any) {
        return { msg:err?.message, status: 500 }
    }
}