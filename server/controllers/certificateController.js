const { Certificate } = require("../models/models")
const ApiError = require('../error/apiError')
const uuid = require('uuid') //изменить уникальность


class CerctificateController {

  async postCertificate (req, res, next){
    try {
        let uniqId = uuid.v4() //so hard)))
        let {recipient, emailFrom, amount, note, emailTo, phone} = req.body
        const certificate = await Certificate.create({uniqId, recipient, emailFrom, amount, note, emailTo, phone})
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
    
    async checkCertificate (req, res){
      try{
        const {id, uniqId} = req.params
        const certificate = await Certificate.findOne(
               {where:{id}})

               if (uniqId === certificate.uniqId)
                { return res.json(certificate)}
               else {
                return res.json('This certificate is not exist')
               }
      } catch (err) {
        next(ApiError.badRequest(err.massage))
        }
  
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