import { GET_LOGS, ADD_LOG, SET_LOADING, LOGS_ERROR } from './types';

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const response = await fetch('/logs');
    const data = await response.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

// Add new log
export const addLog = log => async dispatch => {
  try {
    setLoading();

    const response = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
