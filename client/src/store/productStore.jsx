import {makeAutoObservable} from "mobx"

export default class ProductStore{

    constructor (){

        this._types = [
            {id: 1, name: "Nosok1"},
            {id: 2, name: "Nosok2"},
            {id: 3, name: "Nosok3"},
            {id: 4, name: "Nosok4"}

        ]
        this._brands = [
            {id: 1, name: "IP"},
            {id: 2, name: "Okey"}
        ]
        this._colors = [
            {id: 1, name: "green"},
            {id: 2, name: "white"}
        ]
        this._sizes = [
            {id: 1, name: "XL"},
            {id: 2, name: "M"}
        ]
        
        this._products = [
            {id: 1, name: "ClassicNosok1", price: 2500, img:"https://fb.ru/media/i/8/8/5/8/6/6/i/885866.jpg"},
            {id: 2, name: "ClassicNosok2", price: 3500, img:"https://fb.ru/media/i/8/8/5/8/6/6/i/885866.jpg"},
            {id: 3, name: "ClassicNosok3", price: 4500, img:"https://fb.ru/media/i/8/8/5/8/6/6/i/885866.jpg"},
            {id: 4, name: "ClassicNosok4", price: 5500, img:"https://fb.ru/media/i/8/8/5/8/6/6/i/885866.jpg"},
        ]
    //множественное выделение        
        this._selectedTypes = {

        }

        this._selectedBrands = {

        }
        
        this._selectedColors = {

        }
        
        this._selectedSizes = {

        }

        makeAutoObservable(this)
    }
    setTypes (types){
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    setColors(colors) {
        this._colors = colors
    }
    setSizes(sizes) {
        this._sizes = sizes
    }
    setProducts(products) {
        this._products = products
    }
    //множественное выделение
    setSelectedTypes(type){
        this._selectedTypes = type
    }
        setSelectedBrands(brand){
        this._selectedBrands = brand
    }
        setSelectedSizes(size){
        this._selectedSizes = size
    }
            setSelectedColors(color){
        this._selectedColors = color
    }

    get types (){
        return this._types
    }
    get brands (){
        return this._brands
    }
        get colors (){
        return this._colors
    }
        get sizes (){
        return this._sizes
    }
        get products (){
        return this._products
    }

        //множественное выделение
        get selectedTypes (){
        return this._selectedTypes
    }
            get selectedBrands (){
        return this._selectedBrands
    }
            get selectedSizes (){
        return this._selectedSizes
    }
            get selectedColors (){
        return this._selectedColors
    }
}