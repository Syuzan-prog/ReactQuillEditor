const Router = require("express");
const CampaignControler = require("../controllers/CampaignControler");

const router = new Router()

router.post('/', CampaignControler.create)
router.get('/posts', CampaignControler.getAll)
router.get('/post/:id', CampaignControler.getOne)
router.put('/update/:id', CampaignControler.update)
router.delete('/post/:id', CampaignControler.delete)

module.exports = router