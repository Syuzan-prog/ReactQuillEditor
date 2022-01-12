
const {model, Schema, ObjectId} = require('mongoose')

const Campaign = new Schema({
    editor: {type: String},
    files : [{type: ObjectId, ref:'File'}]
})

module.exports = model('Campaign', Campaign)