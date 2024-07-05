const uuid = require('uuid')
const path = require('path')
const {Post} = require('../models/models')
const ApiError = require('../error/apiError')
const fs = require('fs')


class PostController {

        async create (req, res, next){
            try {

        let {tittle, discription} = req.body

        const images = req.files
        const data = []
        
        function fileName() {
            return uuid.v4()+'.jpg'}

        for (const key in images) {
            const img = images[key]
            const name = fileName()
            img.mv(path.resolve(__dirname, '..',"static", name))
            data.push(name)
        }
            let dataString = JSON.stringify(data)

        const post = await Post.create({tittle, discription, img:dataString})

           return res.json(post)
    } catch (err) {
                next(ApiError.badRequest(err.massage))
            }
    }


    async getAll (req, res, next){
        try {
        let {page, limit} = req.query
        page=page||1
        limit = limit||9
        let offset = page*limit-limit
        const posts = await Post.findAndCountAll({limit, offset})
        return res.json(posts)
         }catch (err){
         next(ApiError.badRequest(err.massage))
      }
    }

        async getOne (req, res){ 
            const {id} = req.params
            const post = await Post.findOne(
                {where:{id}}
            )
            return res.json(post)
        }
        
         async delete (req, res, next){ try {
            //необходимо удаление статик файлов и продукта
            const {id} = req.params
            const post = await Post.findOne(
                {where:{id}}
            )

            // let img = JSON.parse(product['img'])
            let filePath = '../static'
            let fileName = 'd1e35f5b-2170-4094-a3f8-6c9ebb3070d9.jpg'
            fs.unlinkSync(filePath+fileName)
            return res.json(post)
         } catch(err) {
            next(ApiError.badRequest(err.massage))
         }
    }
}

module.exports = new PostController ()