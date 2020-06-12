import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { detailReducer } from './reducers/detailReducer';
import { searchSuggestionReducer, SearchSuggestion } from './reducers/searchSuggestionReducer';
import { Detail } from './model/search';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { history } from './history';
import { RootAction } from './actions/action';
import { i18nState } from 'redux-i18n';
import { localeReducer, LocaleState } from './reducers/localeReducer';

export interface RootState {
    readonly detail: Detail;
    readonly searchSuggestion: SearchSuggestion;
    readonly locale: LocaleState;
    readonly router: any;
    readonly i18nState: any;
}

const rootReducer = combineReducers<RootState>({
    detail: detailReducer,
    searchSuggestion: searchSuggestionReducer,
    locale: localeReducer,
    router: connectRouter(history),
    i18nState: i18nState
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
