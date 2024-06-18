import React from 'react'
import { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MetaData from '../layout/MetaData';
import "./Search.css"

const Search = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    //trim is used to remove unwanted spaces in search 
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        navigate(keyword.trim() ? `/products/${keyword}` : "/products");
    };

    return (
        <Fragment>
        <MetaData title = "Search A Product -- E-COMMERCE" />
        <form className="searchBox" onSubmit={searchSubmitHandler}>
            <input type="text" placeholder="Search a Product..." 
             onChange={(e) => setKeyword(e.target.value)} />
            <input type = "submit" value="Search" />
        </form>

        </Fragment>
    )
}

export default Search
