import React, { useState, useRef } from "react";
import { useClickOutside } from "../../../hooks/useClickOutside";
import "./dropDownMenu.css";

export default function DropDowm({ name, items, src }) {
  const [isOpen, setOpen] = useState();
  const menuRef = useRef(null);
  const itemRef = useRef(null);
  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => setOpen(false), 50);
  });

  const li = items.map((item) => {
    return (
      <li className="drop_menu_item" id={item.id}>
        {item.item}
      </li>
    );
  });

  return (
    <li className="drop_menu" onClick={() => setOpen(!isOpen)} ref={menuRef}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <li className="menu_buttom">{name}</li>
        <img src={src} className={`arrow${isOpen ? "_rewerse" : ""}`} />
      </div>
      <ul className={`drop_menu_list${isOpen ? "_dropped" : ""}`}>{li}</ul>
    </li>
  );
}
