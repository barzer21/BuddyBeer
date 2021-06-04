import { act } from "react-dom/test-utils";

const initState = {
    loading: false,
    data: {},
    errorMsg: "",
};

const BeerItemReducer = (state = initState, action) => {
    switch (action.type) {
        case "BEER_MULTIPLE_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };

        case "BEER_MULTIPLE_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "unable to get beer"
            };

        case "BEER_MULTIPLE_SUCCESS":
            return {
                ...state,
                loading: false,
                data: {
                    ...state.data,
                    [action.beerID]: action.payload[0]
                },
                errorMsg: "",
            };
        default:
            return state
    }
};

export default BeerItemReducer;