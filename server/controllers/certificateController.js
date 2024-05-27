const { Certificate } = require("../models/models")
const ApiError = require('../error/apiError')
const uuid = require('uuid') //изменить уникальность

class CerctificateController {

  async postCertificate (req, res, next){
    try {
        let uniqId = uuid.v4() //so hard)))
        let {price, phoneNumber, email} = req.body
        const certificate = await Certificate.create({uniqId, price,phoneNumber, email})
        return res.json(certificate)
    } catch (err) {
        next(ApiError.badRequest(err.massage))
        }
    }
  async getAllCertificate (req, res, next){
          try {
            const certificates = await Certificate.findAll()
            return res.json(certificates)
          }catch(err){
            next(ApiError.badRequest(err.massage))
          }
    }
    
    async checkCertificate (req, res){//необходимо продумать функционал. Поидее при отправке корзины должна происходить верификация сертификата
         const {id} = req.params
            const certificate = await Certificate.findOne(
                {where:{id}}
            )
            return res.json(certificate)
    }

      async deleteCertificate (req, res, next){
        try {
            const {id} = req.body
            const certificate = await Certificate.destroy({where :
                {id},
            })
            return res.json(certificate)
          }catch (err){
             next(ApiError.badRequest(err.massage))
          }
    }
}

module.exports = new CerctificateController ()