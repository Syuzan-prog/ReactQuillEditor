const Document =  require("../models/Document");
const DocumentService =  require("../services/DocumentService");

class DocumentControler {
    async create(req, res) {
        try {
            const doocument = await DocumentService.create(req.body)
            res.json(doocument)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const doocuments = await DocumentService.getAll();
            return res.json(doocuments);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const doocument = await DocumentService.getOne(req.params.id)
            return res.json(doocument)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedDoocument = await DocumentService.update(req.body);
            return res.json(updatedDoocument);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {    
        try {
            const doocument = await DocumentService.delete(req.params.id);
            return res.json(doocument)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new DocumentControler()
