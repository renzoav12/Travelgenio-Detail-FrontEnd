import { DetailActionTypes } from "./detail/detail.actionTypes";
import { CatalogActionTypes } from "./catalog/catalog.actionTypes";

export type RootAction = CatalogActionTypes | DetailActionTypes;