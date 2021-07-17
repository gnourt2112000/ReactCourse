import {createStore, combineReducers,applyMiddleware} from 'redux';
import { Comments } from './comments';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';
import { createForms} from 'react-redux-form';

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers ({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({                        //feedback: modelReducer('feedback',InitialFeedback),
                feedback:InitialFeedback            // forms:formReducer('')
            })
        }),
        applyMiddleware(thunk,logger)
    )
    return store;
}