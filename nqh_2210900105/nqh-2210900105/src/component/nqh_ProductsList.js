import React from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ products }) => {
    return (
        <ul>
            {products.map((product) => (
                <li key={product.nqh_productId}>
                    {product.nqh_productName} - {product.nqh_quantity} - {product.nqh_price}
                </li>
            ))}
        </ul>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            nqh_productId: PropTypes.string.isRequired,
            nqh_productName: PropTypes.string.isRequired,
            nqh_quantity: PropTypes.number.isRequired,
            nqh_price: PropTypes.number.isRequired,
        })
    ).isRequired,
};

const nqhListProducts = ({ products }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.nqh_productId}>
                        <td>{product.nqh_productId}</td>
                        <td>{product.nqh_productName}</td>
                        <td>{product.nqh_quantity}</td>
                        <td>{product.nqh_price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

nqhListProducts.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            nqh_productId: PropTypes.string.isRequired,
            nqh_productName: PropTypes.string.isRequired,
            nqh_quantity: PropTypes.number.isRequired,
            nqh_price: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export { ProductList, nqhListProducts };
