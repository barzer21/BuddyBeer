import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetBeerList, addToFavorite } from '../actions/beerActions'
import _ from "lodash";
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";


const BeerList = () => {

    const dispatch = useDispatch();
    const beerList = useSelector(state => state.beerList);
    const [foodSearch, setFood] = useState("");

    useEffect(() => {//reload data when searching food pairing
        FetchData(1);  
    }, [foodSearch]);

    const FetchData = (page = 1) => {
        dispatch(GetBeerList(page));
    }

    const addTofavorite = (beer) => {
        dispatch(addToFavorite(beer));
    };

    const includeFood = (foodPairingArr) => {//check if foodPairingArr[] includes the searched food
        const iter = foodPairingArr.filter((item) => item.toLowerCase().includes(foodSearch.toLowerCase()));
        if (!_.isEmpty(iter)) {
            return true;
        }
        return false;
    };


    const ShowBeerData = () => {
        if (!_.isEmpty(beerList.data)) {//check if food is filterd
            const filter_arr = beerList.data.filter(item =>
                includeFood(item.food_pairing) == true
            );
            return (  
                <div className="product-container" >
                    {filter_arr.map(item => {
                        return (//beer cards
                            <div className="product-box">
                                <h4>{item.name}</h4>
                                <Link to={`/beer/${item.id}`} >  
                                    <div className="product-img">
                                        <img src={item.image_url} Link to={`/beer/${item.id}`} />
                                    </div>
                                </Link>
                                <button type="button" onClick={() => addTofavorite(item)}>
                                    Add to Favorites ★
                                 </button>
                            </div>             
                        )
                    })}
                </div>
            )
        }
        if (beerList.loading) {
            return <p>Loading...</p>
        }

        if (beerList.errorMsg !== "") {
            return <p>{beerList.errorMsg}</p>
        }

        return <p>Unable to get data</p>
    };

    return (
        <div className="container">
            <div className="product-container">
                <form
                    id="searchbeer"
                    onSubmit={e => {
                        e.preventDefault();
                        console.log("submit", e.target.input.value)
                        setFood(e.target.input.value);
                    }}
                >
                    Food Pairing <input id="input" form="searchbeer" type="text" defaultValue ="" />
                    <input type='Submit' defaultValue="search" />
                </form>
            </div>

            {ShowBeerData()}
            {(!_.isEmpty(beerList.data)) && (
                <ReactPaginate 
                    pageCount={8}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={(data) => FetchData(data.selected + 1)}
                    containerClassName=" pagination"
                />

            )}
           
        </div>
    )
};

export default BeerList;
