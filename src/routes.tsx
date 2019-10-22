import React from 'react'
import { Route } from 'react-router'

import {
  ROUTE_HOME,
  ROUTE_NOT_FOUND,
  ROUTE_DETAIL
} from './routes.constants'
import Detail from './components/Detail/Detail'

const EmptyComponent = () => <div />

export const getRoutes = () => (
  <div>
    <Route component={Detail} path={ROUTE_DETAIL} />
  </div>
)
