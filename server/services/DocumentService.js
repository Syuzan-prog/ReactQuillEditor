const  Document = require("../models/Document");

class DocumentService {
    async create(document) {
        const createdDocument = await Document.create({...document});
        return createdDocument;
    }

    async getAll() {
        const documents = await Document.find();
        return documents;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('not specified ID')
        }
        const document = await Document.findById(id);
        return document;
    }

    async update(document) {
        if (!document.id) {
            throw new Error('not specified ID')
        }

        const updatedDocument = await Document.findByIdAndUpdate(document.id, {
            $set:{
                editor: document.editor
            }
        }, {new: true})
        return updatedDocument;
    }

    async delete(id) {
            if (!id) {        
                throw new Error('not specified ID')
            }
            const document = await Document.findByIdAndDelete(id);
            return document;
    }
}

module.exports = new DocumentService()