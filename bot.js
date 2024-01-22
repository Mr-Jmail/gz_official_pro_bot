const path = require("path")
require("dotenv").config({path: path.join(__dirname, ".env")})
const { Telegraf, Scenes, session } = require("telegraf")
const bot = new Telegraf(process.env.botToken)

const surveyScene = require("./surveyScene")

const stage = new Scenes.Stage([surveyScene])

bot.use(session())
bot.use(stage.middleware())

bot.start(ctx => ctx.scene.enter("surveyScene"))

bot.on("photo", ctx => ctx.reply(ctx.message.photo[ctx.message.photo.length - 1].file_id))

bot.launch()