import { combineReducers } from 'redux';

import barGraphReducer from './features/barGraphSlice';
import linearGraphReducer from './features/linearGraphSlice';
import pieChartReducer from './features/pieChartSlice';

const combinedReducer = combineReducers({
  barGraph: barGraphReducer,
  linearGraph: linearGraphReducer,
  pieChart: pieChartReducer,
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
