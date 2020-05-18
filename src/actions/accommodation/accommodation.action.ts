
import { 
    CatalogActionTypes, 
    ACCOMMODATION_FETCH_START,
    ACCOMMODATION_FETCH_FAILED,
    ACCOMMODATION_FETCH_SUCCESS,
    ACCOMMODATION_UPDATE 
} from './accommodation.actionTypes';
import { RootState } from '../../store';
import { push } from 'connected-react-router';
import { AccommodationProps } from '../../components/Detail/Accommodation/Accommodation';
import { AxiosResponse } from 'axios';
import accommodation from '../../api/accommodation/accommodation';

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
    
    try {
        const response: AxiosResponse<AccommodationProps> = await accommodation.get(
            '/accommodations/' + getState().detail.search.accommodationId,
            { 
                params: {
                    locale: 'es-ES'
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

