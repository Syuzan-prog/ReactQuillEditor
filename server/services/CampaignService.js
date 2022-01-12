const  Campaign = require("../models/Campaign");

class CampaignService {
    async create(campaign) {
        const createdCampaign = await Campaign.create({...campaign});
        return createdCampaign;
    }

    async getAll() {
        const campaigns = await Campaign.find();
        return campaigns;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('not specified ID')
        }
        const campaign = await Campaign.findById(id);
        return campaign;
    }

    async update(campaign) {
        if (!campaign.id) {
            throw new Error('not specified ID')
        }

        const updatedCampaign = await Campaign.findByIdAndUpdate(campaign.id, {
            $set:{
                editor: campaign.editor
            }
        }, {new: true})
        return updatedCampaign;
    }

    async delete(id) {
            if (!id) {        
                throw new Error('not specified ID')
            }
            const campaign = await Campaign.findByIdAndDelete(id);
            return campaign;
    }
}

module.exports = new CampaignService()