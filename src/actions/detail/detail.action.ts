
import { RootState } from '../../store';
import { ThunkAction } from 'redux-thunk';
import { Search } from '../../model/search';
import { DetailActionTypes, SEARCH_UPDATE_PARAMS } from './detail.actionTypes';
import { accommodationFetch, accommodationUpdate } from '../catalog/catalog.action';
import { RootAction } from '../action';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;

export function searchUpdateParams(search: Search) : DetailActionTypes {
    return {
        type: SEARCH_UPDATE_PARAMS,
        search
    }
}

export const thunkSearchUpdate = (search: Search): ThunkResult<void> => async (
    dispatch,
    getState: () => RootState
) => {
    dispatch(searchUpdateParams(search));
    dispatch(accommodationFetch(accommodationUpdate));
};