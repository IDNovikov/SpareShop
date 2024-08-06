import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode"
//+deletes
//types
export const createType = async (type) => {
    const {data} = await $authHost.post("api/type", type )
    return data
}

export const fetchTypes = async ()  => {
    const {data} = await $host.get("api/type")
    return data
}

export const deleteType = async (type) => {
    const {data} = await $authHost.delete("api/type", type )
    return data
}
//brands
export const createBrand = async (brand) => {
    const {data} = await $authHost.post("api/brand", brand )
    return data 
}

export const fetchBrands = async ()  => {
    const {data} = await $host.get("api/brand")
    return data
}
//colors
export const createColor = async (color) => {
    const {data} = await $authHost.post("api/color", color )
    return data
}

export const fetchColors = async ()  => {
    const {data} = await $host.get("api/color")
    return data
}
//sizes

export const createSize = async (size) => {
    const {data} = await $authHost.post("api/size", size )
    return data
}

export const fetchSizes = async ()  => {
    const {data} = await $host.get("api/size")
    return data
}

//products

export const createProduct = async (product) => {
    const {data} = await $authHost.post("api/product", product )
    return data
}

export const fetchProducts = async (typeId, brandId, colorId, sizeId, page, limit = 5)  => {
    const {data} = await $host.get("api/product", {params:{typeId, brandId, colorId, sizeId, page, limit}})
    return data
}

//oneProduct

export const fetchOneProduct = async (id)  => {
    const {data} = await $host.get("api/product/"+id)
    return data
}

//deleteOneProduct