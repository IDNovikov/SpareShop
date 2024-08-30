import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._types = [];

    this._brands = [];
    this._colors = [];
    this._sizes = [];

    this._products = [
      // {id: 1, name: "ClassicNosok1", price: 2500, img:"https://fb.ru/media/i/8/8/5/8/6/6/i/885866.jpg"}
    ];
    //множественное выделение
    this._selectedTypes = [];

    this._selectedBrands = [];

    this._selectedColors = [];

    this._selectedSizes = [];

    this._page = 1;
    this._totalCount = 9;
    this._limit = 3;

    makeAutoObservable(this);
  }
  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }
  setColors(colors) {
    this._colors = colors;
  }
  setSizes(sizes) {
    this._sizes = sizes;
  }
  setProducts(products) {
    this._products = products;
  }

  //множественное выделение
  setSelectedTypes(type) {
    this.setPage(1);
    let flag = true;
    let arr = [...this._selectedTypes];
    arr.map((elem, ind) => {
      if (elem == type) {
        arr.splice(ind, 1);
        return (flag = false);
      }
    });
    if (flag) {
      arr.push(Number(type));
    }
    this._selectedTypes = arr;
  }

  setSelectedBrands(brand) {
    this.setPage(1);
    let flag = true;
    let arr = [...this._selectedBrands];
    arr.map((elem, ind) => {
      if (elem == brand) {
        console.log(elem);
        arr.splice(ind, 1);
        return (flag = false);
      }
    });
    if (flag) {
      arr.push(Number(brand));
    }
    console.log(arr);
    this._selectedBrands = arr;
  }
  setSelectedSizes(size) {
    this.setPage(1);
    let flag = true;
    let arr = [...this._selectedSizes];
    arr.map((elem, ind) => {
      if (elem == size) {
        arr.splice(ind, 1);
        return (flag = false);
      }
    });
    if (flag) {
      arr.push(Number(size));
    }
    this._selectedSizes = arr;
  }
  setSelectedColors(color) {
    this.setPage(1);
    let flag = true;
    let arr = [...this._selectedColors];
    arr.map((elem, ind) => {
      if (elem == color) {
        arr.splice(ind, 1);
        return (flag = false);
      }
    });
    if (flag) {
      arr.push(Number(color));
    }
    this._selectedSizes = arr;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get colors() {
    return this._colors;
  }
  get sizes() {
    return this._sizes;
  }
  get products() {
    return this._products;
  }

  //множественное выделение
  get selectedTypes() {
    return this._selectedTypes;
  }
  get selectedBrands() {
    return this._selectedBrands;
  }
  get selectedSizes() {
    return this._selectedSizes;
  }
  get selectedColors() {
    return this._selectedColors;
  }

  get totalCount() {
    return this._totalCount;
  }

  get page() {
    return this._page;
  }

  get limit() {
    return this._limit;
  }

  sortByLowPrice() {
    this._products.sort((a, b) => {
      if (Number(a.price) > Number(b.price)) {
        return 1;
      }
      if (Number(a.price) < Number(b.price)) {
        return -1;
      }
      return 0;
    });
    return this._products;
  }
  sortByHighPrice() {
    this._products.sort((a, b) => {
      if (Number(a.price) < Number(b.price)) {
        return 1;
      }
      if (Number(a.price) > Number(b.price)) {
        return -1;
      }
      return 0;
    });
    return this._products;
  }
  sortByAZ() {
    this._products.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    return this._products;
  }
  sortByZA() {
    this._products.sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
    return this._products;
  }
  sortByIndex() {
    this._products.sort((a, b) => {
      if (Number(a.id) < Number(b.id)) {
        return 1;
      }
      if (Number(a.id) > Number(b.id)) {
        return -1;
      }
      return 0;
    });
    return this._products;
  }
}
