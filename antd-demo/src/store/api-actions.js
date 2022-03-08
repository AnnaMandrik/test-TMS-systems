import {isDataLoaded, changePoint, loadAllData} from './actions';
import { toast } from 'react-toastify';
import {ErrorMessage} from '../const';

export const fetchLoadDataAction = () =>
  async (dispatch, _getState, api) => {
    dispatch(isDataLoaded(true));
    try {
      const {data} = await api.get('/');
      dispatch(loadAllData(data));
    } catch (err) {
        if (err instanceof Error) {
          if  (err.message === ErrorMessage.NetworkError) {
            toast.error(err.message);
            toast.clearWaitingQueue();
          }
        }
      }
    dispatch(isDataLoaded(false));
};


export const fetchChangeDataPointAction = () =>
  async (dispatch, _getState, api) => {
    dispatch(isDataLoaded(true));
    try {
      const {data} = await api.get('/');
      dispatch(changePoint(data));
    } catch (err) {
        if (err instanceof Error) {
          if  (err.message === ErrorMessage.NetworkError) {
            toast.error(err.message);
            toast.clearWaitingQueue();
          }
        }
      }
    dispatch(isDataLoaded(false));
};
