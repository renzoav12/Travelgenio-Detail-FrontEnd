import { SearchBoxState } from '@hotels/search-box';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store';
import { RootAction } from '../action';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;



export const thunkSearchBoxChange = (searchBoxState: SearchBoxState): ThunkResult<void> => async (
  dispatch
) => {
    const occupancy: string = searchBoxState.occupancy.rooms.map(room => room.adults + ((room.childrenAges.length === 0) ? "" : "-") +room.childrenAges.join("-")).join("!");

    let url: string;

    if(searchBoxState.location.type === "ACCOMMODATION") {
      url = `/hotels/detail/Hotel-${searchBoxState.location.code}/${searchBoxState.stay.from.toISOString().substring(0, 10)}/${searchBoxState.stay.to.toISOString().substring(0, 10)}/${occupancy}/es`;
    } else { 
      url = `/hotels/search/${searchBoxState.location.type}/${searchBoxState.location.code}/${searchBoxState.stay.from.toISOString().substring(0, 10)}/${searchBoxState.stay.to.toISOString().substring(0, 10)}/${occupancy}/es`;
    }

    window.location.href = url;
};

