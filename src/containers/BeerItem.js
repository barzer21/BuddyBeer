import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetBeer } from "../actions/beerActions";
import _ from "lodash";

const BeerItem = (props) => {
    const beerid = props.match.params.beer;
    const dispatch = useDispatch();
    const beerState = useSelector(state => state.BeerItem);
    console.log("props: ", props);

    useEffect(() => {
        dispatch(GetBeer(beerid))
    }, []);

    console.log("reduce ");

    const ShowData = () => {
        if (!_.isEmpty(beerState.data[beerid])) {
            const beerData = beerState.data[beerid];
            return (
                <div className="data-container" >
                    <div className ="product-container">
                        <div >
                            <h3>{beerData.name}</h3>
                            <h4>{beerData.tagline}</h4>
                                <div className="product-img">
                                <img src={beerData.image_url} className="w-25 float-left mr-4" />
                                </div>
                        </div>
                        <div className="data-container">
                            <h3>Food pairing:</h3>
                     
                            {beerData.food_pairing.map(item => {
                                return <p>{item}</p>
                            })}
                            </div>
                    </div>
                        <h3>Description: </h3>
                        <p>{beerData.description}</p>
                        
                       
                </div>)

            if (beerState.loading) {
                return <p>Loading...</p>
            }

            if (beerState.errorMsg !== "") {
                return <p>{beerState.errorMsg}</p>
            }

            return <p>error getting beer</p>
        }
    }
    return (
        <div >
            {ShowData()}
        </div>
    )

};

    export default BeerItem;