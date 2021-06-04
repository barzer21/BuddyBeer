import { combineReducers } from 'redux';
import BeerListReducer from './BeerListReducer';
import favoriteReducer from './FavoriteReducer';
import BeerItemReducer from './BeerItemReducer';


const RootReducer = combineReducers({
    beerList: BeerListReducer,
    favorite: favoriteReducer,
    BeerItem: BeerItemReducer,
});
export default RootReducer;