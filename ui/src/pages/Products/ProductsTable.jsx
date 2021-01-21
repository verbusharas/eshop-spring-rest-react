import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import React from "react";
import {useContext} from "react";
import {CartContext} from "../../App";
import {Box} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import {addToCart} from "../../store/slices/cartSlice";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const ProductTable = (props) => {
    const {products, handleDeleteClick, addToCart} = props;

    // === CONTEXT ===
    // const {addProduct} = useContext(CartContext);
    const {t} = useTranslation();

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell align="center">{t("table-product-name")}</TableCell>
                        <TableCell align="center">{t("table-product-description")}</TableCell>
                        <TableCell align="center">{t("table-product-in-stock")}</TableCell>
                        <TableCell align="center">{t("table-product-price")}</TableCell>
                        <TableCell align="center">{t("table-product-actions")}</TableCell>
                        <TableCell align="center"/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map(p => (
                            <TableRow key={p.id}>
                                <TableCell align="center">{p.id}</TableCell>
                                <TableCell><Link to={`/products/${p.id}`}>{p.name}</Link></TableCell>
                                <TableCell align="center">{p.name}</TableCell>
                                <TableCell align="center">{p.description}</TableCell>
                                <TableCell align="center">{p.inStock}</TableCell>
                                <TableCell align="center">{p.price}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        color="primary"
                                        size="small"
                                        onClick={() => addToCart({
                                            id: p.id,
                                            name: p.name,
                                            price: p.price
                                        })}

                                    >Add To Cart</Button>

                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        onClick={() => handleDeleteClick(p.id)}
                                    >Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

ProductTable.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            inStock: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    handleDeleteClick: PropTypes.func.isRequired,
    addToCart: PropTypes.func
}

const mapDispatchToProps = {
    addToCart
}

export default connect(null, mapDispatchToProps)(ProductTable);