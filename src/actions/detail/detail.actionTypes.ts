import { Action } from "redux";
import { Search } from "../../model/search";

export const SEARCH_UPDATE_PARAMS = 'SEARCH_UPDATE_PARAMS'
export const SEARCH_UPDATE = 'SEARCH_UPDATE'

export interface SearchUpdateParamsAction extends Action<typeof SEARCH_UPDATE_PARAMS> {
    search: Search
}

export interface SearchUpdateAction extends Action<typeof SEARCH_UPDATE> {
}

export type DetailActionTypes = SearchUpdateParamsAction | SearchUpdateAction;

