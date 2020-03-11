import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { detailReducer } from './reducers/detailReducer';
import { searchSuggestionReducer, SearchSuggestion } from './reducers/searchSuggestionReducer';
import { Detail } from './model/search';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { history } from './history';
import { RootAction } from './actions/action';

export interface RootState {
    readonly detail: Detail;
    readonly searchSuggestion: SearchSuggestion;
    readonly router: any;
}

const rootReducer = combineReducers<RootState>({
    detail: detailReducer,
    searchSuggestion: searchSuggestionReducer,
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
