import update from 'react-addons-update';

const FavoriteReducer = (state = [], action) => {

    switch (action.type) {
        case "ADD_TO_FAVORITE":

            let itemInCart = state.find(
                (item) => item[0].name === action.payload.favorite_item.name
            );

            if (!itemInCart) {
                return [
                    ...state,
                    [action.payload.favorite_item, 0]
                ];
            }
            else return state;

        case "REMOVE_FROM_FAVORITE":
            return state.filter((item) => item[0].name !== action.payload.favorite_item[0].name)

        case "REMOVE_ALL_FAVORITE":
            return [];

        case "ADD_RANK":

            let oldItem = state.filter((item) => item[0].name === action.payload.item[0].name);
            let index = state.indexOf(oldItem[0]);
            let updateItem = [action.payload.item[0], action.payload.rank]
            console.log("updateItem: ", updateItem);
            return [//change item in faivorites the runk
                ...state.slice(0, index),
               updateItem,
                ...state.slice(index + 1)

            ];
            


        default:
            return state;
    }

};
export default FavoriteReducer;


