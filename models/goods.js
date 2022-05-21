const mongoose = require('mongoose')

// Называние схем всегда во множественном числе
// Ключи вашей схемы крайне опасно менять/удалять
const Goods = mongoose.Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model('Goods', Goods)

 