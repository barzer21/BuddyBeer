import axios from 'axios';


export const GetBeerList = (page) => async dispatch => {
    try {

        dispatch({//loadind
            type: "BEER_LIST_LOADING"
        });

        const perPge = 12;
        const res = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPge}`)

        dispatch({//seccess pull the data from API
            type: "BEER_LIST_SUCCESS",
            payload: res.data
        })

    } catch (e) {//failed
        dispatch({
            type: "BEER_LIST_FAIL",
        })
    }
};

export const GetBeer = (beerId) => async dispatch => {
    try {
        dispatch({
            type: "BEER_MULTIPLE_LOADING"
        });

        const res = await axios.get(`https://api.punkapi.com/v2/beers/${beerId}`);

        dispatch({
            type: "BEER_MULTIPLE_SUCCESS",
            payload: res.data,
            beerID: beerId
        })

    } catch (e) {
        dispatch({
            type: "BEER_MULTIPLE_FAIL",
        })
    }
};


export const addToFavorite = (favorite_item)  => ({
  
        type: 'ADD_TO_FAVORITE',
        payload: {
                    favorite_item
        }

});

export const removeFromFavorite = (favorite_item)  => ({
    type: 'REMOVE_FROM_FAVORITE',
    payload: {
        favorite_item
    }

});

export const removeAllFavorite = ()  => ({
    type: 'REMOVE_ALL_FAVORITE'

});

export const changeItemRank = (item, rank)  => ({
    type: 'ADD_RANK',
    payload: {
        item,
        rank
    }
});




  