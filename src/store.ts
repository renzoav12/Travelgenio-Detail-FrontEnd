import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';

import { detailReducer } from './reducers/detailReducer';

import { Detail } from './model/search';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { history } from './history';
import { RootAction } from './actions/action';

export interface RootState {
    readonly detail: Detail;
    readonly router: any;
}

const rootReducer = combineReducers<RootState>({
    detail: detailReducer,
    router: connectRouter(history),
});

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            routerMiddleware(history),
            reduxThunk as ThunkMiddleware<RootState, RootAction>
        )
    )
);
