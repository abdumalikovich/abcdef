const express = require("express")
const Categories = require("../models/categories")
const router = express.Router()

// Так пишем сейчас
router.get("/", async (req, res) => {
    try {
        let body = await Goods.find()

        res.json({
            title: "category",
            description: "All goods!",
            body
        })
    } catch (error) {
        console.log(error)

        res.json({
            ok: false,
            messege: "Cant get categories :(",
            error
        })
    }
})

router.post("/", (req, res) => {
    try {
        Categories.create(req.body, async (error, data) => {
            if (error) {
                res.json({
                    ok: false,
                    messege: "Cant create category",
                    error
                })
            } else {
                res.json({
                    ok: true,
                    message: 'The category created!',
                    element: data,
                })
            }
        })
    } catch (error) {
        res.json({
            ok: false,
            messege: "Cant create category",
            error
        })
    }
})

router.patch("/", async (req, res) => {
    console.log("patch elem");
})
 
module.exports = router