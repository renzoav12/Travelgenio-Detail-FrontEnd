import { AccommodationProps } from "../components/Detail/Content/Accommodation";

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
    rooms: Room[];
    accommodationLoading: boolean;
    roomsLoading: boolean;
    error: String | null
}