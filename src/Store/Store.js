import {createStore,combineReducers,applyMiddleware} from 'redux';
import {logger} from 'redux-logger'
import sampleReducer from '../Reducers/SampleReducer'
export default createStore(combineReducers({sampleReducer}),1,applyMiddleware(logger));