import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import axios from "axios";

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        setLoading(true);
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("erooorrrrr");
            });
        console.log(response.data);
        setData(response.data);
        setFilter(response.data);
        setLoading(false);
    };
    useEffect(() => {
        getProducts();
    }, []);

    // let componentMounted = true;

    // useEffect(() => {
    //     const getProducts = async () => {
    //         setLoading(true);

    //         const response = await fetch("https://fakestoreapi.com/products");

    //         if (componentMounted) {
    //             setData(await response.clone().json());
    //             setFilter(await response.json());
    //             setLoading(false);
    //             // console.log(filter);
    //         }
    //         return () => {
    //             componentMounted = false;
    //         };
    //     };
    //     getProducts();
    // });

    const Loading = () => {
        return <h1>Loading....</h1>;
    };

    const filterProducts = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5 ">
                    <button
                        className="btn btn-outline-dark me-3 fs-5"
                        onClick={() => setFilter(data)}
                    >
                        All
                    </button>
                    <button
                        className="btn btn-outline-dark me-3 fs-5"
                        onClick={() => filterProducts("men's clothing")}
                    >
                        Men's Clothing
                    </button>

                    <button
                        className="btn btn-outline-dark me-3 fs-5"
                        onClick={() => filterProducts("women's clothing")}
                    >
                        Women's Clothing
                    </button>
                    <button
                        className="btn btn-outline-dark me-3 fs-5"
                        onClick={() => filterProducts("jewelery")}
                    >
                        Jewellery
                    </button>
                    <button
                        className="btn btn-outline-dark me-3 fs-5"
                        onClick={() => filterProducts("electronics")}
                    >
                        Electronic
                    </button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4 key={product.id}">
                                    <img
                                        src={product.image}
                                        className="card-img-top"
                                        alt={product.title}
                                        height="270px"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">
                                            {product.title}
                                        </h5>
                                        <p className="card-text lead fw-bolder">
                                            ${product.price}
                                        </p>
                                        <NavLink
                                            to={`/products/${product.id}`}
                                            className="btn btn-outline-dark"
                                        >
                                            Buy Now
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
        );
    };

    return (
        <div>
            <div className="container  py-3 my-3">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1 className="display-6 fw-bolder text-center">
                            Latest Products
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;
