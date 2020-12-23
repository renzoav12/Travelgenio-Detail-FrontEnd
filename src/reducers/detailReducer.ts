import { Reducer } from 'redux';
import { Detail, Status } from '../model/search';
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
    ROOM_UPDATE
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
        description: '',
        spokenLanguages: []
    },
    rooms: [],
    accommodationStatus: Status.LOADING,
    roomsStatus: Status.LOADING,
    error: null,
    locale: ''
};

export const detailReducer: Reducer<Detail, RootAction> = (
    state = initialState, 
    action
) => {
    switch (action.type) {
        case ACCOMMODATION_FETCH_START:
            return { ...state, accommodationStatus: Status.LOADING};
        case ACCOMMODATION_FETCH_FAILED:
            return { ...state, accommodationStatus: Status.EMPTY};
        case ACCOMMODATION_FETCH_SUCCESS:
            return {...state, accommodationStatus: Status.SUCCESS};
        case SEARCH_UPDATE_PARAMS:
            return {...state, search: action.search};
        case ACCOMMODATION_UPDATE:
            return {...state, accommodation: action.accommodation};
        case ROOM_FETCH_START:
            return { ...state, roomsStatus: Status.LOADING};
        case ROOM_FETCH_FAILED:
            return { ...state, roomsStatus: Status.EMPTY};
        case ROOM_FETCH_SUCCESS:
            return {...state, roomsStatus: Status.SUCCESS};
        case ROOM_UPDATE:
            return {...state, rooms: action.rooms};
        default:
            return state;
    }
};