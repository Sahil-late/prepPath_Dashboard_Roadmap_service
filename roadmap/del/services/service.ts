import Roadmaps from '../../../models/roadmaps.js'
import connectDB from '../../../lib/connectDB.js'

const delManyServce = async (titles: any): Promise<{ msg: string, status: number }> => {
    try {
        await connectDB()
        console.log(titles);
        
        let d = await Roadmaps.deleteMany({title:{$in:titles}})
        console.log(d);
        
        if(d.deletedCount){
            return { msg: 'roadmaps successfully deleted', status: 201 }
        }
        return { msg: 'roadmaps failed to delete', status: 400 }
    } catch (err: unknown) {
        console.error(err)
        return { msg: 'something went wrong', status: 500 }
    }
}


const delAllServce = async (): Promise<{ msg: string, status: number }> => {
    try {
        await connectDB()
        let d = await Roadmaps.deleteMany({})
        if(d.deletedCount){
            return { msg: 'roadmaps successfully deleted', status: 201 }
        }
        return { msg: 'roadmaps failed to delete', status: 400 }
    } catch (err: any) {
        return { msg:err?.message, status: 500 }
    }
}

export {delAllServce,delManyServce}