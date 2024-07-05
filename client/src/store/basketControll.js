import {makeAutoObservable} from "mobx"

export default class BasketControl{

    constructor (){

        
        this._basket = []

        makeAutoObservable(this)
    }
    
    addProduct(product) {
        this._basket.push(product)
        localStorage.setItem('basket', JSON.stringify(this._basket))
    }
    
    deleteProduct(id) {
        for(let i = 0; i<=this._basket.length; i++) {
            if(this._basket[i][id]==id){
                return this._basket.splice(i, 1)
            }
        }
        localStorage.removeItem('basket')
        localStorage.setItem('basket', JSON.stringify(this._basket))
    }
    
        get basket (){
            if(localStorage.getItem('basket')){
                return  localStorage.getItem('basket')
            }
        return this._basket
    }
}