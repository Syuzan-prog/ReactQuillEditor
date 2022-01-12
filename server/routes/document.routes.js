const Router = require("express");
const DocumentControler = require("../controllers/DocumentControler");

const router = new Router()

router.post('/', DocumentControler.create)
router.get('/posts', DocumentControler.getAll)
router.get('/post/:id', DocumentControler.getOne)
router.put('/update/:id', DocumentControler.update)
router.delete('/delite/:id', DocumentControler.delete)

module.exports = router