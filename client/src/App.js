import React, { useContext, useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

//сюда добавить проверку начальной корзины

const App = observer( ()=> {
  const {user} = useContext(Context)
  const {basket} = useContext(Context)
 const [loading, setLoading] = useState (true)

 useEffect(() => {
    check().then(data => {
      if(data){
        console.log(data)
        user.setUser(true)
        user.setIsAuth(true)
      }
    }).finally(() => setLoading(false))
}, [])

  useEffect(() =>{
    if(localStorage.getItem('basket')){
      let data = JSON.parse(localStorage.getItem('basket'))
      basket.setBasket(data)
    }

  })
  if (loading) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>
    </BrowserRouter>
  );
}
)

export default App;
