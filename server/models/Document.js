
const {model, Schema, ObjectId} = require('mongoose')

const Document = new Schema({
    editor: {type: String},
    files : [{type: ObjectId, ref:'File'}]
})

module.exports = model('Document', Document)