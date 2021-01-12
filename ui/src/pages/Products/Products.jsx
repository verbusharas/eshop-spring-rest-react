import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {deleteProduct, fetchProducts} from "../../api/productsApi"
import ProductsTable from "./ProductsTable";


export default () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadAllProducts()
    }, []);

    const loadAllProducts = () => {
        setIsLoading(true);
        fetchProducts().then(response => {
            setProducts(response.data)
        }).finally(() => {
            setIsLoading(false);
        })
    }

    const handleDeleteClick = (id) => {
        setIsLoading(true);
        deleteProduct(id)
            .then(() => {
                loadAllProducts();
            }).finally(() => {
            setIsLoading(false);
        })
    }

    return (
        <>
            <h1>Products Page</h1>
            {
                isLoading ? <div className="spinner-border" role="status"/> :
                    <ProductsTable
                        products={products}
                        handleDeleteClick={handleDeleteClick}
                    />
            }


            <Link to="/products/new">
                <Button type="button" variant="contained" color="primary">Sukurti produkta</Button>
            </Link>
        </>
    )

}