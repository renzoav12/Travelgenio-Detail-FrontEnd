import React from 'react'
import { Route } from 'react-router'

import {
  ROUTE_DETAIL
} from './root.routes.constants'
import Detail from '../Detail/Detail'

const EmptyComponent = () => <div />

export const getRoutes = () => (
  <div>
    <Route path={ROUTE_DETAIL} component={Detail} />
  </div>
)
