const Router = require('express')
const router = new Router 
const deviceController = require("../controllers/productController")


router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne) //example: GET:http://localhost:5000/api/product/5
router.delete('/:id', deviceController.delete)


module.exports = router

