const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo} = require('../models/models')
const ApiError = require('../error/apiError')
const fs = require('fs')


class ProductController {

        async create (req, res, next){
            try {
        const data = []

        let {name, price, brandId, typeId, sizeId, colorId, info} = req.body

        const images = req.files

        function fileName() {
            return uuid.v4()+'.jpg'}

        for (const key in images) {
            const img = images[key]
            const name = fileName()
            img.mv(path.resolve(__dirname, '..',"static", name))
            data.push(name)
        }
        const dataString = JSON.stringify(data) 
        const product = await Product.create({name, price,brandId, typeId, sizeId, colorId, img:dataString})

        if (info){
            info=JSON.parse(info)
            info.forEach (i => {
                ProductInfo.create({
                    title: i.title,
                    discription: i.discription,
                    productId: product.id
                })
            })
        }
           return res.json(product)
    } catch (err) {
                next(ApiError.badRequest(err.massage))
            }
    }
        async getAll (req, res, next){ 
            try{
            let {brandId, typeId, colorId, sizeId, limit, page} = req.query
            page=page||1
            limit = limit||20
            let offset = page*limit-limit
            let products
            //1
            if (brandId && typeId && colorId && sizeId){
                products = await Product.findAndCountAll({where:{brandId, typeId, colorId, sizeId}, limit, offset})
            }
            //2
            if (brandId && !typeId && !colorId && !sizeId){
                products = await Product.findAndCountAll({where:{brandId},limit, offset})
            }
            //3
            if (!brandId && typeId && !colorId && !sizeId){
                products = await Product.findAndCountAll({where:{typeId},limit, offset})
            }
            //4
            if (!brandId && !typeId && colorId && !sizeId){
                products = await Product.findAndCountAll({where:{colorId},limit, offset})
            }
            //5
            if (!brandId && !typeId && !colorId && sizeId){
                products = await Product.findAndCountAll({where:{sizeId},limit, offset})
            }
            //6
            if (brandId && typeId && !colorId && !sizeId){
                products = await Product.findAndCountAll({where:{brandId, typeId},limit, offset})
            }
            //7
            if (brandId && !typeId && colorId && !sizeId){
                products = await Product.findAndCountAll({where:{brandId, colorId},limit, offset})
            }
            //8
            if (brandId && !typeId && !colorId && sizeId){
                products = await Product.findAndCountAll({where:{brandId, sizeId},limit, offset})
            }
            //9
            if (!brandId && typeId && colorId && !sizeId){
                products = await Product.findAndCountAll({where:{typeId, colorId},limit, offset})
            }
            //10
            if (!brandId && typeId && !colorId && sizeId){
                products = await Product.findAndCountAll({where:{typeId, sizeId},limit, offset})
            }
            //11
            if (!brandId && !typeId && colorId && sizeId){
                products = await Product.findAndCountAll({where:{colorId, sizeId},limit, offset})
            }
            //12
            if (brandId && typeId && colorId && !sizeId){
                products = await Product.findAndCountAll({where:{brandId, typeId, colorId},limit, offset})
            }
            //13
            if (brandId && typeId && !colorId && sizeId){
                products = await Product.findAndCountAll({where:{brandId, typeId, sizeId},limit, offset})
            }
            //14
            if (brandId && !typeId && colorId && sizeId){
                products = await Product.findAndCountAll({where:{brandId, colorId, sizeId},limit, offset})
            }
            //15
            if (!brandId && typeId && colorId && sizeId){
                products = await Product.findAndCountAll({where:{typeId, colorId, sizeId},limit, offset})
            }
            //16
            if (!brandId && !typeId && !colorId && !sizeId){
                products = await Product.findAndCountAll({limit, offset})
            }

           return res.json(products)

        }catch(err) {
            next(ApiError.badRequest(err.massage))
        }
    }
        async getOne (req, res){ 
            const {id} = req.params
            const product = await Product.findOne(
                {where:{id}, 
                include:[{model:ProductInfo, as: 'info'}]
                }
            )
            return res.json(product)
        }
        
         async delete (req, res, next){ try {
            //необходимо удаление статик файлов и продукта
            const {id} = req.params
            const product = await Product.findOne(
                {where:{id}, 
                include:[{model:ProductInfo, as: 'info'}]
                }
            )
            // let img = JSON.parse(product['img'])
            let filePath = '../static'
            let fileName = 'd1e35f5b-2170-4094-a3f8-6c9ebb3070d9.jpg'
            fs.unlinkSync(filePath+fileName)
            return res.json(product)
         } catch(err) {
            next(ApiError.badRequest(err.massage))
         }
    }
}

module.exports = new ProductController ()