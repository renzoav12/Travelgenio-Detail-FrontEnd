
import { 
    RoomActionTypes, 
    ROOM_FETCH_START,
    ROOM_FETCH_FAILED,
    ROOM_FETCH_SUCCESS,
    ROOM_FETCH_EMPTY,
    ROOM_UPDATE 
} from './room.actionTypes';
import { RootState } from '../../store';
import { AxiosResponse } from 'axios';
import { RoomDetail } from '../../components/Detail/Availability/Room/Room';
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

export function roomsUpdate(rooms: RoomDetail[]) : RoomActionTypes {
    return {
        type: ROOM_UPDATE,
        rooms: rooms
    }
}

export function roomsEmpty() : RoomActionTypes {
     return {
         type: ROOM_FETCH_EMPTY
     }
}

export const thunkRoomSelect = (roomId: string) => async () => {
    window.location.replace("/hotels/checkout/" + roomId);
  };

export const roomsFetch = (action: (rooms: RoomDetail[]) => void) => async (
    dispatch,
    getState: () => RootState
) => {
    dispatch(roomsFetchStart());
    try {
        const response: AxiosResponse<Array<RoomDetail>> = await rooms.get(
            '/rooms',
            { 
                params: {
                    occupancy: getState().detail.search.occupancy,
                    locale: 'es-ES',
                    checkIn: getState().detail.search.stay.from,
                    checkOut: getState().detail.search.stay.to,
                    accommodationId: getState().detail.search.accommodationId,
                    country: 'ES',
                    language: 'es'
                }
            }
        );
        if (response.data.length > 5) {
            dispatch(action(response.data));
            dispatch(roomsFetchSuccess());
        }else {
            dispatch(roomsEmpty());
        }
    } catch (e) {
        dispatch(roomsFetchFailed());
    }  
};
