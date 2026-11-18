import mongoose from 'mongoose'
import env from 'dotenv'
env.config()
export default async()=>{
    try{
       if(!process.env.MONGODB_URI) return 'please provide mongodb uri'
       const conn = await mongoose.connect(`${process.env.MONGODB_URI!}`)
       return conn
    }catch(err){
        console.error(err)
    }
}