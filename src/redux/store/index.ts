import { createStore } from 'redux';
import questionsReducer from './../reducers/questionsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(questionsReducer, composeWithDevTools());

export type RootState = ReturnType<typeof questionsReducer>

export default store;
