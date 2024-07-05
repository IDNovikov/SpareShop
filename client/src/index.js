import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/userStore';
import ProductStore from './store/productStore';
import "bootstrap/dist/css/bootstrap.css"
import BlogWall from './store/blogWall';
import BasketControl from './store/basketControll';


 export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Context.Provider value = {{
    user: new UserStore(),
    product: new ProductStore(),
    blog: new BlogWall(),
    basket: new BasketControl()
}}>
<App />
</Context.Provider>
    

);


reportWebVitals();
