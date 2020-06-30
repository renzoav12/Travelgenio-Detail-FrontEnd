import React from 'react'
import { Route, Switch } from 'react-router'

import {
  ROUTE_DETAIL,
  ROUTE_SEARCH_CATALOG,
  ROUTE_OLD_SEARCH_CATALOG,
  ROUTE_SEARCH_PRICE,
  ROUTE_OLD_SEARCH_PRICE,
} from './root.routes.constants'
import DetailContainer from '../../containers/Detail'

const homeUrl = window.location.protocol+"//"+window.location.host + "/hotels/home/";

export const getRoutes = () => (
  <div>
    <Switch>
      <Route exact path={ROUTE_SEARCH_CATALOG} component={DetailContainer}/>
      <Route exact path={ROUTE_OLD_SEARCH_CATALOG} component={DetailContainer} />
      <Route exact path={ROUTE_SEARCH_PRICE} component={DetailContainer} />
      <Route exact path={ROUTE_OLD_SEARCH_PRICE} component={DetailContainer} />

      <Route path={ROUTE_DETAIL} render={() => {window.location.href = homeUrl; return null;}}/>
    </Switch>
  </div>
)
