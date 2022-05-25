const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("post", postSchema)

