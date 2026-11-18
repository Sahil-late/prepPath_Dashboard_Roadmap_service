import mongoose from 'mongoose'
const roadmapsSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    description: { type: String, required: true, },
    topics: [{ type: String },],
    icon: { type: String, required: true, },
    color: { type: String, required: true, },
})

export default mongoose.models.roadmaps || mongoose.model('roadmaps',roadmapsSchema)
