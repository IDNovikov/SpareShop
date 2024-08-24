import React, { useContext, useState, useRef } from "react";
import { Context } from "../../index";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  POST_ROUTE,
  CERTIFICATE_ROUTE,
  BASKET_ROUTE,
} from "../../utils/consts";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import BasketButton from "../UI/basketButton";
import desk from "./DesktopNavbar.module.css";
import CircleButton from "../UI/circleButtom";
import heart from "../../assets/heart.svg";
import heart_black from "../../assets/heart.png";
import inst from "../../assets/inst.png";
import logo from "../../assets/LogoPlace.png";
import HeaderText from "../UI/headerText";
import { useClickOutside } from "../../hooks/useClickOutside";
import DropDown from "../UI/dropDownMenu/dropDownMenu";
import cont from "../../assets/Container.svg";
import lupa from "../../assets/Lupa.svg";
import white_arrow from "../../assets/Lolo.svg";
import black_arrow from "../../assets/Black_arrow.svg";
import YellowButton from "../UI/yellowButton/yellowButton";
import TittleText from "../UI/tittleText";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef(null);
  const windowWidth = useRef(window.innerWidth);

  useClickOutside(menuRef, () => {
    if (isOpen) {
      setOpen(false);
    }
  });

  const { user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation(-1);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    navigate(LOGIN_ROUTE);
  };

  let products = [
    { id: 1, item: "Spearguns" },
    { id: 2, item: "Fins" },
    { id: 3, item: "Wetsuits" },
    { id: 4, item: "Masks" },
    { id: 5, item: "Accesories" },
  ];

  let brands = [
    { id: 1, item: "Mythicon" },
    { id: 2, item: "Carbonio GFT" },
    { id: 3, item: "One shot" },
    { id: 4, item: "Polosub" },
    { id: 5, item: "Hydronaut" },
    { id: 6, item: "BEENUSUAL" },
    { id: 7, item: "Ilya Brans" },
    { id: 8, item: "K.Rouk" },
  ];

  return (
    <div className={desk.header}>
      <div className={desk.main}>
        {windowWidth.current > 750 ? (
          <>
            <div className={desk.firstLine}>
              <div className={desk.contacts}>
                <CircleButton
                  className={desk.one}
                  img={inst}
                  width={"24px"}
                  height={"24px"}
                  bckgrnd={"white"}
                />
                <HeaderText />
              </div>
              <div className={desk.logo}>
                <CircleButton
                  img={logo}
                  width={"172px"}
                  height={"172px"}
                  bckgrnd={"black"}
                />
              </div>
              <div className={desk.menu}>
                <CircleButton
                  img={heart_black}
                  width={"24px"}
                  height={"24px"}
                  bckgrnd={"white"}
                />
                <Link to={BASKET_ROUTE} state={{ background: location }}>
                  <BasketButton />
                </Link>
              </div>
            </div>
            <nav
              className={`${desk.menuNav} ${isOpen ? desk.menuNavActive : ""}`}
              ref={menuRef}
            >
              <ul className={desk.headerNavList}>
                <li className={desk.headerNavItem}>
                  <DropDown
                    name={"Products"}
                    items={products}
                    src={white_arrow}
                  />
                </li>
                <li className={desk.headerNavItem}>
                  <DropDown name={"Brands"} items={brands} src={white_arrow} />
                </li>
                <li className={desk.headerNavItem}>
                  <Link className={desk.Link} to={SHOP_ROUTE}>
                    Catalog
                  </Link>
                </li>
                <li className={desk.headerNavItem}>
                  <Link className={desk.Link} to={CERTIFICATE_ROUTE}>
                    Gift certificate
                  </Link>
                </li>
                <li className={desk.headerNavItem}>
                  <Link className={desk.Link} to={POST_ROUTE}>
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        ) : (
          <>
            <div className={desk.firstLine}>
              <div className={desk.logo}>
                <CircleButton
                  img={logo}
                  width={"70px"}
                  height={"70px"}
                  bckgrnd={"black"}
                />
              </div>
              <div className={desk.menu}>
                <CircleButton
                  img={heart}
                  width={"24px"}
                  height={"24px"}
                  bckgrnd={"black"}
                />
                <CircleButton
                  img={lupa}
                  width={"24px"}
                  height={"24px"}
                  bckgrnd={"black"}
                />
                <Link to={BASKET_ROUTE} state={{ background: location }}>
                  <BasketButton />
                </Link>

                <button
                  className={desk.MenuButton}
                  onClick={() => setOpen(!isOpen)}
                >
                  <img src={cont} />
                </button>
              </div>
            </div>
            <nav
              className={`${desk.menuNav} ${isOpen ? desk.menuNavActive : ""}`}
              ref={menuRef}
            >
              <ul className={desk.headerNavList}>
                <li className={desk.headerNavItem}>
                  <DropDown
                    name={"Products"}
                    items={products}
                    src={black_arrow}
                  />
                </li>
                <li className={desk.headerNavItem}>
                  <DropDown name={"Brands"} items={brands} src={black_arrow} />
                </li>
                <li className={desk.headerNavItem}>
                  <Link className={desk.Link} to={SHOP_ROUTE}>
                    Catalog
                  </Link>
                  <img className={desk.linkArrow} src={black_arrow} />
                </li>
                <li className={desk.headerNavItem}>
                  <Link className={desk.Link} to={CERTIFICATE_ROUTE}>
                    Gift certificate
                  </Link>
                  <img className={desk.linkArrow} src={black_arrow} />
                </li>
                <li className={desk.headerNavItem}>
                  <Link className={desk.Link} to={POST_ROUTE}>
                    Blog
                  </Link>
                  <img className={desk.linkArrow} src={black_arrow} />
                </li>
                <div
                  style={{
                    height: "88px",
                    gap: "8px",
                    opacity: "0px",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "24px",
                    textAlign: "left",
                  }}
                >
                  <div
                    style={{
                      color: "#afadad",
                      marginBottom: "5px",
                      marginTop: "30px",
                    }}
                  >
                    Address: Agias Zonis 59 Shop 2, Limassol
                  </div>

                  <div
                    style={{
                      color: "#afadad",
                      marginBottom: "5px",
                    }}
                  >
                    Phone:{" "}
                    <a
                      style={{ all: "unset", textDecoration: "underline" }}
                      href="tel:+35797617817"
                    >
                      +357 97 617 817
                    </a>
                  </div>
                </div>
              </ul>
            </nav>
          </>
        )}

        {user.isAuth && (
          <div>
            <button
              className={desk.adminButton}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin panel
            </button>
            <button className={desk.adminButton} onClick={() => logOut()}>
              Logout
            </button>
          </div>
        )}
      </div>
      <div className={desk.wallpaper}>
        <TittleText
          margin={""}
          width={""}
          height={""}
          fontSize={"123px"}
          fontWeight={"400"}
        />
        <YellowButton
          height={"52px"}
          width={"250px"}
          text={"Shop now"}
          fontSize={"20px"}
          fontColor={"Black"}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
