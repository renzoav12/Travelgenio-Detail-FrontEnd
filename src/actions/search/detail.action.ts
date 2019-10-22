
import { DetailActionTypes } from './detail.actionTypes';
import { Action } from 'redux';

export interface ContentFetchStartAction extends Action<DetailActionTypes.CONTENT_FETCH_START> {
}

export interface ContentFetchFailedAction extends Action<DetailActionTypes.CONTENT_FETCH_FAILED> {
}

export interface ContentFetchSuccessAction extends Action<DetailActionTypes.CONTENT_FETCH_SUCCESS> {
}

export type DetailAction = 
| ContentFetchStartAction 
| ContentFetchFailedAction
| ContentFetchSuccessAction;