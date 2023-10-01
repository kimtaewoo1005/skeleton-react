import { 
    numberSlice,
    wordSlice,
} from './slices'

export const reducer = {
    number: numberSlice.reducer,
    word: wordSlice.reducer,
}