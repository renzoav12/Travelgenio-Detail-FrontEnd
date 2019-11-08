import _ from 'lodash';
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
    ROOM_UPDATE
} from '../actions/room/room.actionTypes';

const initialState: Detail = {
    search: {
        accommodationId: '10344566',
        stay: {
            from: '2019-11-20',
            to: '2019-11-21'
        },
        occupancy: '2'
    },
    accommodation: {
        name: 'Faena',
        images: [
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/946c5610_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/72a2a331_z.jpg"},
            {"url": "https://i.travelapi.com/hotels/1000000/570000/565000/564911/9aea1d21_z.jpg"}
        ],
        amenities: new Array(),
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
            code: '3'
        },
        checkInOut: {
            checkIn: {
                beginTime: '14:00',
                endTime: '20:00'
            },
            checkOut: {
                time: '10:00'
            },
            instructions: ''
        },
        description: ''
    },
    rooms: [],
    accommodationLoading: false,
    roomsLoading: false,
    error: null
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
            return { ...state, roomsLoading: true };
        case ROOM_FETCH_FAILED:
            return { ...state, roomsLoading: false };
        case ROOM_FETCH_SUCCESS:
            return {...state, roomsLoading: false };
        case ROOM_UPDATE:
            return {...state, rooms: action.rooms};
        default:
            return state;
    }
};