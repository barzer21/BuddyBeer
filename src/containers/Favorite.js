
import { useDispatch, useSelector } from 'react-redux';
import { changeItemRank, removeFromFavorite, removeAllFavorite} from '../actions/beerActions'
import _ from "lodash";
import { Link } from 'react-router-dom';
import Rating from "@material-ui/lab/Rating";
import 'react-confirm-alert/src/react-confirm-alert.css'; 



const Favorite = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(state => state.favorite);
    

    const remove = (item) => {
        if (window.confirm("Do you sure you want to remove this beer?")) {
            dispatch(removeFromFavorite(item));
        }
    }

    const removeAll = () => {
        if (window.confirm("Do you sure you want to remove all beers?")) {
            dispatch(removeAllFavorite());
        }
    }

    const changeRank = (item, nr) => {
        dispatch(changeItemRank(item, nr));
    }

    const ShowfavoriteData = () => {
        if (!_.isEmpty(favorite)) {
            return (
                <div className="row">
                    <div className="product-container">
                    <button onClick={() => removeAll()}>
                            Remove All
                        </button>
                    </div>
                    <div className="product-container" >
                        {favorite.map(item => {//favorites[1] = rank
                            return (
                                <div key={item[0].id}  className= "product-box">
                                    <h4>{item[0].name}</h4>
                                    <div>
                                        <Rating
                                                key={item[0].id}
                                                name={item[0].name}
                                                value={item[1]}
                                                precision={1}
                                                onChange={(event, newValue) => {
                                                    changeRank(item, newValue);
                                                }}
                                         />
                                    </div>
                                    <Link to={`/beer/${item[0].id}`} >
                                        <div className="product-img">
                                            <img src={item[0].image_url} />
                                        </div>
                                    </Link>
                                    <button onClick={() => remove(item)}>                        
                                        Remove from Favorites
                                    </button>
                                </div>
                        )
                    })}
                    </div>
                </div>

            )
        }
        else return <p></p>
    };

    return (
        <div className="container" >
            {ShowfavoriteData()}
        </div>
    )
    
};

export default Favorite;
