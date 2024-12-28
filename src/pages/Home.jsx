import React, { useEffect, useState } from 'react';
import ProductsCard from '@/components/products/ProductsCard.jsx';
import { getAllProducts } from '@/services/getAllProducts.js';
import Cart from '@/pages/Cart.jsx';
import CartIcon from '@/components/products/CartIcon.jsx';
import {Link} from "react-router-dom";

function Home() {
    const [productsData, setProductsData] = useState([]);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchProductsData = async () => {
        try {
            setIsLoading(true);
            const response = await getAllProducts();
            setProductsData(response.products);
        } catch (err) {
            console.error('Error fetching products:', err);
            setError(err?.message || 'Failed to fetch products');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProductsData();
    }, []);

    if (isLoading)
        return (
            <div className='spinner-container'>
                <div className='spinner'></div>
            </div>
        );
    if (error) return <div>Error: {error}</div>;
    if (productsData.length === 0) return <div>No products available.</div>;
    return (
        <div className='font-murecho '>

            {productsData && <ProductsCard allProducts={productsData} />}
        </div>
    );
}

export default Home;
