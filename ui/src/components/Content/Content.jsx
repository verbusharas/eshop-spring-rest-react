import {Switch, Route} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Products from "../../pages/Products/Products";
import About from "../../pages/About/About";
import ProductForm from "../../pages/ProductForm/ProductForm";

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
            <Route exact path="/about">
                <About/>
            </Route>
        </Switch>
    </main>
)