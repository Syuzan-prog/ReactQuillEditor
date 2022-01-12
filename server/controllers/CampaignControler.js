const Campaign =  require("../models/Campaign");
const CampaignService =  require("../services/CampaignService");

class CampaignControler {
    async create(req, res) {
        try {
            console.log('req', req)
            const campaign = await CampaignService.create(req.body)
            res.json(campaign)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const campaigns = await CampaignService.getAll();
            return res.json(campaigns);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const campaign = await CampaignService.getOne(req.params.id)
            return res.json(campaign)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedCampaign = await CampaignService.update(req.body);
            return res.json(updatedCampaign);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {    
        try {
            const campaign = await CampaignService.delete(req.params.id);
            return res.json(campaign)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new CampaignControler()
