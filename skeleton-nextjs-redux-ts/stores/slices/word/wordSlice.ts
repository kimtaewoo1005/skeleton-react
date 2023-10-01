import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';

const initialState: string = '';

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    addWord: (state: string, action: PayloadAction<string>) => {
        return state + action.payload;
    },
    removeWord: (state: string, action: PayloadAction<string>) => {
        return state.replace(action.payload, '');
    },
    setWord: (state: string, action: PayloadAction<string>) => {
        return action.payload;
    }
  },
});

/*

1. **User provides reducers in `createSlice`**: you define your reducer functions within the `reducers` object 
when calling `createSlice`.

2. **`createSlice` registers each reducer under `name`**: `createSlice` takes the `name` and `reducers` 
you provide and creates action creators and reducers for you.

3. **A new function will be registered**: `createSlice` automatically generates action creator functions for each reducer. 
These action creators are named after the reducers and are properties of the returned slice object. However, 
the state is not provided as a closure; it's managed by the Redux store and passed to the reducer when an action is dispatched.

4. **When this new function is called**: When you dispatch an action using the generated action creator, 
Redux calls the corresponding reducer function with the current state and the action object. 
Whatever the reducer returns becomes the new state.

So, in essence, the state is managed by the Redux store, not as a closure in the action creator. 
When an action is dispatched, the Redux store calls the appropriate reducer with the current state and the action payload, 
and the return value from the reducer sets the new state.
*/