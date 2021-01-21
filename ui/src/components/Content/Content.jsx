import {Switch, Route} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Products from "../../pages/Products/Products";
import About from "../../pages/About/About";
import ProductForm from "../../pages/ProductForm/ProductForm";
import Cart from "../../pages/Cart/Cart";
import NotFound from "../../pages/NotFound/NotFound";
import SingleProduct from "../../pages/Products/SingleProduct";

export default () => (
    <main className="container">
        <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route exact path="/products">
                <Products/>
            </Route>
            <Route exact path="/products/new">
                <ProductForm/>
            </Route>
            <Route path="/products/:id">
                <SingleProduct/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/cart">
                <Cart/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    </main>
)