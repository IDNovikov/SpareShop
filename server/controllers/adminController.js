const ApiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const {Admin, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}

    )
}
class AdminController {
    async registration (req, res){
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest("Wrong password or email"))
        }
        const candidate = await Admin.findOne ({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest("User whith this email is allready created"))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const admin = await Admin.create({email, role, password: hashPassword})
        const token = generateJwt(user.id, user.email, user.role)
        return res.jsin({token})

    } 
        async login(req, res){
            res.json("something posted")
        
    }
        async check (req, res, next){
            const {id} = req.query
            if(!id) {
               return next(ApiError.badRequest('Id not find'))
            }
          res.json(id)
    }
}

module.exports = new AdminController();

//npm i jsonwebtoken bcryptn 