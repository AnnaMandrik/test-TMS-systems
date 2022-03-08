import {createReducer} from '@reduxjs/toolkit';
import {isDataLoaded, changePoint, loadAllData} from './actions';
import {columns, dataSource} from '../const';

const initialState = {
  pageTable: {
    columns: columns, 
    data: dataSource,
  },
  isDataLoaded: true,
};

const pointsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllData, (state, action) => {
      state.pageTable = action.payload;
    })
    .addCase(changePoint, (state, action) => {
      state.pageTable.data = action.payload;
    })
    .addCase(isDataLoaded, (state, action) => {
      state.isDataLoaded = action.payload;
    })
});

export {pointsData};
