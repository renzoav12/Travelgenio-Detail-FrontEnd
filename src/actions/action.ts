import { DetailActionTypes } from "./detail/detail.actionTypes";
import { CatalogActionTypes } from "./accommodation/accommodation.actionTypes";
import { RoomActionTypes } from "./room/room.actionTypes";

export type RootAction = CatalogActionTypes | DetailActionTypes | RoomActionTypes;