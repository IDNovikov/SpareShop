import {makeAutoObservable} from "mobx"

export default class ProductStore{

    constructor (){

        this._types = []

        this._brands = [

        ]
        this._colors = [

        ]
        this._sizes = [

        ]
        
        this._products = [
            // {id: 1, name: "ClassicNosok1", price: 2500, img:"https://fb.ru/media/i/8/8/5/8/6/6/i/885866.jpg"}
        ]
    //множественное выделение        
        this._selectedTypes = {}
        

        this._selectedBrands = {
 }
        
        this._selectedColors = {

        }
        
        this._selectedSizes = {

        }

        this._page = 1
        this._totalCount = 9
        this._limit = 3
        

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
        this.setPage(1)
        this._selectedTypes = type
    }
        setSelectedBrands(brand){
            this.setPage(1)
        this._selectedBrands = brand
    }
        setSelectedSizes(size){
            this.setPage(1)
        this._selectedSizes = size
    }
            setSelectedColors(color){
                this.setPage(1)
        this._selectedColors = color
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount=count
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

    get totalCount () {
        return this._totalCount
    }

    get page () {
        return this._page
    }

    get limit (){
        return this._limit
    }
}