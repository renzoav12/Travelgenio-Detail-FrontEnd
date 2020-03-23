import { Reducer } from 'redux';
import { Detail } from '../model/search';
import {
    ACCOMMODATION_UPDATE,
    ACCOMMODATION_FETCH_SUCCESS,
    ACCOMMODATION_FETCH_FAILED,
    ACCOMMODATION_FETCH_START 
} from '../actions/accommodation/accommodation.actionTypes';
import { RootAction } from '../actions/action';
import { SEARCH_UPDATE_PARAMS } from '../actions/detail/detail.actionTypes';
import {
    ROOM_FETCH_START,
    ROOM_FETCH_FAILED,
    ROOM_FETCH_SUCCESS,
    ROOM_UPDATE,
    ROOM_FETCH_EMPTY
} from '../actions/room/room.actionTypes';

const initialState: Detail = {
    search: {
        accommodationId: '',
        stay: {
            from: '',
            to: ''
        },
        occupancy: ''
    },
    accommodation: {
        name: '',
        images: [],
        amenities: [],
        location: {
            address: {
                country: {
                    name: ''
                },
                state: {
                    name: ''                    
                },
                city: {
                    name: ''
                },
                street: {
                    name: '',
                    number: ''
                },
                zipCode: ''
            },
            geoPosition: {
                latitude: 0,
                longitude: 0
            }
        },
        category: {
            id: '',
            code: ''
        },
        checkInOut: {
            checkIn: {
                beginTime: '',
                endTime: ''
            },
            checkOut: {
                time: ''
            },
            instructions: ''
        },
        description: ''
    },
    rooms: [],
    accommodationLoading: true,
    roomsLoading: true,
    error: null,
    roomsOn: true,
};

export const detailReducer: Reducer<Detail, RootAction> = (
    state = initialState, 
    action
) => {
    switch (action.type) {
        case ACCOMMODATION_FETCH_START:
            return { ...state, accommodationLoading: true };
        case ACCOMMODATION_FETCH_FAILED:
            return { ...state, accommodationLoading: false };
        case ACCOMMODATION_FETCH_SUCCESS:
            return {...state, accommodationLoading: false };
        case SEARCH_UPDATE_PARAMS:
            return {...state, search: action.search};
        case ACCOMMODATION_UPDATE:
            return {...state, accommodation: action.accommodation};
        case ROOM_FETCH_START:
            return { ...state, roomsLoading: true, roomsOn: true };
        case ROOM_FETCH_FAILED:
            return { ...state, roomsLoading: false };
        case ROOM_FETCH_SUCCESS:
            return {...state, roomsLoading: false, roomsOn: true };
        case ROOM_UPDATE:
            return {...state, rooms: action.rooms};
        case ROOM_FETCH_EMPTY:
             return {...state, roomsLoading:false, roomsOn: false};
        default:
            return state;
    }
};