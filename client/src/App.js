import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  CSSProperties,
} from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
import Footer from "./components/Footer/Footer";

import ClipLoader from "react-spinners/ClipLoader";

const App = observer(() => {
  const { user } = useContext(Context);
  const { basket } = useContext(Context);
  const { favorites } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const secondComponentRef = useRef(null);

  const scrollToSecondComponent = () => {
    if (secondComponentRef.current) {
      secondComponentRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("secondComponentRef is null");
    }
  };

  useEffect(() => {
    check()
      .then((data) => {
        if (data) {
          console.log(data);
          user.setUser(true);
          user.setIsAuth(true);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("basket")) {
      let data = JSON.parse(localStorage.getItem("basket"));
      basket.setBasket(data);
    }
    if (localStorage.getItem("favorites")) {
      let data = JSON.parse(localStorage.getItem("favorites"));
      favorites.setFavorites(data);
    }
  });
  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <BrowserRouter>
      <Navbar scrollToSecondComponent={scrollToSecondComponent} />
      <AppRouter ref={secondComponentRef} />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
