
import { 
    RoomActionTypes, 
    ROOM_FETCH_START,
    ROOM_FETCH_FAILED,
    ROOM_FETCH_SUCCESS,
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
                    checkIn: getState().detail.search.stay.from,
                    checkOut: getState().detail.search.stay.to,
                    accommodationId: getState().detail.search.accommodationId,
                }
            }
        );
        dispatch(action(response.data));
    } catch (e) {
        dispatch(roomsFetchFailed());
    }
    dispatch(roomsFetchSuccess());
};
