import Task from "../../../models/Task";
import DBConnect from "../../../utils/dbConnect";


export default async (req, res) => {
    const {method} = req
    const {id} = req.query
    console.log(id)
    //Connect
    await DBConnect()


    //Update Task
    if (method === "PUT") {
        try {
            const result = await Task.findByIdAndUpdate(id, {$set: req.body}, {new: true})
            res.status(200).json({data: result, message: "Task updated successfully"})
        } catch (error) {
            res.status(500).json({message: "Internal Server Error"})
            console.log(error)
        }
    }


    //Get All tasks

    if (method === "DELETE") {
        try {
            await Task.findByIdAndDelete(id)
            res.status(200).json({message: "Task Deleted successfully"})
        } catch (error) {
            res.status(500).json({message: "Internal Server Error"})
            console.log(error)
        }
    }
}