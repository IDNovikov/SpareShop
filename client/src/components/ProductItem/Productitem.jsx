import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";

import Heart from "../../assets/heart.png";
import { useNavigate } from "react-router-dom";
import { PRODUCT_ROUTE } from "../../utils/consts";
import { Context } from "../..";
import style from "./ProductItem.module.css";

const Productitem = ({ propProduct, admin }) => {
  const { favorites } = useContext(Context);
  const { product } = useContext(Context);
  const navigate = useNavigate();

  const add = () => {
    favorites.addProduct(propProduct);
  };

  let array;
  const set = () => {
    let string = propProduct.img;
    let str = string.replace(/[\"\[\]\\\\s]/g, "");
    array = str.split(",");
  };

  set();
  return (
    <div className={style.mainItem}>
      <div className={style.inner}>
        <img className={style.Heart} src={Heart} onClick={add} />
        <img
          onClick={() => navigate(PRODUCT_ROUTE + "/" + propProduct.id)}
          className={style.Image}
          src={process.env.REACT_APP_API_URL + array[0]}
        />

        <div>
          <div className={style.Price}> € {propProduct.price}</div>
          <div className={style.Brand}>
            {product.brands.map((elem) => {
              if (elem.id == propProduct.brandId) {
                return elem.name;
              }
            })}
          </div>
          <div className={style.Name}>{propProduct.name}</div>

          {/* {!admin ? <button onClick={add}> Add to card</button> : <></>} */}
        </div>
      </div>
    </div>
  );
};

export default Productitem;
