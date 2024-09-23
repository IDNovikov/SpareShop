import React, { useContext, useEffect, useRef, useState } from "react";
import { createColor, fetchColors, deleteColor } from "../../http/productAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import GreyButton from "../UI/greyButton/GreyButton";
import { useClickOutside } from "../../hooks/useClickOutside";
import styles from "./Modal.module.css";
import back from "../../assets/Back.svg";

const CreateColor = observer(() => {
  const { product } = useContext(Context);
  const menuRef = useRef(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDrop, setDrop] = useState(false);
  const [item, setItem] = useState();
  const [value, setValue] = useState();
  const [name, setName] = useState();
  useEffect(() => {
    fetchColors().then((data) => product.setColors(data));
  }, [value, item]);

  const del = () => {
    let outData = JSON.stringify(item.id);
    deleteColor(outData).then((data) => {
      setItem("");
    });
  };
  const addColor = () => {
    createColor({ name: value }).then((data) => setValue(""));
  };
  useClickOutside(menuRef, () => {
    if (isModalOpen) {
      setModalOpen(false);
    }
  });
  return (
    <>
      <div onClick={() => setModalOpen(!isModalOpen)}>
        <GreyButton
          width={"100%"}
          height={"42px"}
          text={"Manage colors"}
          fontSize={"20px"}
          fontColor={"White"}
          bckColor={"#0d6efd"}
        />
      </div>
      <div className={`${isModalOpen ? styles.mobileWindow : styles.none}`}>
        <div className={styles.bckgrnd}>
          <div className={styles.modalWrapper} ref={menuRef}>
            <div className={styles.modalHeader}>
              <button onClick={() => setModalOpen(!isModalOpen)}>
                <img className={styles.back} src={back} />
              </button>
              <div className={styles.modalTittle}>Delete and add colors</div>
            </div>
            <div className={styles.modal}>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "relative",
                    justifyContent: "space-evenly",
                    margin: "50px 0",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                    }}
                    onClick={() => setDrop(!isDrop)}
                  >
                    <GreyButton
                      text={name || "Choose color↓"}
                      width={"200px"}
                      height={"42px"}
                      fontSize={"20px"}
                      fontColor={"black"}
                      bckColor={"white"}
                    />
                    <div
                      className={`${isDrop ? styles.dropMenu : styles.none}`}
                    >
                      {product.colors.map((color) => (
                        <div
                          className={styles.dropItem}
                          onClick={() => (
                            setDrop(!isDrop),
                            setItem(color),
                            setName(color.name)
                          )}
                          key={color.id}
                        >
                          {color.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div onClick={del}>
                    <GreyButton
                      text={"Delete"}
                      width={"200px"}
                      height={"42px"}
                      fontSize={"20px"}
                      fontColor={"White"}
                      bckColor={"#f83636"}
                    />
                  </div>
                </div>

                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2px 16px ",
                    marginBottom: "15px",
                  }}
                >
                  <input
                    className={styles.search}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Write new color"
                  />
                </form>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    margin: "50px 0",
                  }}
                >
                  <div onClick={() => setModalOpen(!isModalOpen)}>
                    <GreyButton
                      width={"200px"}
                      height={"42px"}
                      fontSize={"20px"}
                      text={"Close"}
                      bckColor={"#c6c6c6"}
                    />
                  </div>
                  <div onClick={addColor}>
                    <GreyButton
                      width={"200px"}
                      height={"42px"}
                      fontSize={"20px"}
                      text={"Add"}
                      bckColor={"#fff500"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default CreateColor;
