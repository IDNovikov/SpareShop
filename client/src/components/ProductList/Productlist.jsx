import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import Productitem from "../ProductItem/Productitem";
import style from "./ProductList.module.css";
import GreyButton from "../UI/greyButton/GreyButton";

const Productlist = observer((props) => {
  const { product } = useContext(Context);

  return (
    <div className={style.productGrid}>
      {product.products.map((product, ind) => (
        <div className={style.productItem}>
          <Productitem
            key={product.id}
            propProduct={product}
            productDelete={props.prodDelete}
          />
          {props.prodDelete ? (
            <div onClick={() => props.prodDelete(product.id)}>
              <GreyButton
                height={"42px"}
                width={"110px"}
                text={"Delete"}
                fontSize={"14px"}
                fontColor={"Black"}
                bckColor={"#ec3a3a"}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
});

export default Productlist;
