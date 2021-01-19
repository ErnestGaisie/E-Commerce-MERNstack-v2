import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homescreen/HomeScreen";
import ProductScreen from "./screens/productscreen/ProductScreen";
import CartScreen from "./screens/cartscreen/CartScreen";
import LoginScreen from "./screens/loginscreen/LoginScreen";
import RegisterScreen from "./screens/registerscreen/RegisterScreen";
import ProfileScreen from "./screens/profilescreen/ProfileScreen";
import ShippingScreen from "./screens/shippingscreen/ShippingScreen";
import PaymentScreen from "./screens/paymentscreen/PaymentScreen";
import PlaceOrderScreen from "./screens/placeorderscreen/PlaceOrderScreen";
import OrderScreen from "./screens/orderscreen/OrderScreen";
import UserListScreen from "./screens/userlistscreen/UserListScreen";
import UserEditScreen from "./screens/usereditscreen/UserEditScreen";
import ProductListScreen from "./screens/productlistscreen/ProductListScreen";
import ProductEditScreen from "./screens/producteditscreen/ProductEditScreen";
import OrderListScreen from "./screens/orderlistscreen/OrderListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/admin/productlist" component={ProductListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
