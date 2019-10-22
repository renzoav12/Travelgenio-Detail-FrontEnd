import { createStore, combineReducers, applyMiddleware, /* compose */ } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';

import { detailReducer } from './reducers/detailReducer';
import { DetailAction } from './actions/search/detail.action';

import { Detail } from './model/search';

export interface RootState {
    readonly detail: Detail;
}

const rootReducer = combineReducers<RootState>({
    detail: detailReducer
});

export type RootActions = DetailAction;

export const store = createStore(
    rootReducer,
    //composeWithDevTools(
        applyMiddleware(reduxThunk as ThunkMiddleware<RootState, RootActions>)
    //)
);
