
export interface Search {
    stay: Stay;
    occupancy: string;
}

export interface Stay {
    from: string;
    to: string;
}

export interface Accommodation {
    readonly id: string;
    readonly name: string;
    readonly images: Image[];
}

export interface Image {
    readonly url: string
}

export interface Room {
    readonly id: string;
    readonly name: string;
    readonly images: Image[];
    readonly rates: Rate[];
}

export interface Rate {
    readonly id: string;
}

export interface Detail {
    search: Search;
    accommodation: Accommodation;
    rooms: Room[];
    accommodationLoading: boolean;
    roomsLoading: boolean;
    error: String | null
}