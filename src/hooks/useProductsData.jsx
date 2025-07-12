import axios from "axios";
import { useState, useEffect } from "react";
function useProductsData() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null); // Reseting error state before fetching
                const response = await axios.get("https://dummyjson.com/products");
                //Setting error in case the error occurs
                if (response.status !== 200) {
                    setError(
                        `Error: ${response.status} - ${response.statusText}`
                    )
                }
                //Setting products response data
                setProducts(response.data.products);

            } catch (err) {
                console.error("Error fetching products:", err);
                setError(
                    err.response && err.response.data
                        ? `Error: ${err.response.status} - ${err.response.data.message}`
                        : "An unexpected error occurred"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    //Returning the data and states
    return { products, loading, error };

}
export default useProductsData;