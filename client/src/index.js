import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserStore from './store/useStore';
import ProductStore from './store/productStore';
import "bootstrap/dist/css/bootstrap.css"


 export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Context.Provider value = {{
    user: new UserStore(),
    product: new ProductStore()
}}>
<App />
</Context.Provider>
    

);


reportWebVitals();
