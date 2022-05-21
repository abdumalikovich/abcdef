const express = require("express")
const Users = require("../models/users")
const router = express.Router()

// Так пишем сейчас
router.get("/", async (req, res) => {
    try {
        let body = await Goods.find()

        res.json({
            title: "goods",
            description: "dlya chegoto",
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

router.post("/", (req, res) => {
    try {

        Users.create(req.body, async (error, data) => {
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
                    element: data,
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

router.patch("/", async (req, res) => {
    console.log("patch elem");
})

router.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    console.log(req.body.id);
    Users.findByIdAndDelete(req.params.id, async (error, data) => {
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