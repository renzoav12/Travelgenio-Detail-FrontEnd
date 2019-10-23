
import { AccommodationFetchStartAction, AccommodationFetchFailedAction, AccommodationFetchSuccessAction, AccommodationUpdateAction, ACCOMMODATION_FETCH_START, CatalogActionTypes, ACCOMMODATION_FETCH_FAILED, ACCOMMODATION_FETCH_SUCCESS, ACCOMMODATION_UPDATE } from './catalog.actionTypes';
import { RootState } from '../../store';
import { push, getSearch } from 'connected-react-router';
import { AccommodationProps } from '../../components/Detail/Content/Accommodation';
import { AxiosResponse } from 'axios';
import accommodation from '../../api/catalog/accommodation';

export function accommodationFetchStart() : CatalogActionTypes {
    return {
        type: ACCOMMODATION_FETCH_START
    }
}

export function accommodationFetchSuccess() : CatalogActionTypes {
    return {
        type: ACCOMMODATION_FETCH_SUCCESS
    }
}

export function accommodationFetchFailed() : CatalogActionTypes {
    return {
        type: ACCOMMODATION_FETCH_FAILED
    }
}

export function accommodationUpdate(accommodation: AccommodationProps) : CatalogActionTypes {
    return {
        type: ACCOMMODATION_UPDATE,
        accommodation: accommodation
    }
}

export const accommodationFetch = (action: (accommodation: AccommodationProps) => void) => async (
    dispatch,
    getState: () => RootState
) => {
    dispatch(accommodationFetchStart());
    console.log(getState().detail.search);
    try {
        const response: AxiosResponse<AccommodationProps> = await accommodation.get(
            '/accommodation/' + getState().detail.search.accommodationId,
            { 
                params: {
                    locale: 'en-US'
                }
            }
        );
        dispatch(action(response.data));
    } catch (e) {
        dispatch(accommodationFetchFailed());
    }
    dispatch(accommodationFetchSuccess());
};

export const pepe = () => async (
    dispatch: (action: any) => void,
    getState: () => RootState
) => {
    dispatch(push("/Hotel%20Hilton-xxx/2019-11-15/2019-11-24/2"));
};

