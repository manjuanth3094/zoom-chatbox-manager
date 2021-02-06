import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import alldatareducer from '../Reducers/reducer'
import displayReducer from '../Reducers/displayReducer'
const configureStore = () => {
	const store = createStore(
		combineReducers({
			allTasks: alldatareducer,
			displayTasks: displayReducer,
		}),
		applyMiddleware(thunk))
	return store
}
export default configureStore