import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import Productitem from "../ProductItem/Productitem";
import style from "./ProductList.module.css";

const Productlist = observer((props) => {
  const { product } = useContext(Context);

  return (
    <div className={style.productGrid}>
      {product.products.map((product) => (
        <div className={style.productItem}>
          <Productitem
            key={product.id}
            propProduct={product}
            admin={props.prodDelete}
          />
          {props.prodDelete ? (
            <button onClick={() => props.prodDelete(product.id)}>Delete</button>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
});

export default Productlist;
