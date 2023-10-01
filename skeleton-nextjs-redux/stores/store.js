import { configureStore } from '@reduxjs/toolkit';
import { useSelector as useReduxSelector, 
    useDispatch as useReduxDispatch,
} from 'react-redux';

import { reducer } from './rootReducer'
import { middleware } from './middleware'

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

export const useDispatch = () => useReduxDispatch()
export const useSelector = useReduxSelector