import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { add } from "../redux/feature/cart/cartSlice";

const ProductDetail = () => {
    const dispatch = useDispatch();

    const { id } = useParams();

    const [product, setProduct] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            //setLoading(true);

            const response = await fetch(
                `https://fakestoreapi.com/products/${id}`
            );
            setProduct(await response.json());
            //setLoading(false);
        };
        getProduct();
    });

    // const Loading = () => {
    //     return (
    //         <>
    //             <h1>Loading.......</h1>
    //         </>
    //     );
    // };
    const handleAdd = (product) => {
        dispatch(add(product));
    };

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img
                        src={product.image}
                        alt={product.title}
                        height="400px"
                        width="400px"
                    />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                        $ {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button
                        className="btn btn-dark px-4 py-2"
                        onClick={() => handleAdd(product)}
                    >
                        Add to Cart
                    </button>

                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to Cart
                    </NavLink>
                </div>
            </>
        );
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    <ShowProduct />
                    {/* {loading ? <Loading /> : <ShowProduct />} */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
