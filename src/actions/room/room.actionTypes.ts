import { Action } from "redux";
import { RoomDetail } from "../../components/Detail/Availability/Room/Room";

export const ROOM_FETCH_START = 'ROOM_FETCH_START'
export const ROOM_FETCH_SUCCESS = 'ROOM_FETCH_SUCCESS'
export const ROOM_FETCH_FAILED = 'ROOM_FETCH_FAILED'
export const ROOM_UPDATE = 'ROOM_UPDATE'

export interface RoomFetchStartAction extends Action<typeof ROOM_FETCH_START> {
}

export interface RoomFetchFailedAction extends Action<typeof ROOM_FETCH_SUCCESS> {
}

export interface RoomFetchSuccessAction extends Action<typeof ROOM_FETCH_FAILED> {
}

export interface RoomUpdateAction extends Action<typeof ROOM_UPDATE> {
    readonly rooms: Array<RoomDetail>;
}

export type RoomActionTypes =
    | RoomFetchStartAction
    | RoomFetchFailedAction
    | RoomFetchSuccessAction
    | RoomUpdateAction;