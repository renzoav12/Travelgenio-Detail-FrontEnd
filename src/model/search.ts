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

export interface Detail {
    search: Search;
    accommodation: AccommodationProps;
    rooms: Array<RoomDetail>;
    accommodationLoading: boolean;
    roomsLoading: boolean;
    error: String | null;
    roomsOn: boolean;
}