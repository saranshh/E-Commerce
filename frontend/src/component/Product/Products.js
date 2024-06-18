import React from 'react'
import "./Products.css"
import ProductCard from '../Home/ProductCard';
import Loader from '../layout/Loader/Loader';
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Pagination from "react-js-pagination";
import { Typography } from '@mui/material';
import Slider from "@material-ui/core/Slider";
import { useAlert } from 'react-alert';
import MetaData from '../layout/MetaData';

const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "Mobile",
  ];

const Products = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const alert = useAlert();

    //To change the page no.
    const [currentPage, setCurrentPage] = useState(1);
    //To set the price
    const [price, setPrice] = useState([0, 9999]);
    //To set the category
    const [category, setCategory] = useState("");
    //To set the rating
    const [ratings, setRatings] = useState(0);

    const {products, loading, error, productsCount, resultPerPage, filteredProductsCount} = 
    useSelector(state => state.products
    );

    const keyword = params.keyword;

    //To set the Current Page No.
    const setCurrentPageNo = (e) => {
        setCurrentPage(e)
    }

    // To set the price in slider
    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    }

    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct(keyword, currentPage, price, category, ratings));
    }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

    let count = filteredProductsCount;

    return <Fragment>
        {loading ? <Loader /> : 
        <Fragment>
        <MetaData title = "PRODUCTS -- E-COMMERCE" />
        <h2 className="productsHeading">Products</h2>

        <div className="products">
            {products && 
            products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
 
       <div className="filterBox">
        
        {/* To filter item using price */}
        <Typography className="sideItems">Price</Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={9999}
            />

            {/* To filter item using category */}
            <Typography className="sideItems">Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>

            {/* To filter item using rating */}
            <fieldset>
              <Typography className="sideItems" component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
        </div>

        {resultPerPage < count && (
        <div className="paginationBox">
            <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
            />
        </div>
        )}
        </Fragment>}
    </Fragment>
};

export default Products
