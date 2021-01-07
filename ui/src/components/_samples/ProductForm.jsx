import {useState} from "react";
import PropsState from "../PropsState";

export default () => {
    const [product, setProduct] = useState({name: "", inStock: ""});
    const [errors, setErrors] = useState({});

    const setProductName = (e) => {
        setErrors({...errors, name: ""})
        setProduct(prevProduct => (
            {
                ...prevProduct,
                name: e.target.value
            }));
    }

    const setProductInStock = (e) => {
        setErrors({...errors, inStock: ""})
        setProduct({
            ...product,
            inStock: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting data... ", product);
    }

    const validateName = ({target: {value}}) => {
        if (!value) {
            setErrors(prevErrors => ({...prevErrors, name: "Produkto 'Pavadinimas' yra privalomas"}));
        }
    }

    const validateInStock = (e) => {
        if (e.target.value === '' || e.target.value === undefined) {
            setErrors({...errors, inStock: "Produkto 'Kiekis' yra privalomas"});
            return;
        }

        if(/^-?\d+$/.test(e.target.value)) {
            setErrors({...errors, inStock: "Produkto 'Kiekis' privalo buti sveikas skaicius"});
        }

    }


    return (
        <>
            <PropsState product={product} errors={errors}/>
            <form className="mx-4" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Please enter product name"
                        name="name"
                        value={product.name}
                        onChange={setProductName}
                        onBlur={validateName}
                    />
                    <small className="form-text text-danger">{errors.name}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="inStock">In Stock:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inStock"
                        placeholder="Please enter product remaining quantity"
                        name="inStock"
                        value={product.inStock}
                        onChange={setProductInStock}
                        onBlur={validateInStock}
                    />
                    <small className="form-text text-danger">{errors.inStock}</small>
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </>
    )
}