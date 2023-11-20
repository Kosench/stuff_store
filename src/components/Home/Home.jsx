import React from 'react';
import Poster from "../Poster/Poster";
import {useSelector} from "react-redux";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";

const Home = () => {
    const {products, categories} = useSelector((state) => state);
    const trendingProducts = products.list.slice(1, 6);
    return (
        <>
            <Poster>

            </Poster>
            <Products products={trendingProducts} amount={6} title="Trending"/>
            <Categories products={categories.list} amount={5} title="Categories"/>
        </>
    );
};

export default Home;