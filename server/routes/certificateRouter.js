const Router = require('express')
const router = new Router 
const CertificateController = require('../controllers/certificateController')

router.post('/', CertificateController.postCertificate)
router.get('/', CertificateController.getAllCertificate)
router.get('/', CertificateController.checkCertificate)
router.delete('/', CertificateController.deleteCertificate)

module.exports = router