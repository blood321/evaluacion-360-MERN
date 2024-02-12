import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URi);
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB conection in : ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
};

export default conectarDB;