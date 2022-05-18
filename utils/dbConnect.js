import mongoose from "mongoose";

const DB_URL = process.env.DB_URL

if (!DB_URL) {
    throw new Error("Please define DB_URL inside .env")
}


let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = {conn: null, promise: null}
}

const DBConnect = async () => {
    if (cached.conn) {
        return cached.conn
    }
    if (!cached.promise) {
        const options = {useNewUrlParser: true, useUnifiedTopology: true};
        cached.promise = mongoose.connect(DB_URL, options).then((mongoose) => {
            console.log(mongoose)
            return mongoose;
        })
    }
    cached.conn = await cached.promise;
    return cached.conn
}

export default DBConnect