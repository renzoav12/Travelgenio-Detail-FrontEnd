import moment, { Moment } from 'moment';
import { SearchBoxStayState } from '@hotels/search-box';

export const serializeDate = (date: Moment | undefined): string | undefined => {
  return date? date.toISOString().substring(0, 10): undefined;
}

export const parseStay = (from: string, to: string): SearchBoxStayState => {
  return {
      from: moment(from, "YYYY-MM-DD"),
      to: moment(to, "YYYY-MM-DD")
  };
}
