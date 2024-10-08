import { configureStore } from '@reduxjs/toolkit';
import { reducer as counterReducer } from './features/counter/counterReducer';

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});