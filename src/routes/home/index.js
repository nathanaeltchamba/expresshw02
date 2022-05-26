const MainHomeRouter = require("express").Router()

MainHomeRouter.route("/")
.get(require("./main.view"))

module.exports = MainHomeRouter