import React from 'react';
import Poster from "../Poster/Poster";
import {useSelector} from "react-redux";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";

const Home = () => {
    const {products, categories} = useSelector((state) => state);
    return (
        <>
            <Poster>

            </Poster>
            <Products products={products.list} amount={5} title="Trending"/>
            <Categories products={categories.list} amount={5} title="Categories"/>
        </>
    );
};

export default Home;