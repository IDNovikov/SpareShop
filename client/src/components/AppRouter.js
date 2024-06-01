import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { authRoutes, publicRoutes } from "../routes.js";
import { SHOP_ROUTE } from "../utils/consts.js";

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
    <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />}/>
    </Routes>
  );
}

export default AppRouter;
