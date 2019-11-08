
import { 
    RoomActionTypes, 
    ROOM_FETCH_START,
    ROOM_FETCH_FAILED,
    ROOM_FETCH_SUCCESS,
    ROOM_UPDATE 
} from './room.actionTypes';
import { RootState } from '../../store';
import { AxiosResponse } from 'axios';
import { RoomProps } from '../../components/Detail/Availability/Room/Room';
import rooms from '../../api/rooms/rooms';

export function roomsFetchStart() : RoomActionTypes {
    return {
        type: ROOM_FETCH_START
    }
}

export function roomsFetchSuccess() : RoomActionTypes {
    return {
        type: ROOM_FETCH_SUCCESS
    }
}

export function roomsFetchFailed() : RoomActionTypes {
    return {
        type: ROOM_FETCH_FAILED
    }
}

export function roomsUpdate(rooms: RoomProps[]) : RoomActionTypes {
    return {
        type: ROOM_UPDATE,
        rooms: rooms
    }
}

export const roomsFetch = (action: (rooms: RoomProps[]) => void) => async (
    dispatch,
    getState: () => RootState
) => {
    dispatch(roomsFetchStart());
    console.log(getState().detail.search);
    try {
        const response: AxiosResponse<Array<RoomProps>> = await rooms.get(
            '/rooms',
            { 
                params: {
                    occupancy: getState().detail.search.occupancy,
                    locale: 'en-US',
                    checkIn: getState().detail.search.stay.from,
                    checkOut: getState().detail.search.stay.to,
                    accommodationId: getState().detail.search.accommodationId,
                    country: 'US',
                    language: 'en'
                }
            }
        );
        dispatch(action(response.data));
    } catch (e) {
        dispatch(roomsFetchFailed());
    }
    dispatch(roomsFetchSuccess());
};
