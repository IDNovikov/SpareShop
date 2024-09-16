import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchOneProduct } from "../../http/productAPI";
import { Context } from "../..";
import YellowButton from "../../components/UI/yellowButton/yellowButton";
import styles from "./ProductPage.module.css";
import ItemSlider from "../../components/UI/ItemSlider/ItemSlider";
import ArrowBack from "../../components/UI/ArrowBack";

const ProductPage = () => {
  const { basket } = useContext(Context);
  const [product, setProduct] = useState({ info: [] });
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const add = () => {
    basket.addProduct(product);
  };

  useEffect(() => {
    fetchOneProduct(id).then((data) => {
      setProduct(data);
      let string = data.img;
      let str = string.replace(/[\"\[\]\\\\s]/g, "");
      let array = str.split(",");
      setImages(array);
    });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.slider}>
        {images[0] != "" ? (
          <>
            <ItemSlider images={images} />{" "}
            <div className={styles.arrow} style={{ position: "absolute" }}>
              <ArrowBack
                width={"30px"}
                height={"30px"}
                func={() => navigate(-1)}
              />
            </div>
          </>
        ) : (
          <div className={styles.arrow} style={{ position: "block" }}>
            <ArrowBack
              width={"30px"}
              height={"30px"}
              func={() => navigate(-1)}
            />
          </div>
        )}
      </div>
      <div>
        <div></div>
        <div>
          <h2> {product.name}</h2>
          <div>
            <h3> {product.price}</h3>
            <div onClick={add}>
              <YellowButton text={" Add to card"} />
            </div>
          </div>
          <div>
            {product.info.map((inf) => (
              <div key={inf.id}>
                {inf.tittle}:{inf.discription}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
