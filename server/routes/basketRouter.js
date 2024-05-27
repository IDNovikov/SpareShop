const Router = require('express')
const router = new Router 
const basketController = require('../controllers/basketController')
router.post('/', basketController.postBasket)
router.get('/', basketController.getAllBaskets)
router.delete('/:id', basketController.deleteBasket)
//http://localhost:5000/api/basket/4


module.exports = router