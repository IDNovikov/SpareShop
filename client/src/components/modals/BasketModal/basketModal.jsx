import React from "react";
import { useState, useContext } from "react";
import { Context } from "../../../";
import BasketItem from "../basketItem/basketItem";
import { observer } from "mobx-react-lite";
import { SHOP_ROUTE } from "../../../utils/consts";
import { checkCertificate } from "../../../http/certificateAPI";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import OrderModal from "../OrderModal/orderModal";
import styles from "./basket.module.css";
import X from "../../../assets/black-X.svg";
import H2Medium from "../../UI/H2regular";
import H1Medium from "../../UI/H1Medium";
import YellowButton from "../../UI/yellowButton/yellowButton";
import H1regular from "../../UI/H1regular";
const BasketModal = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const { basket } = useContext(Context);

  const [value, setValue] = useState();
  const [certi, setCerti] = useState(0);
  const [modal, setModal] = useState(false);

  console.log(certi);

  const checkCerti = () => {
    if (value) {
      checkCertificate({ uniqId: value }).then((data) => {
        setCerti(JSON.parse(data));
      });
    } else {
      setValue("Wrong certificate`s ID");
    }
  };

  const addToBasket = (product) => {
    basket.addProduct(product);
  };

  const deleteFromBasket = (id) => {
    basket.deleteProduct(id);
  };

  let sum = 0;
  const cost = (basket, certi) => {
    if (!certi) {
      console.log(certi);
      basket.basket.map((product) => (sum += Number(product.price)));
    } else {
      basket.basket.map((product) => (sum += Number(product.price)));
      sum = sum - Number(certi.amount);
    }
  };
  cost(basket, certi);

  return (
    <div className={styles.mobileWindow}>
      <div className={styles.modalWrapper}>
        <>
          <div className={styles.modalHeader}>
            <div className={styles.modalTittle}>Shopping cart</div>
            <div className={styles.modalClose} onClick={() => navigate(-1)}>
              <img src={X} />
            </div>
          </div>
          {sum == 0 ? (
            <div
              style={{
                postition: "relative",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "20%",
                width: "328px",
              }}
            >
              <div>
                <H1regular
                  text={
                    "The shooping cart is empty, look the something in our catalog"
                  }
                  align={"left"}
                />
              </div>
              <div>
                <Link style={{ color: "black" }} to={SHOP_ROUTE}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      marginTop: "15px",
                    }}
                  >
                    <YellowButton
                      height={"42px"}
                      width={"328px"}
                      text={"Checkout"}
                      fontSize={"20px"}
                      fontColor={"Black"}
                    />
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.modal}>
                <div>
                  {basket.basket.map((product, ind) => {
                    return (
                      <BasketItem
                        key={ind}
                        product={product}
                        delete={deleteFromBasket}
                        add={addToBasket}
                      />
                    );
                  })}
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "15px 0px",
                    padding: "0px 10px",
                  }}
                >
                  <H2Medium text={`Subtotal (${basket.basket.length}): `} />
                  <H1Medium text={`€ ${sum}`} />
                </div>
                <div
                  style={{
                    padding: "0px 10px",
                  }}
                >
                  <H2Medium text={"Gift certificate"} />
                  {/* Нужно изменить кнопку. При вводе сертификата, она должна гореть красным если не правильно */}
                  <div>
                    <form>
                      <input
                        className={styles.search}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={checkCerti}
                        placeholder="Code"
                      />
                    </form>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                >
                  <YellowButton
                    height={"42px"}
                    width={"calc(100% - 20px)"}
                    text={"Checkout"}
                    fontSize={"20px"}
                    fontColor={"Black"}
                  />
                </div>
              </div>
            </>
          )}

          {modal && (
            <OrderModal
              basket={basket}
              certi={certi}
              setModal={setModal}
              amount={sum}
            />
          )}
        </>
      </div>
    </div>
  );
});

export default BasketModal;
