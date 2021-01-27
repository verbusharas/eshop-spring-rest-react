import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {deleteProduct, fetchProducts} from "../../api/productsApi"
import ProductsTable from "./ProductsTable";
import {useTranslation} from "react-i18next";
import useUser from "../../components/hooks/useUser";


export default () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const user = useUser();

    const {t} = useTranslation();

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
            {
                user?.roles.includes("ADMIN") && (
                <Link to="/products/new">
                <Button type="button" variant="contained" color="primary">{t("button-create-product")}</Button>
                </Link>
                )
            }


        </>
    )

}