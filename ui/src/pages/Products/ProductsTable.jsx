import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

const ProductTable = (props) => {
    const {products, handleDeleteClick} = props;
    return (
        <TableContainer>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell align="center">Product name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">In Stock</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Actions</TableCell>
                        <TableCell align="center"/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map(p => (
                            <TableRow key={p.id}>
                                <TableCell align="center">{p.id}</TableCell>
                                <TableCell align="center">{p.name}</TableCell>
                                <TableCell align="center">{p.description}</TableCell>
                                <TableCell align="center">{p.inStock}</TableCell>
                                <TableCell align="center">{p.price}</TableCell>
                                <TableCell align="center">
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        size={"small"}
                                        onClick={() => handleDeleteClick(p.id)}
                                    >Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
        // <table className="table">
        //     <thead className="thead-dark">
        //     <tr>
        //         <th scope="col">#</th>
        //         <th scope="col">Name</th>
        //         <th scope="col">Description</th>
        //         <th scope="col">Price</th>
        //         <th scope="col">In Stock</th>
        //         <th scope="col">Actions</th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     {
        //         products.map(p =>
        //             (
        //                 <tr key={p.id}>
        //                     <th scope="row">{p.id}</th>
        //                     <td>{p.name}</td>
        //                     <td>{p.description}</td>
        //                     <td>{p.price}</td>
        //                     <td>{p.inStock}</td>
        //                     <th>
        //                         <Button variant="outlined" color="secondary" onClick={() => handleDeleteClick(p.id)}>Delete</Button>
        //                         {/*<button className="btn btn-danger" onClick={() => handleDeleteClick(p.id)}>Delete product</button>*/}
        //                     </th>
        //                 </tr>
        //             )
        //         )
        //     }
        //     </tbody>
        // </table>
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
    handleDeleteClick: PropTypes.func.isRequired
}

export default ProductTable;