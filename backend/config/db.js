import mongoose from 'mongoose'

const conectarDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_DATABASE)
        console.log('database is connection to: ' + db.connection.name)
    } catch (error) {
        console.log(`error: ${error.message}`)
        process.exit(1)
    }
}

export default conectarDB
