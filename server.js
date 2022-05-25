const express = require("express")
const dotenv = require("dotenv")
const {connectDB} = require("./src/db")
const { graphqlHTTP } = require("express-graphql")

const schema = require("./src/graphql/schema")

dotenv.config()

connectDB()

const app = express()

app.use('/graphql', graphqlHTTP ({
    schema,
    graphiql: true
}))

app.listen(process.env.PORT, (req, res) => {
    console.log(`Twitter Clone App running on PORT ${process.env.PORT}`)
})