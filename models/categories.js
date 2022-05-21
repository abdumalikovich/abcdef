const mongoose = require('mongoose')

var Categories = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "AYE JIZN VARAM, VECHNOOO"
    },
    // Все товары внутри категории
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Goods"
    }
})


module.exports = mongoose.model('Categories', Categories)
