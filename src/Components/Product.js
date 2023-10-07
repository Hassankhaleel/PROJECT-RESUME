import React, { useEffect, useState } from 'react'

import '../App.css'
export default function Product() {
    const [Products, setProducts] = useState([])
    useEffect(() => {
        const FetchProduct = async () => {
            await fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(json => setProducts(json))
        }
        FetchProduct()
    }
        , [])
    return (
        <>

            <div className='container '>
                <div className='row'>
                    {
                        Products.map((value, index) => (
                            <div className='col-2  my-3 '>
                                <div class="card w-100 h-100" >
                                    <img src={value.image} class="card-img-top w-75 " alt="..." />
                                    <div class="my-5">
                                        <h5 class="fs-5 fw-bolder">{value.title}</h5>
                                        <h5 class="fs-5 fw-lighter"> PRICE:{value.price}</h5>
                                        <a href="#" class="btn btn-primary mt-5">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
