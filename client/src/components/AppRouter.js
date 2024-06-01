import React from "react"
import { Route, Routes, Redirect} from "react-router-dom"
import { authRoutes, publicRoutes } from "../routes.js";

const AppRouter = () => {
    const isAuth = true
  return (
    <Routes>
     {isAuth&&authRoutes.map(({path, Component}) =>
     <Route key = {path} path={path} Component={Component} exact/>
    )}
    {publicRoutes.map(({path, Component}) =>
     <Route key = {path} path={path} Component={Component} exact/>
    )}
    </Routes>
  );
}

export default AppRouter;
