import React, { useState, useEffect } from 'react'

function Product() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);

            }
            return () => {
                componentMounted = false;

            }

        }

        getProducts();

    }, []);

    const Loading = () => {
        return (
            <>
                Loading......
            </>
        )
    }
    const ShowProducts = () => {

        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-ouline-dark">All</button>
                    <button className="btn btn-ouline-dark me-2">Men's Clothing</button>
                    <button className="btn btn-ouline-dark me-2">Women's Clothing</button>
                    <button className="btn btn-ouline-dark me-2">Jewlery </button>
                    <button className="btn btn-ouline-dark me-2">Electronic   </button>
                </div>
                {filter.map((product) => {
                    return (
                        
                            
                                <div className="col-md-3">
                                    <div class="card h-100 text-center p-4 "key={product.id} >
                                        <img src={product.image} class="card-img-top" alt={product.title} />
                                        <div class="card-body">
                                            <h5 class="card-title">{product.title}</h5>
                                            <p class="card-text">${product.price}</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                        

                    )
                })}
            </>
        );
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row ">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bold text-center'>Latest Products</h1>
                        <hr></hr>
                    </div>
                </div>
                <div className="row justify-content-center"></div>
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    )
}

export default Product