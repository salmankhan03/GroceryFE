import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategorySlider from './CategoryList';
import ProductList from './ProductList';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import SearchBar from "./SearchProduct";

function ProductCategory() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCategoryName, setSelectedCategoryName] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    console.log('categories-------------', categories)

    useEffect(() => {
        fetchProducts();
    }, [selectedCategory, searchTerm]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await axios.post('https://backend.khanmarket.ca/api/product/list?pageSize=10', {
                category: selectedCategory,
                title: searchTerm
            });
            setProducts(response.data.list.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        setLoading(false);
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.post('https://backend.khanmarket.ca/api/product-category/list?pageSize=10');
            const allCategory = { id: '', name: 'All' };
            setCategories([allCategory, ...response.data.list]);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const handleCategorySelect = (category, name) => {
        setSelectedCategory(category);
        setSelectedCategoryName(name);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };


    return (
        <div className="container">
            <SearchBar onSearch={handleSearch} />
            <CategorySlider categories={categories} onSelectCategory={handleCategorySelect} selectedCategory={selectedCategory}/>
            <h2>Products in {selectedCategoryName || 'All Categories'}</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    );
}

export default ProductCategory;
