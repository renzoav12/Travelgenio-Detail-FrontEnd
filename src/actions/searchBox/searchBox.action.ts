import { SearchBoxState } from '@hotels/search-box';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store';
import { RootAction } from '../action';
import { serializeOccupancy } from '../../components/OccupancyDistribution/OccupancyDistribution';
import { serializeDate } from '../../utils/stay';

export type ThunkResult<R> = ThunkAction<R, RootState, undefined, RootAction>;

export const thunkSearchBoxChange = (searchBoxState: SearchBoxState): ThunkResult<void> => async (
  dispatch
) => {
    const occupancy: string = serializeOccupancy(searchBoxState.occupancy);
    const from: string = serializeDate(searchBoxState.stay.from);
    const to: string = serializeDate(searchBoxState.stay.to);

    let url: string;

    if(searchBoxState.location.type === "ACCOMMODATION") {
      url = `/hotels/detail/Hotel-${searchBoxState.location.code}/${from}/${to}/${occupancy}/es`;
    } else { 
      url = `/hotels/search/${searchBoxState.location.type}/${searchBoxState.location.code}/${from}/${to}/${occupancy}/es`;
    }

    window.location.href = url;
};

