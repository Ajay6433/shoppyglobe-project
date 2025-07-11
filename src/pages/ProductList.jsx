import React from 'react'
import useProductsData from '../hooks/useProductsData'
import ProductItem from '../components/ProductItem';
import Spinner from '../components/Spinner';

function ProductList() {
    const { products, loading, error } = useProductsData();

    return (
        <div className="container mx-auto px-4 py-8">
            {loading && <Spinner/>}
            {error && (
                <div className="text-center text-red-500 text-lg">
                    <img src='/noData.jpg' alt="No Data" className="mx-auto mb-4 w-84 h-84" />
                    <p className="font-semibold text-xl mt-2">Failed to fetch products</p>
                </div>
            )}
            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products && products.map(product => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200 p-4"
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProductList