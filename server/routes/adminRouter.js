const Router = require('express')
const router = new Router
const adminController = require('../controllers/adminController')

router.post('/login', adminController.login)
router.post('/registration',adminController.registration)// для разработки ЛК
router.get('/auth', adminController.check)
 
module.exports = router