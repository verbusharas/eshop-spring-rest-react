import {Switch, Route} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Products from "../../pages/Products/Products";
import About from "../../pages/About/About";
import ProductForm from "../../pages/ProductForm/ProductForm";
import Cart from "../../pages/Cart/Cart";
import NotFound from "../../pages/NotFound/NotFound";
import SingleProduct from "../../pages/Products/SingleProduct";
import Login from "../../pages/Login/Login"
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export default () => (
    <main className="container">
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/products">
                <Products/>
            </Route>
            <PrivateRoute exact path="/products/new" roles={["ADMIN"]}>
                <ProductForm/>
            </PrivateRoute>
            <Route path="/products/:id">
                <SingleProduct/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <PrivateRoute exact path="/cart">
                <Cart/>
            </PrivateRoute>
            <Route exact path="/login">
                <Login/>
            </Route>

            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    </main>
)




