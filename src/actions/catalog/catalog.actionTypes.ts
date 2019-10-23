import { Action } from "redux";
import { AccommodationProps } from "../../components/Detail/Content/Accommodation";

export const ACCOMMODATION_FETCH_START = 'CATALOG_FETCH_START'
export const ACCOMMODATION_FETCH_SUCCESS = 'CATALOG_FETCH_SUCCESS'
export const ACCOMMODATION_FETCH_FAILED = 'CATALOG_FETCH_FAILED'
export const ACCOMMODATION_UPDATE = 'CATALOG_ACCOMMODATION_UPDATE'

export interface AccommodationFetchStartAction extends Action<typeof ACCOMMODATION_FETCH_START> {
}

export interface AccommodationFetchFailedAction extends Action<typeof ACCOMMODATION_FETCH_SUCCESS> {
}

export interface AccommodationFetchSuccessAction extends Action<typeof ACCOMMODATION_FETCH_FAILED> {
}

export interface AccommodationUpdateAction extends Action<typeof ACCOMMODATION_UPDATE> {
    readonly accommodation: AccommodationProps;
}

export type CatalogActionTypes =
    | AccommodationFetchStartAction
    | AccommodationFetchFailedAction
    | AccommodationFetchSuccessAction
    | AccommodationUpdateAction;