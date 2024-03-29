import { AccommodationProps } from "../components/Detail/Accommodation/Accommodation";
import { RoomDetail } from "../components/Detail/Availability/Room/Room";

export interface Search {
    accommodationId: string;
    stay: Stay;
    occupancy: string;
}

export interface Stay {
    from: string;
    to: string;
}

export interface Room {
    readonly id: string;
    readonly name: string;
    readonly rates: Rate[];
}

export interface Rate {
    readonly id: string;
}

export enum Status {
    EMPTY = 'Empty',
    LOADING = 'Loading',
    SUCCESS = 'Success'
}

export interface Detail {
    search: Search;
    accommodation: AccommodationProps;
    rooms: Array<RoomDetail>;
    accommodationStatus: Status;
    roomsStatus: Status;
    error: String | null;
    locale: string;
}