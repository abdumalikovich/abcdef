// Импортируем наш фреймворк
const express = require("express")
// Создаем главную переменную
const app = express()
const bodyParse = require("body-parser")
const cors = require('cors')
const mongoose = require('mongoose')
let PORT = 3000

// Middlewares
app.use(cors())
app.use(bodyParse.json())

app.get("/", (req, res) => {
    res.send("ready")
})

// Routes
app.use("/goods", require("./routes/goods"))
app.use("/users", require("./routes/users"))
app.use("/categories", require("./routes/categories"))

// Подключение к БД
mongoose.connect("mongodb://localhost:27017/market", () => {
    // Callback-функция
    console.log("Успешно подключились к базе данных! :)")
})

// Эта строка будет оповещать о любых действиях по отношению к БД
mongoose.set("debug", true)

// Слушатель по порту
app.listen(PORT, () => {
    console.log(`Сервер слушает порт ${PORT}`)
})