const { MongoClient } = require("mongodb")
const Db = process.env.MONGODB_URI
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var _db

module.exports = {
    connectToMongoDB: async function (callback) {
        try {
            await client.connect()
            _db = client.db("employees")
            console.log("Successfully connected to MongoDB.")
            
            return callback(null)
        } catch (error) {
            console.error("Failed to connect to MongoDB:", error)
            return callback(error)
        }
    },

    getDb: function () {
        return _db
    }
}