import mongoose from "mongoose";


const tokenSchema = new mongoose.Schema({
    task: {type: String, required: true},
    completed: {type: Boolean, required: false}
})


export default mongoose.models.Task || mongoose.model('Task', tokenSchema)