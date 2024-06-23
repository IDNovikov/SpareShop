import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/userStore';
import ProductStore from './store/productStore';
import "bootstrap/dist/css/bootstrap.css"
import { Navbar } from 'react-bootstrap';

 export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Context.Provider value = {{
    user: new UserStore(),
    product: new ProductStore()
}}>
<Navbar/>
<App />
</Context.Provider>
    

);


reportWebVitals();
