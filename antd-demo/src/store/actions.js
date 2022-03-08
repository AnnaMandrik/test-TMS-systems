import { createAction } from '@reduxjs/toolkit';

const ActionType = {
  LoadAllData: 'table/loadAllData',
  ChangePoint: 'table/changePoint',
  IsDataLoaded: 'page/isDataLoaded',
}

const loadAllData = createAction(
  ActionType.LoadAllData,
  (points) => ({payload: points}),
);

const changePoint = createAction(
  ActionType.ChangePoint,
  (point) => ({payload: point}),
);

const isDataLoaded = createAction(
  ActionType.IsDataLoaded,
  (data) => ({payload: data}),
);



export {isDataLoaded, changePoint, loadAllData};