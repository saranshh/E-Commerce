import './App.css';
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js"
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from './component/User/LoginSignUp';
import store from './store';
import { loadUser, updateUser } from './actions/userAction';
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.js";
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from './component/User/UpdateProfile.js';
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
// import { Navigate } from 'react-router';
import Cart from "./component/Cart/Cart.js"
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js"
import axios from 'axios';
import Payment from "./component/Cart/Payment.js"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/Orders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct.js";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from './component/Admin/OrderList';
import ProcessOrder from './component/Admin/ProcessOrder';
import UsersList from './component/Admin/UsersList';
import UpdateUser from './component/Admin/UpdateUser';
import ProductReviews from './component/Admin/ProductReviews';
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/NotFound/NotFound";


function App() {

const {isAuthenticated , user} = useSelector(state => state.user)

const [stripeApiKey, setStripeApiKey] = useState("pk_test_51MLn1pSIVwHQbNUxYlxmdNRWCVlZaPutPiRE24G6Ld7a8s8fRXspf1Nm26n3NsnZjPNcqjf5EZoBysdphIYN6n2F00u4MbZBZP");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

React.useEffect(() => {
  WebFont.load({
    google: {
      families: ["Roboto", "Droid Sans", "Chilanka"]
    }
  });
  store.dispatch(loadUser());
}, []);

  return (
    <Router>
        <Header />
        {isAuthenticated && <UserOptions user={user} /> }
        <Routes>
        <Route exact path = "/" element={<Home />} />
        <Route exact path = "/product/:id" element={<ProductDetails />} />
        <Route exact path = "/products" element={<Products />} />
        <Route path = "/products/:keyword" element={<Products />} />
        <Route exact path = "/search" element={<Search />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
       
        {/* ProtectedRoute Alternative */}
        <Route exact path = "/account" element={isAuthenticated ? <Profile /> : <LoginSignUp/>} /> 
        <Route exact path = "/me/update" element={isAuthenticated ? <UpdateProfile /> : <LoginSignUp/>} />
        <Route exact path = "/password/update" element={isAuthenticated ? <UpdatePassword /> : <LoginSignUp/> } />
        <Route exact path = "/shipping" element={isAuthenticated ? <Shipping /> : <LoginSignUp/> } />
        <Route exact path = "/order/confirm" element={isAuthenticated ? <ConfirmOrder /> : <LoginSignUp/> } />
        <Route exact path = "/success" element={isAuthenticated ? <OrderSuccess /> : <LoginSignUp/> } />
        <Route exact path = "/orders" element={isAuthenticated ? <MyOrders /> : <LoginSignUp/> } />
        <Route exact path = "/order/:id" element={isAuthenticated ? <OrderDetails /> : <LoginSignUp/> } />

        {/* <Route element={ <ProtectedRoute isAuthenticated={isAuthenticated} /> } > */}
        <Route exact path="/admin/dashboard" element={ <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <Dashboard /> </ProtectedRoute> } />
        <Route exact path="/admin/products" element={ <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <ProductList /> </ProtectedRoute> } />
        <Route exact path="/admin/product" element={ <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <NewProduct /> </ProtectedRoute> } />
        <Route exact path="/admin/product/:id" element={ <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <UpdateProduct /> </ProtectedRoute> } />
        <Route exact path="/admin/orders" element={ <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <OrderList /> </ProtectedRoute> } />
        <Route exact path="/admin/order/:id" element={ <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <ProcessOrder /> </ProtectedRoute> } />
        <Route exact path="/admin/users" element={ <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <UsersList /> </ProtectedRoute> } />
        <Route exact path="/admin/user/:id" element={ <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <UpdateUser /> </ProtectedRoute> } />
        <Route exact path="/admin/reviews" element={ <ProtectedRoute isAuthenticated={isAuthenticated} isAdmin={true} > <ProductReviews /> </ProtectedRoute> } />
        {/* </Route> */}

        {stripeApiKey && (
        <Route exact path = "/process/payment" element={<Elements stripe={loadStripe(stripeApiKey)}>{isAuthenticated ? <Payment /> : <LoginSignUp/> }</Elements>} />
        )}
        
        {/* <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            {stripeApiKey && (
              <Route
                path="/process/payment"
                element={
                  <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                  </Elements>
                }
              />
            )
          </Route> */}

        {/* <Route element={<ProtectedRoute />}> */}
        {/* <Route exact path = "/account" element={<Profile />} /> */}
        {/* <Route exact path = "/me/update" element={<UpdateProfile />} /> */}
        {/* <Route exact path = "/password/update" element={<UpdatePassword />} /> */}
        {/* </Route> */}

        {/* <Route exact path = "/account" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>} />  */}
        {/* <Route exact path = "/me/update" element={<ProtectedRoute isAuthenticated={isAuthenticated}><UpdateProfile /></ProtectedRoute>} /> */}
        {/* <Route exact path = "/password/update" element={<ProtectedRoute isAuthenticated={isAuthenticated}><UpdatePassword /></ProtectedRoute>} /> */}
        {/* <Route exact path = "/shipping" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Shipping /></ProtectedRoute>} /> */}

        <Route exact path = "/password/forgot" element={<ForgotPassword />} />
        <Route exact path = "/password/reset/:token" element={<ResetPassword />} />
        <Route exact path = "/login" element={<LoginSignUp />} />
        <Route exact path = "/cart" element={<Cart />} />
        <Route path = '*' element={<NotFound />}/>
        </Routes>
        
        <Footer />
    </Router>
   
  );
}

export default App;
