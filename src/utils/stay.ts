import moment, { Moment } from 'moment';
import { SearchBoxOccupancyState, SearchBoxStayState } from '@hotels/search-box';

export const serializeDate = (date: Moment): string => {
  return date.toISOString().substring(0, 10);
}

export const parseStay = (from: string, to: string): SearchBoxStayState => {
  return {
      from: moment(from, "YYYY-MM-DD"),
      to: moment(to, "YYYY-MM-DD")
  };
}
