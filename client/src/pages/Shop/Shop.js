import React, { useContext, useEffect, useRef, useState } from "react";
import Typebar from "../../components/typeBar/Typebar";
import Sizebar from "../../components/sizeBar/Sizebar";
import Colorbar from "../../components/colorBar/Colorbar";
import Brandbar from "../../components/brandBar/Brandbar";
import Selectedbar from "../../components/Selectedbar";
import Productlist from "../../components/Productlist";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import {
  fetchTypes,
  fetchBrands,
  fetchColors,
  fetchSizes,
  fetchProducts,
} from "../../http/productAPI";
import Pages from "../../components/Pages";
import SortBar from "../../components/sortBar/sortBar";
import style from "./Shop.module.css";

const Shop = observer(() => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  const { product } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => product.setTypes(data));
    fetchBrands().then((data) => product.setBrands(data));
    fetchColors().then((data) => product.setColors(data));
    fetchSizes().then((data) => product.setSizes(data));
    fetchProducts().then((data) => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchProducts(
      product.selectedTypes,
      product.selectedColors,
      product.selectedSizes,
      product.selectedBrands,
      product.page,
      9
    ).then((data) => {
      product.setProducts(data.rows);
      product.setTotalCount(data.count);
    });
  }, [
    product.page,
    product.selectedTypes,
    product.selectedColors,
    product.selectedSizes,
    product.selectedBrands,
  ]);

  return (
    <div>
      <div className={style.title}>
        Catalog spearfishing items in Limassol{" "}
        <div className={style.items}>{product.products.length} items</div>
      </div>
      <div style={{ display: "flex" }}>
        <div className={style.leftSideBar}>
          <nav
            className={`${isOpen ? style.menuNavActive : style.menuNav}`}
            ref={menuRef}
          >
            <ul className={style.NavList}>
              <li className={style.NavItem}>
                <SortBar />
              </li>
              <li className={style.NavItem}>
                <Typebar />
              </li>
              <li className={style.NavItem}>
                <Brandbar />
              </li>
              <li className={style.NavItem}>
                <Sizebar />
              </li>
              <li className={style.NavItem}>
                <Colorbar />
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Selectedbar />

          <Productlist />
          <Pages />
        </div>
      </div>
    </div>
  );
});

export default Shop;
