const initState = {
    loading: false,
    data: [],
    errorMsg: "",
};

const BeerListReducer = (state = initState, action) => {
    switch (action.type) {
        case "BEER_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case "BEER_LIST_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "unable to get beer items"
            };
        case "BEER_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: "",
            };
        default:
            return state
    }
};

export default BeerListReducer;