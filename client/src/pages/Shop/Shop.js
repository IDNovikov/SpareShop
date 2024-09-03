import React, { useContext, useEffect, useRef, useState } from "react";
import Typebar from "../../components/typeBar/Typebar";
import Sizebar from "../../components/sizeBar/Sizebar";
import Colorbar from "../../components/colorBar/Colorbar";
import Brandbar from "../../components/brandBar/Brandbar";
import Selectedbar from "../../components/Selectedbar";
import Productlist from "../../components/ProductList/Productlist";
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
import PriceBar from "../../components/priceBar/priceBar";
import GreyButton from "../../components/UI/greyButton/GreyButton";
import filter from "../../assets/filter.svg";
import lupa from "../../assets/blacklupa.svg";

const Shop = observer(() => {
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const menuRef = useRef(null);
  const windowWidth = useRef(window.innerWidth);
  const { product } = useContext(Context);

  const handleSearch = (value) => {
    if (value) {
      product.setSelectedSearch(value);
    } else if (!value) {
      value = null;
      product.setSelectedSearch(value);
    }
  };
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
      product.selectedBrands,
      product.selectedTypes,
      product.selectedColors,
      product.selectedSizes,
      product.selectedPrices,
      product.selectedSearch,
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
    product.selectedPrices,
    product.selectedSearch,
  ]);

  return (
    <div>
      <div className={style.title}>
        Catalog spearfishing items in Limassol{" "}
        <div className={style.items}>{product.products.length} items</div>
      </div>
      {windowWidth.current > 750 ? (
        <div style={{ display: "flex" }}>
          <div className={style.filterBar}>
            <nav className={style.menuNavActive} ref={menuRef}>
              <ul className={style.NavList}>
                <li className={style.NavItem}>
                  <SortBar />
                </li>
                <li className={style.NavItem}>
                  <Typebar />
                </li>
                <li className={style.NavItem}>
                  <PriceBar />
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
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Selectedbar />
              <div className={style.menuSearchActive} ref={menuRef}>
                <input
                  type="search"
                  placeholder="Search"
                  className={style.search}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                  className={style.searchBtn}
                  onClick={() => handleSearch(searchValue)}
                >
                  <img className={style.btnLupa} src={lupa} />
                </button>
              </div>
            </div>
            <Productlist />
            <Pages />
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={style.filterBarMob}>
            <div onClick={() => setOpen(!isOpen)}>
              <GreyButton
                img={filter}
                imgHeight={"28px"}
                imgWidth={"28px"}
                height={"42px"}
                width={"113px"}
                text={"Filter"}
                fontSize={"20px"}
                fontColor={"Black"}
              />
            </div>
            <div onClick={() => setSearch(!search)}>
              <GreyButton
                img={lupa}
                imgHeight={"28px"}
                imgWidth={"28px"}
                height={"42px"}
                width={"68px"}
              />
            </div>
          </div>
          <div
            className={`${search ? style.menuSearchActive : style.menuSearch}`}
            ref={menuRef}
          >
            <input
              type="search"
              placeholder="Search"
              className={style.search}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className={style.searchBtn}
              onClick={() => handleSearch(searchValue)}
            >
              <img className={style.btnLupa} src={lupa} />
            </button>
          </div>

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
                <PriceBar />
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

          <div>
            <Selectedbar />

            <Productlist />
            <Pages />
          </div>
        </div>
      )}
    </div>
  );
});

export default Shop;
