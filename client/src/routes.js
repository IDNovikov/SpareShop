
import { ADMIN_ROUTE, BASKET_ROUTE, BLOG_ROUTE, CERTIFICATE_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, POST_ROUTE } from "./utils/consts"
import Admin from "./pages/Admin"
import Shop from "./pages/Shop"
import Certificate from "./pages/Certificate"
import Blog from "./pages/Blog"
import Basket from "./pages/Basket"
import ProductPage from "./pages/ProductPage"
import Auth from "./pages/Auth"
import PostPage from "./pages/PostPage"

export const authRoutes = [
{
    path: ADMIN_ROUTE,
    Component: Admin
}
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: CERTIFICATE_ROUTE,
        Component: Certificate
    },
    {
        path: POST_ROUTE+"/:id",
        Component: PostPage
    },
    {
        path: POST_ROUTE,
        Component: Blog
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: PRODUCT_ROUTE+"/:id",
        Component: ProductPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }
]