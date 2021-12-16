
const {model, Schema, ObjectId} = require('mongoose')

const Campaign = new Schema({
    editor: {type: String, required: true},
    files : [{type: ObjectId, ref:'File'}]
})

module.exports = model('Campaign', Campaign)