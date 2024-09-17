import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchOneProduct } from "../../http/productAPI";
import { Context } from "../..";
import YellowButton from "../../components/UI/yellowButton/yellowButton";
import styles from "./ProductPage.module.css";
import ItemSlider from "../../components/UI/ItemSlider/ItemSlider";
import ArrowBack from "../../components/UI/ArrowBack";
import H1Medium from "../../components/UI/H1Medium";
import { formatText } from "../../hooks/formatText";
import H2Medium from "../../components/UI/H2regular";
import GreyButton from "../../components/UI/greyButton/GreyButton";

const ProductPage = () => {
  const { basket } = useContext(Context);
  const { product } = useContext(Context);
  const [productData, setProductData] = useState({ info: [] });
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const add = () => {
    basket.addProduct(productData);
  };

  useEffect(() => {
    fetchOneProduct(id).then((data) => {
      setProductData(data);
      let string = data.img;
      let str = string.replace(/[\"\[\]\\\\s]/g, "");
      let array = str.split(",");
      setImages(array);
    });
  }, []);
  console.log(product.brands[0]);
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
        <H1Medium
          align={"left"}
          text={`${formatText(productData.name)}`}
          size={"24px"}
          color={"#2D2D2D"}
        />

        <H2Medium
          align={"left"}
          size={"16px"}
          text={`Brand:${product.brands.map((elem) => {
            if (elem.id == productData.brandId) {
              return elem.name;
            }
          })}`}
        />
        <H2Medium
          align={"left"}
          size={"16px"}
          text={`Size:${product.sizes.map((elem) => {
            if (elem.id == productData.sizeId) {
              return elem.name;
            }
          })}`}
        />
        <H2Medium
          align={"left"}
          size={"16px"}
          text={`Color:${product.colors.map((elem) => {
            if (elem.id == productData.colorId) {
              return elem.name;
            }
          })}`}
        />
        <h3>€ {productData.price}.00</h3>

        <div onClick={add}>
          <YellowButton
            width={"100%"}
            height={"42px"}
            fontSize={"20px"}
            fontColor={"Black"}
            text={" Add to card"}
          />
        </div>
        <div>
          <GreyButton
            width={"100%"}
            height={"42px"}
            text={"Favorite"}
            fontSize={"20px"}
            fontColor={"Black"}
          />
        </div>

        <div>
          {productData.info.map((inf) => (
            <div key={inf.id}>
              {inf.tittle}:{inf.discription}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
