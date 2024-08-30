const uuid = require("uuid");
const path = require("path");
const { Product, ProductInfo } = require("../models/models");
const ApiError = require("../error/apiError");
const fs = require("fs");

class ProductController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, sizeId, colorId, info } = req.body;

      const images = req.files;
      const data = [];

      function fileName() {
        return uuid.v4() + ".jpg";
      }

      for (const key in images) {
        const img = images[key];
        const name = fileName();
        img.mv(path.resolve(__dirname, "..", "static", name));
        data.push(name);
      }
      let dataString = JSON.stringify(data);

      const product = await Product.create({
        name,
        price,
        brandId,
        typeId,
        sizeId,
        colorId,
        img: dataString,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          ProductInfo.create({
            tittle: i.tittle,
            discription: i.discription,
            productId: product.id,
          });
        });
      }
      return res.json(product);
    } catch (err) {
      next(ApiError.badRequest(err.massage));
    }
  }

  async getAll(req, res, next) {
    try {
      let { brandId, typeId, colorId, sizeId, page, limit } = req.query;
      page = page || 1;
      limit = limit || 9;
      let offset = page * limit - limit;
      let products;

      //1
      if (brandId && typeId && colorId && sizeId) {
        products = await Product.findAndCountAll({
          where: { brandId, typeId, colorId, sizeId },
          limit,
          offset,
        });
      }
      //2
      if (brandId && !typeId && !colorId && !sizeId) {
        products = await Product.findAndCountAll({
          where: { brandId },
          limit,
          offset,
        });
      }
      //3
      if (!brandId && typeId && !colorId && !sizeId) {
        products = await Product.findAndCountAll({
          where: { typeId },
          limit,
          offset,
        });
      }
      //4
      if (!brandId && !typeId && colorId && !sizeId) {
        products = await Product.findAndCountAll({
          where: { colorId },
          limit,
          offset,
        });
      }
      //5
      if (!brandId && !typeId && !colorId && sizeId) {
        products = await Product.findAndCountAll({
          where: { sizeId },
          limit,
          offset,
        });
      }
      //6
      if (brandId && typeId && !colorId && !sizeId) {
        products = await Product.findAndCountAll({
          where: { brandId, typeId },
          limit,
          offset,
        });
      }
      //7
      if (brandId && !typeId && colorId && !sizeId) {
        products = await Product.findAndCountAll({
          where: { brandId, colorId },
          limit,
          offset,
        });
      }
      //8
      if (brandId && !typeId && !colorId && sizeId) {
        products = await Product.findAndCountAll({
          where: { brandId, sizeId },
          limit,
          offset,
        });
      }
      //9
      if (!brandId && typeId && colorId && !sizeId) {
        products = await Product.findAndCountAll({
          where: { typeId, colorId },
          limit,
          offset,
        });
      }
      //10
      if (!brandId && typeId && !colorId && sizeId) {
        products = await Product.findAndCountAll({
          where: { typeId, sizeId },
          limit,
          offset,
        });
      }
      //11
      if (!brandId && !typeId && colorId && sizeId) {
        products = await Product.findAndCountAll({
          where: { colorId, sizeId },
          limit,
          offset,
        });
      }
      //12
      if (brandId && typeId && colorId && !sizeId) {
        products = await Product.findAndCountAll({
          where: { brandId, typeId, colorId },
          limit,
          offset,
        });
      }
      //13
      if (brandId && typeId && !colorId && sizeId) {
        products = await Product.findAndCountAll({
          where: { brandId, typeId, sizeId },
          limit,
          offset,
        });
      }
      //14
      if (brandId && !typeId && colorId && sizeId) {
        products = await Product.findAndCountAll({
          where: { brandId, colorId, sizeId },
          limit,
          offset,
        });
      }
      //15
      if (!brandId && typeId && colorId && sizeId) {
        products = await Product.findAndCountAll({
          where: { typeId, colorId, sizeId },
          limit,
          offset,
        });
      }
      //16
      if (!brandId && !typeId && !colorId && !sizeId) {
        products = await Product.findAndCountAll({ limit, offset });
      }
      return res.json(products);
    } catch (err) {
      next(ApiError.badRequest(err.massage));
    }
  }
  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
      include: [{ model: ProductInfo, as: "info" }],
    });
    return res.json(product);
  }

  async delete(req, res, next) {
    try {
      const { productID } = req.body;
      const product = await Product.findOne({ where: { id: productID } });
      let images = JSON.parse(product.img);
      for (let item of images) {
        await deletingImages(item);
      }
      async function deletingImages(item) {
        const filePath = path.join(__dirname, "..", "static", item);
        fs.unlink(filePath, (err) => {
          if (err) {
            return res.status(500).send("Error files is note deleted");
          }
        });
        const PROD = await Product.destroy({ where: { id: productID } });
        const PROD_INFO = await ProductInfo.destroy({
          where: { productId: productID },
        });
        return res.json("Files succesfully deleted");
      }
    } catch (err) {
      next(ApiError.badRequest(err.massage));
    }
  }
}

module.exports = new ProductController();
