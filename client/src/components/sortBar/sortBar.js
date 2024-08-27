import React, { useState, useRef } from "react";
import styles from "./sortBar.module.css";
import black_arrow from "../../assets/Black_arrow.svg";

export default function SortBar(props) {
  const [isOpen, setOpen] = useState(true);
  const menuRef = useRef(null);
  const itemRef = useRef(null);

  const [tapped, setTapped] = useState();
  const onOptionChange = (e) => {
    setTapped(e.target.value);
  };
  // useClickOutside(menuRef, () => {
  //   if (isOpen) setTimeout(() => setOpen(false), 50);
  // });

  let Sort = [
    { id: 1, item: "Popular" },
    { id: 2, item: "Sort A-Z" },
    { id: 3, item: "Sort Z-A" },
    { id: 4, item: "Low price" },
    { id: 5, item: "High price" },
  ];
  const li = Sort.map((item) => {
    return (
      <li className={styles.dropMenuItem} id={item.id}>
        <input
          className={styles.radio}
          type="radio"
          name={`${item.id}`}
          value={`${item.id}`}
          checked={tapped == item.id}
          onChange={onOptionChange}
        />
        {item.item}
      </li>
    );
  });

  return (
    <li className={styles.dropMenu} ref={menuRef}>
      <div
        onClick={() => setOpen(!isOpen)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <li className={styles.menuButtom}>Sort</li>
        <img
          src={black_arrow}
          className={`${isOpen ? styles.arrow : styles.rewerse}`}
        />
      </div>
      <ul
        className={`${
          isOpen ? styles.dropMenuList : styles.dropMenuListDropped
        }`}
      >
        {li}
      </ul>
    </li>
  );
}
