import _ from 'lodash';
import { Reducer } from 'redux';
import { Detail } from '../model/search';
import { DetailActionTypes } from '../actions/search/detail.actionTypes';
import { DetailAction } from '../actions/search/detail.action';

const initialState: Detail = {
    search: {
        stay: {
            from: '2019-11-20',
            to: '2019-11-21'
        },
        occupancy: '2'
    },
    accommodation: {
        id: '1000',
        name: 'Faena',
        images: [{url: 'asd'}]
    },
    rooms: [],
    accommodationLoading: false,
    roomsLoading: false,
    error: null
};

export const detailReducer: Reducer<Detail, DetailAction> = (
    state = initialState, 
    action
) => {
    switch (action.type) {

        case DetailActionTypes.CONTENT_FETCH_START:
            return { ...state, loading: true };
        case DetailActionTypes.CONTENT_FETCH_FAILED:
            return { ...state, loading: false };
        case DetailActionTypes.CONTENT_FETCH_SUCCESS:
            return {...state, loading: false };
        default:
            return state;
    }
};