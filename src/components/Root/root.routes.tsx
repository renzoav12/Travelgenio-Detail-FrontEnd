import React from 'react'
import { Route, Switch } from 'react-router'

import {
  ROUTE_SEARCH_CATALOG,
  ROUTE_SEARCH_PRICE,
} from './root.routes.constants'
import DetailContainer from '../../containers/Detail'

export const getRoutes = () => (
  <div>
    <Switch>
      <Route path={ROUTE_SEARCH_CATALOG} component={DetailContainer} exact />
      <Route path={ROUTE_SEARCH_PRICE} component={DetailContainer} exact />
    </Switch>
  </div>
)
