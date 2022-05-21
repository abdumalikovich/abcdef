const express = require("express")
const Goods= require("../models/goods")
const router = express.Router()

// Так пишем сейчас
router.get("/", async (req, res) => {
    try {
        let body = await Goods.find().populate("authorId", "categoryId")
        res.json({
            title: "goods",
            description: "Here is all goods",
            isDone: true,
            body
        })
    } catch (error) {
        console.log(error)

        res.json({
            ok: false,
            messege: "Seems there no goods!",
            error
        })
    }
})

router.patch("/:id", async (req, res) => {
    try {
        // Здесь мы находим и меняем элемент
        Goods.findOneAndUpdate(req.params.id, req.body, (error, data) => {
            // data - это весь элемент (обновленный)
            if (error) {
                res.json({
                    ok: false,
                    messege: "Seems there no goods!",
                    error
                })
            } else {
                res.json({
                    ok: true,
                    message: 'updated!',
                    element: data
                })
            }
        })
    } catch (error) {
        res.json({
            ok: false,
            messege: "Seems there no goods!",
            error
        })
    }
})

router.post("/", (req, res) => {
    try {

        Goods.create(req.body, async (error, data) => {
            if (error) {
                res.json({
                    ok: false,
                    messege: "Seems there no goods!",
                    error
                })
            } else {
                res.json({
                    ok: true,
                    message: 'created!',
                    element: req.body,
                })
            }
        })
    } catch (error) {
        res.json({
            ok: false,
            messege: "Seems there no goods!",
            error
        })
    }
})

router.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    console.log(req.body.id);
    Goods.findByIdAndDelete(req.params.id, async (error, data) => {
        if (error) {
            res.json({
                ok: false,
                messege: "Deleted shit!",
                el: data,
                error
            })
        } else {
            res.json({
                ok: true,
                message: 'Deleted',
                element: data,
            })
        }
    })
})
module.exports = router